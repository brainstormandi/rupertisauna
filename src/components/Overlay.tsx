"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Section 1 Opacity & Y
    const s1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.35], [1, 1, 0]);
    const s1Scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);

    // Section 2 Opacity & Y
    const s2Opacity = useTransform(scrollYProgress, [0.35, 0.45, 0.55, 0.65], [0, 1, 1, 0]);
    const s2X = useTransform(scrollYProgress, [0.35, 0.45], [-50, 0]);

    // Section 3 Opacity & Y
    const s3Opacity = useTransform(scrollYProgress, [0.75, 0.85, 0.95, 1], [0, 1, 1, 0]);
    const s3X = useTransform(scrollYProgress, [0.75, 0.85], [50, 0]);

    return (
        <div ref={containerRef} className="pointer-events-none absolute inset-0 z-10 h-full">
            {/* Section 1: Eintauchen */}
            <div className="sticky top-0 flex h-screen w-full items-center justify-center px-6">
                <motion.div
                    style={{ opacity: s1Opacity, scale: s1Scale }}
                    className="text-center bg-black/20 backdrop-blur-sm p-8 md:p-12 rounded-[40px] border border-white/10"
                >
                    <h1 className="font-serif text-5xl md:text-8xl font-bold text-white drop-shadow-xl leading-tight">
                        &bdquo;URLAUB VOM <br />
                        <span className="italic text-accent-blue">ALLTAG&ldquo;</span>
                    </h1>
                    <p className="mt-8 font-sans text-xl md:text-2xl text-white font-medium drop-shadow-md max-w-3xl mx-auto leading-relaxed">
                        Eine familiäre Atmosphäre und ein natürliches Ambiente sorgen für ein unvergessliches Saunavergnügen. Seien Sie unser Gast, wir freuen uns auf Sie!
                    </p>
                </motion.div>
            </div>

            {/* Section 2: Salzwasser */}
            <div className="sticky top-0 flex h-screen w-full items-center justify-start px-6 md:px-24">
                <motion.div
                    style={{ opacity: s2Opacity, x: s2X }}
                    className="max-w-xl bg-black/20 backdrop-blur-sm p-8 rounded-[40px] border border-white/10"
                >
                    <h2 className="font-serif text-4xl md:text-6xl font-bold text-white drop-shadow-xl">
                        Wohlfühlen im <br />
                        <span className="text-accent-blue italic">Salzwasser</span>
                    </h2>
                    <p className="mt-6 font-sans text-lg md:text-xl text-white font-medium drop-shadow-md leading-relaxed">
                        Das Wasser in der Ruperti-Sauna ist ein Besonderes, denn wir haben hier 32 Grad warmes Salzwasser. Es pflegt die Haut und ist besonders bei Neurodermitis eine Wohltat.
                    </p>
                </motion.div>
            </div>

            {/* Section 3: Regeneration */}
            <div className="sticky top-0 flex h-screen w-full items-center justify-end px-6 md:px-24">
                <motion.div
                    style={{ opacity: s3Opacity, x: s3X }}
                    className="max-w-xl text-right bg-black/20 backdrop-blur-sm p-8 rounded-[40px] border border-white/10"
                >
                    <h2 className="font-serif text-4xl md:text-6xl font-bold text-white drop-shadow-xl">
                        Erholung & <br />
                        <span className="text-accent-blue font-italic">Gesundheit</span>
                    </h2>
                    <p className="mt-6 font-sans text-lg md:text-xl text-white font-medium drop-shadow-md leading-relaxed text-glow-blue">
                        Die Abfolge von Hitze mit dem anschließenden Kaltbad entspannt die Muskulatur und regt das Immunsystem an.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
