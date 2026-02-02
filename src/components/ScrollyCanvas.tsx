"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent, motion } from "framer-motion";

const FRAME_COUNT = 48;

export default function ScrollyCanvas() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [loadingProgress, setLoadingProgress] = useState(0);

    // 600vh scroll container for smooth playback
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Map scroll progress to frame index (1 to 48)
    const frameIndex = useTransform(scrollYProgress, [0, 1], [1, FRAME_COUNT]);

    // Preload Images
    useEffect(() => {
        let loadedCount = 0;
        const totalImages = FRAME_COUNT;
        const loadedImages: HTMLImageElement[] = [];

        for (let i = 1; i <= totalImages; i++) {
            const img = new Image();
            // Handle specific file naming: "rupertisauna wasserwelt saunawelt in laufen (X).jpg"
            img.src = `/hero animation/rupertisauna wasserwelt saunawelt in laufen (${i}).jpg`;

            img.onload = () => {
                loadedCount++;
                setLoadingProgress(Math.round((loadedCount / totalImages) * 100));

                if (loadedCount === totalImages) {
                    setImagesLoaded(true);
                }
            };

            // Ensure images are stored in order
            loadedImages[i - 1] = img;
        }

        imagesRef.current = loadedImages;
    }, []);

    const drawFrame = (index: number) => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext("2d");

        if (!canvas || !context) return;

        // Ensure index is within bounds [1, FRAME_COUNT]
        const safeIndex = Math.max(1, Math.min(index, FRAME_COUNT));
        const img = imagesRef.current[safeIndex - 1];

        if (!img || !img.complete) return;

        // Clear canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Calculate aspect preservation (cover)
        const canvasAspectRatio = canvas.width / canvas.height;
        const imgAspectRatio = img.width / img.height;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasAspectRatio > imgAspectRatio) {
            drawWidth = canvas.width;
            drawHeight = canvas.width / imgAspectRatio;
            offsetX = 0;
            offsetY = (canvas.height - drawHeight) / 2;
        } else {
            drawWidth = canvas.height * imgAspectRatio;
            drawHeight = canvas.height;
            offsetX = (canvas.width - drawWidth) / 2;
            offsetY = 0;
        }

        context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

        // Add a cinematic gradient overlay
        const gradient = context.createLinearGradient(0, 0, 0, canvas.height);
        // Top dark for navbar
        gradient.addColorStop(0, "rgba(5, 25, 55, 0.6)");
        // Middle clear
        gradient.addColorStop(0.3, "rgba(5, 25, 55, 0.1)");
        // Bottom blue tint
        gradient.addColorStop(1, "rgba(0, 71, 116, 0.4)");

        context.fillStyle = gradient;
        context.fillRect(0, 0, canvas.width, canvas.height);
    };

    // Update canvas on scroll
    useMotionValueEvent(frameIndex, "change", (latest) => {
        if (imagesLoaded) {
            drawFrame(Math.round(latest));
        }
    });

    // Initial draw and resize handler
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;

                // Redraw current frame
                if (imagesLoaded) {
                    drawFrame(Math.round(frameIndex.get()));
                }
            }
        };

        window.addEventListener("resize", handleResize);
        // Initial setup
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, [imagesLoaded]); // Re-run when images are ready

    return (
        <div ref={containerRef} className="relative h-[400vh] w-full bg-ocean">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="block w-full h-full object-cover"
                />

                {/* Loading State */}
                {!imagesLoaded && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-ocean z-10">
                        <motion.div
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="text-white font-serif text-3xl mb-4 italic"
                        >
                            Ruperti Sauna
                        </motion.div>
                        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-accent-blue transition-all duration-300 ease-out"
                                style={{ width: `${loadingProgress}%` }}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

