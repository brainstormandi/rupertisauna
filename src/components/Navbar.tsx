"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
    { name: "Saunawelt", href: "#wellness" },
    { name: "Wasserwelt", href: "#pools" },
    { name: "Cafeteria", href: "#bistro" },
    { name: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-ocean/80 backdrop-blur-lg py-6" : "bg-transparent py-10"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-4 cursor-pointer"
                >
                    <img src="/logo.svg" alt="Rupertisauna Logo" className="w-14 h-14 object-contain" />
                    <span className="font-serif text-2xl font-bold text-white tracking-widest">
                        RUPERTISAUNA
                    </span>
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-12 items-center">
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="font-sans text-sm uppercase tracking-[0.2em] text-white/70 hover:text-accent-blue transition-colors"
                        >
                            {link.name}
                        </motion.a>
                    ))}
                    <motion.a
                        href="tel:+491791306336"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="px-6 py-3 bg-accent-blue hover:bg-white text-ocean text-sm font-bold uppercase tracking-widest rounded-full transition-all flex items-center gap-2"
                    >
                        <Phone size={16} />
                        Anrufen
                    </motion.a>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white p-2 focus:outline-none"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-ocean/95 backdrop-blur-xl border-t border-white/10 px-6 py-12 flex flex-col items-center gap-8 md:hidden"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="font-serif text-3xl text-white hover:text-accent-blue transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a href="tel:+491791306336" className="mt-4 w-full max-w-xs py-4 bg-accent-blue text-ocean font-bold uppercase tracking-widest rounded-xl flex items-center justify-center gap-2">
                            <Phone size={20} />
                            Anrufen
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
