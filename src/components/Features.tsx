"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
    Flame,
    Waves,
    Coffee,
    Heart,
    Info,
    Activity,
    User,
    Clock,
    Droplets,
    Zap,
    Sparkles,
    Star,
    Tag,
    CreditCard,
    Sun
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const saunas = [
    { name: "Trockensauna", temp: "98° C", desc: "Intensive Hitze für optimale Entschlackung und Kreislauftraining." },
    { name: "Trockensauna", temp: "80° C", desc: "Klassisches Schwitzvergnügen zur Stärkung des Immunsystems." },
    { name: "Biosauna", temp: "75° C", desc: "Sanftes Schwitzen, das Blutgefäße weitet und die Haut pflegt." },
    { name: "Kräutersauna", temp: "60° C", desc: "Aromatisches Erlebnis mit wohltuenden Kräuterextrakten." },
    { name: "Römisches Dampfbad", temp: "40° C", desc: "Schonende Körperreinigung mit feinstem Nebel." },
];

const saunaRules = [
    "Vor dem Saunagang sollten die Füße schön warm sein.",
    "Gehen Sie immer trocken in den Saunaraum.",
    "Bleiben Sie nur solange in der Schwitzkammer, wie Sie sich wohlfühlen.",
    "Wer unter Krampfadern leidet, sollte die Füße nicht runterhängen lassen. Liegen ist besser.",
    "Nach dem Saunagang gut abkühlen (Tauchbecken oder kalte Dusche).",
    "Drei Saunagänge nacheinander sind genug.",
    "Nach Beendigung der Saunagänge ausreichend Ruhe halten.",
    "Gleichen Sie den Flüssigkeitsverlust gut aus – am besten mit Mineralwasser."
];

const courses = [
    {
        category: "Fokus",
        title: "Babyschwimmen & Eltern-Kind",
        times: "Do, Fr, So | Altersgerechte Gruppen",
        contact: "JolieVie | 004915125741300 | jolievie@web.de",
        desc: "Wasser ist von Beginn an das natürlichste Element der neuen Welt für die Babys. In Mamas Bauch waren sie 9 Monate im warmen Fruchtwasser der Gebärmutter und wurden sanft hin und her geschaukelt. Das gemeinsame Schwimmen im Wasser ist für Eltern und ihr Baby ein großes Vergnügen. Hier geht es insbesondere um die Förderung der Beweglichkeit, der Sinneswahrnehmung, der Wassergewöhnung des Babys und einer Verbesserung des Herz-Kreislauf-Systems und der Lungenkapazität. Das Element Wasser fördert die Motorik, die Koordination, die soziale Interaktion, die Muskeln und einige wichtige Reflexe und damit auch das Immunsystem. Babys lieben andere Gleichgesinnte um sich herum, sie zu beobachten, zu fühlen und auch von ihnen zu lernen. Das Wasser in der Ruperti-Sauna ist ein Besonderes, denn wir haben hier 32 Grad warmes Salzwasser. Bei einer kleinen verstopften Baby-Nase hilft das Salzwasser sanft diese wieder freizumachen. Ebenso pflegt es Babys Haut und ist besonders bei Neurodermitis eine Wohltat. Das Babyschwimmen in der Ruperti-Sauna ist für Groß und Klein ein kleiner Wellness-Ausflug mit Spiel, Spaß und Entspannung.",
        meta: "Kursblock: 6-8 Einheiten | 65 € bis 100 €",
        featured: true
    },
    {
        category: "Schwimmen",
        title: "Schwimmkurse für Anfänger",
        times: "Mo & Mi: 14:00 – 16:30 | Sa: 9:00 – 12:00",
        contact: "Niklas Siegesleithner | 004367762159540 | office@quallino.at",
        desc: "Qualifizierte Schwimmkurse für Anfänger in Kleingruppen. Anmeldung über www.quallino.at"
    },
    {
        category: "Schwimmen",
        title: "Bines Schwimmschule",
        times: "Sonntag Nachmittag | Max. 5 Kinder",
        contact: "Sabine Lechner | 00491623216521",
        desc: "Schwimmkurse für Kinder (Anfänger/Fortgeschrittene) & Kurse für Erwachsene auf Anfrage."
    },
    {
        category: "Fitness",
        title: "Wassergymnastik (Salzwasser)",
        times: "Fr: 15:00 & 16:00 | Mo: 10:30",
        contact: "Helmut Schwaiger | 004915151150005 | info@hotspot-diving.de",
        desc: "Aqua-Training im Salzwasser ist ein anspruchsvolles Wasserworkout, das Ausdauer trainiert, die Figur formt und den Körper entsäuert."
    },
    {
        category: "Prävention",
        title: "Aqua-Herz-Kreislauf-Training",
        times: "10x Montags, ab 20.10.25 | 07:45 – 08:45",
        contact: "Bildungswerk BGL | 08651/99649-0 | info@bildungswerk-bgl.de",
        desc: "Ideales Herz-Kreislauf-Training für Fettverbrennung und Fitness. So viel Spaß, dass Du die Zeit im Wasser vergisst."
    },
    {
        category: "Power",
        title: "Aqua-Power & Aqua-Fitness",
        times: "Mo: 18:45 & 19:45 | Mi: 19:00 & 20:00",
        contact: "Bettina Kral | +491702313477 | bettina.kral@x-trasoft.com",
        desc: "Intensive Aqua-Fitness-Einheiten zur Steigerung von Kraft und Ausdauer."
    },
    {
        category: "Special",
        title: "Aquasation",
        times: "Sonntag: 17:00 & 18:00",
        contact: "Melanie (Die Sportfee) | 01629384960 | info@diesportfee.de",
        desc: "Unterhaltsames, süchtig machendes Tanztraining im warmen Salzwasser zu Musik aus aller Welt. Für alle Altersgruppen."
    }
];

const reviews = [
    {
        name: "Katharina Hofmeister",
        stars: 5,
        text: "Ich war heute zum ersten Mal in der Ruperti Sauna und werde definitiv öfters vorbei schauen. Die Ruperti Sauna hat eine angenehme Größe, eine schöne Stimmung, auch die anderen Gäste waren sehr freundlich und offen. Auch der Betreiber super nett und freundlich, man ist in einer tollen Atmosphäre und kann dennoch für sich entspannen. Danke für den schönen Abend.",
        date: "Google Rezension"
    },
    {
        name: "Irina Neufeld",
        stars: 5,
        text: "Wir waren da von 20 Uhr für nur 12 Euro pro Person. Supper netter Besitzer hat uns alles erklärt haben da noch gegessen Küche hat bin 21 Uhr auf hat alles supper geschmeckt große Portion die Atmosphäre ist einfach supper der schwimmebad hat grün geleuchtet. Die Sauna war sauber und genug Platz für mehrere Personen. Wir würden gerne wieder hingehen wenn wir mal wieder Urlaub hier machen würden.",
        date: "Google Rezension"
    },
    {
        name: "Danijela Ivin",
        stars: 5,
        text: "Als Dauergast seit 1992 kann ich niur sagen: so eine Sauna sollte jeder in seiner Nähe haben. Immer sauber, tolle Aufgüsse, perfektes Preis Leistungsverhältnis, kreatives Angebot und ein einmaliges Salzschwimmbad, wo sich jede Haut wohl fühlt. Die Inhaber behandeln jeden persönlich, freundlich und sie sind immer da. Wer nicht kommt, verpasst einen erholsamen Ort, der mit Liebe und Kompetenz geführt wird.",
        date: "Google Rezension"
    },
    {
        name: "Bay Max",
        stars: 5,
        text: "Schöne kleine Entspannte Familien Sauna mit Stammtisch Feeling. Super Preise Gestaltung und ganz tolles Essen von der Chefin selbstgemacht.",
        date: "Google Rezension"
    },
    {
        name: "Birgit G",
        stars: 5,
        text: "Wer schön schwitzen und schwimmen möchte, ist die Rupertisauna sehr zu empfehlen. Preis - Leistung ist top 🔝 zum vergleich mit anderen Saunabetrieben! Die Küche ist sehr lecker, Geschmacklich gut abgeschmeckt, liebevoll angerichtet und die Portion passt perfekt!",
        date: "Google Rezension"
    },
    {
        name: "Silvia Reininger",
        stars: 5,
        text: "Die Erklärung der Bedienung des SB-Solariums könnte man nicht besser machen. Der heutige 2. Besuch war wieder so entspannend wie gestern. Lieber Ralf, so schnell wirst du uns nicht los.",
        date: "Google Rezension"
    },
    {
        name: "Jonah",
        stars: 5,
        text: "Wunderschöne Saunalandschaft die für mich keine Wünsche offen lässt. Die Pizzen sind auch extrem gut und es gibt wöchentliche \"Spezial-Pizzen\". Diese gehört für mich zu jedem Saunagang dazu und bislang waren alle ausgezeichnet. Vielen Dank und bis bald.",
        date: "Google Rezension"
    }
];

export default function Features() {

    const [activeTab, setActiveTab] = useState<"sauna" | "pool">("sauna");
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Auto-rotate reviews every 8 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    // Scroll active review into view
    useEffect(() => {
        if (scrollContainerRef.current) {
            const activeElement = scrollContainerRef.current.children[currentReviewIndex] as HTMLElement;
            if (activeElement) {
                // Use scrollTo inside the container instead of scrollIntoView to prevent page jump
                const container = scrollContainerRef.current;
                const scrollTop = activeElement.offsetTop - container.offsetTop;
                container.scrollTo({ top: scrollTop, behavior: "smooth" });
            }
        }
    }, [currentReviewIndex]);

    return (
        <section id="wellness" className="relative bg-ocean py-24 md:py-40 px-6 lg:px-24 overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-blue/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-deep-blue/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                {/* Navigation Switcher */}
                <div className="flex justify-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex bg-white/5 p-1.5 rounded-full border border-white/10 backdrop-blur-md relative"
                    >
                        <motion.button
                            onClick={() => setActiveTab("sauna")}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-16 py-6 rounded-full text-lg font-bold uppercase tracking-[0.2em] transition-colors relative z-10 ${activeTab === "sauna" ? "bg-accent-blue text-ocean shadow-lg shadow-accent-blue/20" : "text-white/60 hover:text-white"
                                }`}
                        >
                            Saunawelt
                        </motion.button>
                        <motion.button
                            onClick={() => setActiveTab("pool")}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-16 py-6 rounded-full text-lg font-bold uppercase tracking-[0.2em] transition-colors relative z-10 ${activeTab === "pool" ? "bg-accent-blue text-ocean shadow-lg shadow-accent-blue/20" : "text-white/60 hover:text-white"
                                }`}
                        >
                            Wasserwelt
                        </motion.button>
                    </motion.div>
                </div>

                <AnimatePresence mode="wait">
                    {activeTab === "sauna" ? (
                        <motion.div
                            key="sauna-pane"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Sauna Deeply Info Section */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 items-center">
                                <div>
                                    <h2 className="font-serif text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                                        Die Kunst des <span className="italic text-accent-blue">Schwitzens</span>
                                    </h2>
                                    <div className="space-y-6 text-ice-blue/70 text-xl md:text-2xl leading-relaxed font-light">
                                        <p>
                                            Die Erhöhung der Körpertemperatur auf bis zu 39°C während der Schwitzphase (&bdquo;künstliches Fieber&ldquo;) bewirkt innerhalb des Körpers dasselbe, was auch ein echtes Fieber bewirkt, nämlich eine Zerstörung von Krankheitserregern.
                                        </p>
                                        <p>
                                            Die Abfolge von Hitze mit dem anschließenden Kaltbad entspannt die Muskulatur, senkt den Blutdruck und regt das Immunsystem sowie den Stoffwechsel nachhaltig an.
                                        </p>
                                    </div>
                                </div>
                                <div className="glass p-12 rounded-[40px] border-white/10 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-8 opacity-5">
                                        <Flame className="w-48 h-48" />
                                    </div>
                                    <h3 className="font-serif text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                        <Sparkles className="text-accent-blue w-6 h-6" /> Hautpflege & Anti-Aging
                                    </h3>
                                    <p className="text-ice-blue/70 text-base md:text-lg leading-relaxed mb-6">
                                        Saunabaden verlangsamt die Hautalterung. Unmittelbar nach dem Betreten des Saunaraumes weiten sich die Blutgefäße, die Durchblutung nimmt zu und die Oberflächentemperatur steigt auf 40-42°C an.
                                    </p>
                                    <p className="text-ice-blue/70 text-base md:text-lg leading-relaxed">
                                        Die Hornschicht quillt auf, verhornte Hautzellen lockern sich und können leicht abgespült werden – eine gründliche, aber schonende Körperreinigung.
                                    </p>
                                </div>
                            </div>

                            {/* Sauna Gallery */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 w-full">
                                {[
                                    "/bilder saunen/sauna rupterisauna wellness (1).jpg",
                                    "/bilder saunen/sauna rupterisauna wellness (2).jpg",
                                    "/bilder saunen/sauna wellness (16).jpg"
                                ].map((src, idx) => (
                                    <div key={idx} className="rounded-2xl overflow-hidden aspect-[4/3] relative group/img cursor-pointer">
                                        <div className="absolute inset-0 bg-black/20 group-hover/img:bg-transparent transition-colors z-10" />
                                        <img
                                            src={src}
                                            alt={`Sauna Impression ${idx + 1}`}
                                            className="w-full h-full object-cover transform group-hover/img:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Sauna Types Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-32">
                                {saunas.map((sauna, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ y: -8 }}
                                        className="glass p-8 rounded-3xl border-white/5 flex flex-col items-center text-center transition-all hover:border-accent-blue/30"
                                    >
                                        <div className="w-12 h-12 rounded-2xl bg-accent-blue/10 flex items-center justify-center mb-6">
                                            <Flame className="text-accent-blue w-6 h-6" />
                                        </div>
                                        <div className="text-xl font-bold text-white mb-1 uppercase tracking-wider">{sauna.name}</div>
                                        <div className="text-accent-blue text-lg font-bold mb-4">{sauna.temp}</div>
                                        <p className="text-white/60 text-base leading-relaxed uppercase tracking-wider">{sauna.desc}</p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Wellness Rules Section */}
                            <div className="bg-deep-blue/20 rounded-[40px] border border-white/10 p-12 md:p-20 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                                    <Info className="w-64 h-64" />
                                </div>
                                <h3 className="font-serif text-3xl font-bold text-white mb-12">Richtig Saunieren: Unsere Empfehlungen</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                    {saunaRules.map((rule, i) => (
                                        <div key={i} className="flex gap-4 items-start">
                                            <div className="w-6 h-6 rounded-full border border-accent-blue/30 flex items-center justify-center shrink-0 mt-1">
                                                <span className="text-xs text-accent-blue">{i + 1}</span>
                                            </div>
                                            <p className="text-ice-blue/70 text-lg leading-relaxed">{rule}</p>
                                        </div>

                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            id="pools"
                            key="pool-pane"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Pool Header Info */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 items-center">
                                <div>
                                    <h2 className="font-serif text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                                        Natürliches <span className="italic text-accent-blue">Salzwasser</span>
                                    </h2>
                                    <div className="space-y-6 text-ice-blue/70 text-xl md:text-2xl leading-relaxed font-light">
                                        <p>
                                            Wasser ist von Beginn an das natürlichste Element. In der Rupertisauna geniessen Sie 32° Grad warmes Salzwasser, das sanft Augen und Schleimhäute schont.
                                        </p>
                                        <p>
                                            Bei einer verstopften Baby-Nase hilft das Salzwasser sanft diese wieder freizumachen. Ebenso pflegt es die Haut und ist besonders bei Neurodermitis eine Wohltat.
                                        </p>
                                    </div>
                                </div>
                                <div className="relative group rounded-[40px] overflow-hidden aspect-video">
                                    <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/30 to-deep-blue/60 backdrop-blur-2xl border border-white/10 flex items-center justify-center">
                                        <Waves className="w-24 h-24 text-accent-blue/20 animate-pulse" />
                                        <div className="absolute bottom-8 left-8 text-white font-serif text-2xl">32° Thermal Salzwasser</div>
                                    </div>
                                </div>
                            </div>

                            {/* Pool Gallery */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 w-full">
                                {[
                                    "/bilder schwimmbad/schwimmbad-rupertisauna (1).jpg",
                                    "/bilder schwimmbad/schwimmbad-rupertisauna (2).jpg",
                                    "/bilder schwimmbad/schwimmbad-rupertisauna (3).jpg"
                                ].map((src, idx) => (
                                    <div key={idx} className="rounded-2xl overflow-hidden aspect-[4/3] relative group/img cursor-pointer">
                                        <div className="absolute inset-0 bg-black/20 group-hover/img:bg-transparent transition-colors z-10" />
                                        <img
                                            src={src}
                                            alt={`Pool Impression ${idx + 1}`}
                                            className="w-full h-full object-cover transform group-hover/img:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Comprehensive Courses Grid */}
                            <div className="mb-32">
                                <header className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                                    <div className="max-w-xl">
                                        <h3 className="font-serif text-4xl font-bold text-white mb-4 italic">Kursprogramm & Wasserwelt</h3>
                                        <p className="text-ice-blue/50 text-lg">Entdecken Sie unser vielfältiges Angebot von Babyschwimmen über Kinderschwimmkurse bis hin zum energetischen Aqua-Fitness.</p>
                                    </div>
                                    <div className="flex items-center gap-3 text-white/40 text-[10px] uppercase tracking-widest">
                                        <Droplets className="w-4 h-4 text-accent-blue" /> Scroll for More Details
                                    </div>
                                </header>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {courses.map((course, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{ scale: 1.01 }}
                                            className={`glass p-10 rounded-[32px] border-white/5 flex flex-col justify-between h-full group transition-all ${course.featured ? "md:col-span-2 lg:col-span-2 border-accent-blue/20 bg-accent-blue/5" : ""
                                                }`}
                                        >
                                            <div>
                                                <div className="flex justify-between items-start mb-8">
                                                    <span className={`text-xs font-bold uppercase tracking-[0.3em] ${course.featured ? "text-white" : "text-accent-blue/60"}`}>
                                                        {course.category}
                                                    </span>
                                                    <Activity className={`w-6 h-6 ${course.featured ? "text-white" : "text-white/10 group-hover:text-accent-blue"} transition-colors`} />
                                                </div>
                                                <h4 className={`text-2xl md:text-3xl font-bold text-white mb-8 group-hover:text-accent-blue transition-colors leading-tight ${course.featured ? "max-w-xl" : ""}`}>
                                                    {course.title}
                                                </h4>
                                                <div className={`grid grid-cols-1 ${course.featured ? "md:grid-cols-2" : ""} gap-6 mb-8`}>
                                                    <div className="space-y-4">
                                                        <div className="flex gap-4 items-start">
                                                            <Clock className="w-6 h-6 text-accent-blue shrink-0 mt-0.5" />
                                                            <div className="text-base text-ice-blue/70 font-medium">{course.times}</div>
                                                        </div>
                                                        <div className="flex gap-4 items-start">
                                                            <User className="w-6 h-6 text-accent-blue shrink-0 mt-0.5" />
                                                            <div className="text-base text-ice-blue/70 font-medium">{course.contact}</div>
                                                        </div>
                                                    </div>
                                                    {course.featured && course.meta && (
                                                        <div className="bg-white/10 p-6 rounded-3xl border border-white/10">
                                                            <div className="text-xs uppercase tracking-widest text-white/50 mb-2">Konditionen</div>
                                                            <div className="text-lg text-accent-blue font-bold tracking-tight">{course.meta}</div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className={`pt-8 border-t border-white/10 text-base text-white/50 leading-relaxed italic ${course.featured ? "text-lg text-white/70" : ""}`}>
                                                {course.desc}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Cafeteria Integrated Section */}
                <div id="bistro" className="mt-48 mb-32 relative group">
                    <div className="absolute inset-0 bg-accent-blue/5 blur-[100px] rounded-full pointer-events-none" />
                    <div className="glass p-8 md:p-12 rounded-[40px] border-white/5 relative overflow-hidden flex flex-col gap-12">
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none" />

                        {/* Top Content: Text & Icon */}
                        <div className="flex flex-col md:flex-row items-center gap-16 relative z-10">
                            <div className="flex-1">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 rounded-xl bg-accent-blue/10 text-accent-blue">
                                        <Coffee className="w-8 h-8" />
                                    </div>
                                    <span className="text-accent-blue font-bold uppercase tracking-widest text-sm">Genuss & Entspannung</span>
                                </div>
                                <h3 className="font-serif text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                                    Cafeteria & <span className="italic text-accent-blue">Bistro</span>
                                </h3>
                                <p className="text-ice-blue/70 text-xl leading-relaxed mb-10 max-w-xl">
                                    &bdquo;Unser Bistro-Bereich verwöhnt Sie mit hausgemachten Speisen und einer reichen Auswahl an Getränken in einer entspannten Atmosphäre.&ldquo;
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <span className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm font-bold uppercase tracking-widest text-white/80 hover:bg-white/10 transition-colors">
                                        Hausgemachte Speisen
                                    </span>
                                    <span className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm font-bold uppercase tracking-widest text-white/80 hover:bg-white/10 transition-colors">
                                        Erfrischende Getränke
                                    </span>
                                </div>
                            </div>

                            <div className="w-full md:w-1/3 relative aspect-square hidden md:block">
                                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 to-deep-blue/40 rounded-3xl backdrop-blur-sm border border-white/10 flex items-center justify-center p-12">
                                    <Coffee className="w-full h-full text-white/10" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Sparkles className="w-24 h-24 text-accent-blue animate-pulse opacity-50" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image Gallery */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 w-full">
                            {[
                                "/bilder cafeteria/rupertisauna-cafeteria (9).jpg",
                                "/bilder cafeteria/rupertisauna-cafeteria (5).jpg",
                                "/bilder cafeteria/rupertisauna-cafeteria (7).jpg"
                            ].map((src, idx) => (
                                <div key={idx} className="rounded-2xl overflow-hidden aspect-[4/3] relative group/img cursor-pointer">
                                    <div className="absolute inset-0 bg-black/20 group-hover/img:bg-transparent transition-colors z-10" />
                                    {/* Note: Using simple img tag for direct local access without Next.js Image optimization complexity for now, or use standard img */}
                                    <img
                                        src={src}
                                        alt={`Cafeteria Impression ${idx + 1}`}
                                        className="w-full h-full object-cover transform group-hover/img:scale-110 transition-transform duration-700"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>



                {/* Reviews Interactive Layout */}
                <div className="mb-40">
                    <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                        Das sagen unsere <span className="text-accent-blue italic">Gäste</span>
                    </h3>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start h-auto lg:h-[600px]">
                        {/* Left: Featured Review (Sticky) - Takes 3 cols */}
                        <div className="lg:col-span-3 h-full">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentReviewIndex}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4 }}
                                    className="glass p-8 md:p-12 rounded-[40px] border-white/10 h-full flex flex-col justify-center relative overflow-hidden"
                                >
                                    <Sparkles className="absolute top-0 right-0 w-64 h-64 text-white/5 pointer-events-none" />
                                    <div className="relative z-10">
                                        <div className="flex gap-1 mb-8">
                                            {[...Array(reviews[currentReviewIndex].stars)].map((_, s) => (
                                                <Star key={s} className="w-6 h-6 text-accent-blue fill-accent-blue" />
                                            ))}
                                        </div>
                                        <h4 className="font-serif text-xl md:text-2xl font-normal text-white mb-8 leading-relaxed italic">
                                            &bdquo;{reviews[currentReviewIndex].text}&ldquo;
                                        </h4>
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-accent-blue/20 flex items-center justify-center text-accent-blue font-bold text-xl">
                                                {reviews[currentReviewIndex].name.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="text-white font-bold text-lg">{reviews[currentReviewIndex].name}</div>
                                                <div className="text-white/40 text-sm">{reviews[currentReviewIndex].date}</div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Right: Vertical Scroll List - Takes 2 cols */}
                        <div
                            ref={scrollContainerRef}
                            className="lg:col-span-2 h-[500px] lg:h-full overflow-y-auto pr-2 space-y-4"
                            style={{
                                scrollbarWidth: "none",
                                msOverflowStyle: "none",
                                maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
                                WebkitMaskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)"
                            }}
                        >
                            {reviews.map((review, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentReviewIndex(i)}
                                    className={`w-full text-left p-6 rounded-3xl border transition-all duration-300 group ${currentReviewIndex === i
                                        ? "bg-accent-blue/10 border-accent-blue shadow-lg shadow-accent-blue/10"
                                        : "glass border-white/5 hover:border-white/20 hover:bg-white/5"
                                        }`}
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <span className={`font-bold ${currentReviewIndex === i ? "text-accent-blue" : "text-white"}`}>
                                            {review.name}
                                        </span>
                                        <div className="flex gap-0.5">
                                            {[...Array(review.stars)].map((_, s) => (
                                                <Star key={s} className={`w-3 h-3 ${currentReviewIndex === i ? "text-accent-blue fill-accent-blue" : "text-white/30 fill-white/30"}`} />
                                            ))}
                                        </div>
                                    </div>
                                    <p className={`text-sm line-clamp-2 ${currentReviewIndex === i ? "text-white/80" : "text-white/40"}`}>
                                        "{review.text}"
                                    </p>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center mt-12">
                        <a href="https://www.google.com/search?sca_esv=209cddf4958ab46c&rlz=1C1GCEA_enAT1147AT1147&sxsrf=ANbL-n7QqJ1_sAx1ONyszcP5lljgoTWghw:1769765022301&si=AL3DRZFIhG6pAqfNLal55wUTwygCG0fClF3UxiOmgw9Hq7nbWfWgJZ7ybpDLRU-elWyktTvWZwXyQycscWMZlq0p1KFYwd-_da8kL8WpYvabEAVPZiSCxdwOk61ourV4crhjBNs2fXmVjDw9IAewYr-5tuJKIXxS-A%3D%3D&q=Ruperti-Sauna+Rezensionen&sa=X&ved=2ahUKEwjl0fW7-LKSAxVulP0HHZOGGOMQ0bkNegQIJBAH&biw=2291&bih=1270&dpr=1&aic=0" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full border border-white/10 text-white/60 hover:text-white hover:bg-white/5 transition-all text-xs uppercase tracking-widest">
                            Alle Rezensionen auf Google lesen
                        </a>
                    </div>
                </div>

                {/* Prices Section */}
                <div className="mb-40 relative px-4 md:px-0">
                    <div className="absolute inset-0 bg-accent-blue/5 blur-[100px] rounded-full pointer-events-none" />
                    <div className="glass p-8 md:p-16 rounded-[40px] border-white/5 relative z-10">
                        <h3 className="font-serif text-3xl md:text-5xl font-bold text-white mb-16 text-center">
                            Unsere <span className="text-accent-blue italic">Preise</span>
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {/* Column 1: Eintritt */}
                            <div className="space-y-8 text-sm md:text-base">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-accent-blue/10 rounded-xl text-accent-blue"><Tag size={24} /></div>
                                    <h4 className="text-xl font-bold text-white tracking-widest uppercase">Eintritt</h4>
                                </div>
                                <ul className="space-y-6">
                                    <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end border-b border-white/5 pb-2 gap-1">
                                        <span className="text-ice-blue/80 font-medium">Sauna mit Schwimmen</span>
                                        <span className="text-white font-bold text-lg whitespace-nowrap">€ 20,00</span>
                                    </li>
                                    <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end border-b border-white/5 pb-2 gap-1">
                                        <span className="text-ice-blue/80 font-medium">Kinder unter 14 J. <span className="text-xs text-white/40">(in Begleitung)</span></span>
                                        <span className="text-white font-bold text-lg whitespace-nowrap">€ 15,50</span>
                                    </li>
                                    <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end border-b border-white/5 pb-2 gap-1">
                                        <span className="text-ice-blue/80 font-medium">Schwimmen</span>
                                        <span className="text-white font-bold text-lg whitespace-nowrap">€ 6,50</span>
                                    </li>
                                    <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end border-b border-white/5 pb-2 gap-1">
                                        <span className="text-ice-blue/80 font-medium">Abendkasse ab 20:00 Uhr <br /><span className="text-xs text-white/40">(Sauna mit Schwimmen, Di-Sa)</span></span>
                                        <span className="text-white font-bold text-lg whitespace-nowrap">€ 13,00</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Column 2: Cards */}
                            <div className="space-y-8 text-sm md:text-base">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-accent-blue/10 rounded-xl text-accent-blue"><CreditCard size={24} /></div>
                                    <h4 className="text-xl font-bold text-white tracking-widest uppercase">Karten</h4>
                                </div>
                                <ul className="space-y-6">
                                    <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end border-b border-white/5 pb-2 gap-1">
                                        <span className="text-ice-blue/80 font-medium">10er Sauna mit Schwimmen</span>
                                        <span className="text-white font-bold text-lg whitespace-nowrap">€ 175,00</span>
                                    </li>
                                    <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end border-b border-white/5 pb-2 gap-1">
                                        <span className="text-ice-blue/80 font-medium">10er Schwimmen</span>
                                        <span className="text-white font-bold text-lg whitespace-nowrap">€ 60,00</span>
                                    </li>
                                    <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end border-b border-white/5 pb-2 gap-1">
                                        <span className="text-ice-blue/80 font-medium">Jahreskarte (Sauna + Schwimmen)</span>
                                        <span className="text-white font-bold text-lg whitespace-nowrap">€ 700,00</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Column 3: Solarien */}
                            <div className="space-y-8 text-sm md:text-base">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-accent-blue/10 rounded-xl text-accent-blue"><Sun size={24} /></div>
                                    <h4 className="text-xl font-bold text-white tracking-widest uppercase">Solarien</h4>
                                </div>
                                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
                                    <div className="text-accent-blue font-bold uppercase tracking-widest mb-2 text-xs">Täglich 8:00 – 23:00 Uhr</div>
                                    <div className="text-4xl font-bold text-white mb-2">€ 3,90</div>
                                    <div className="text-ice-blue/60">pro 8 Minuten</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Standard Info Strips - 2 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-40">
                    {/* Opening Hours */}
                    <div className="glass p-12 rounded-[40px] relative overflow-hidden group border-white/5">
                        <Clock className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5 group-hover:text-white/10 transition-colors" />
                        <h3 className="font-serif text-3xl font-bold text-white mb-8 flex items-center gap-3">
                            <Clock className="text-accent-blue w-6 h-6" /> Öffnungszeiten
                        </h3>
                        <div className="space-y-6">
                            <div>
                                <div className="text-xs uppercase tracking-[0.2em] text-accent-blue font-bold mb-2">Sauna Betrieb</div>
                                <div className="flex justify-between items-center text-white/80 border-b border-white/5 pb-2">
                                    <span className="text-lg">Di, Do, Fr</span>
                                    <span className="text-xl font-bold text-white">17:00 – 22:30</span>
                                </div>
                            </div>
                            <div>
                                <div className="text-xs uppercase tracking-[0.2em] text-accent-blue font-bold mb-2">November bis Ende April</div>
                                <div className="flex justify-between items-center text-white/80 border-b border-white/5 pb-2">
                                    <span className="text-lg">Samstag</span>
                                    <span className="text-xl font-bold text-white">14:00 – 22:00</span>
                                </div>
                            </div>
                            <div className="pt-2">
                                <span className="px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest">
                                    Sonn- & Feiertage geschlossen
                                </span>
                            </div>
                        </div>
                    </div>



                    {/* Gift Cards */}
                    <div className="bg-accent-blue p-12 rounded-[40px] flex flex-col justify-between group cursor-pointer hover:bg-white transition-colors duration-500">
                        <Heart className="w-16 h-16 text-ocean group-hover:scale-110 transition-transform mb-12" />
                        <div id="kontakt">
                            <h3 className="text-ocean font-bold text-4xl mb-6 leading-tight">Geschenkgutscheine</h3>
                            <p className="text-ocean/70 text-xl leading-relaxed">
                                Machen Sie Ihren Liebsten eine Freude mit Wellness-Momenten in der Rupertisauna.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Footer Final */}
            <footer className="pt-24 border-t border-white/5 bg-ocean/30 backdrop-blur-3xl -mx-6 lg:-mx-24 px-6 lg:px-24">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    <div className="lg:col-span-2">
                        <div className="font-serif text-4xl font-bold text-white mb-6 tracking-tighter">RUPERTISAUNA</div>
                        <p className="text-ice-blue/60 max-w-sm text-base leading-relaxed">
                            Ralf und Bärbel Deitermann sowie das Wellness-Team derRupertisauna wünschen Ihnen einen Angenehmen Aufenthalt.
                        </p>
                    </div>
                    <div>
                        <h5 className="text-white text-sm font-bold uppercase tracking-[0.2em] mb-8">Kontakt</h5>
                        <ul className="text-ice-blue/60 text-sm space-y-4 tracking-widest leading-relaxed">
                            <li>
                                <strong className="text-white uppercase block mb-1">Ruperti-Sauna</strong>
                                Kohlhaasstraße 7<br />
                                D-83410 Laufen
                            </li>
                            <li>
                                <div className="mb-1">Telefon:</div>
                                <a href="tel:00491791306336" className="hover:text-accent-blue transition-colors block">0049 179 1306336</a>
                                <span className="block text-xs my-1 opacity-50">oder</span>
                                <a href="tel:+4986829740" className="hover:text-accent-blue transition-colors block">+49 8682 9740</a>
                            </li>
                            <li>
                                <div className="mb-1">E-Mail:</div>
                                <a href="mailto:rupertisauna@t-online.de" className="hover:text-accent-blue transition-colors">rupertisauna@t-online.de</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-white text-sm font-bold uppercase tracking-[0.2em] mb-8">Rechtliches</h5>
                        <ul className="text-ice-blue/60 text-sm space-y-4 uppercase tracking-widest">
                            <li><Link href="/impressum" className="hover:text-accent-blue transition-colors">Impressum</Link></li>
                            <li><Link href="/datenschutz" className="hover:text-accent-blue transition-colors">Datenschutz</Link></li>
                            <li className="text-accent-blue/80 pt-4">Sonn- & Feiertage geschlossen</li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto py-8 text-center text-xs uppercase tracking-[0.2em] text-white/30 border-t border-white/5">
                    &copy; 2026 Rupertisauna. Saunawelt - Wasserwelt - Cafeteria | Umsetzung: <a href="https://ki-marketingagentur.jetzt/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">BrainStorm KI Marketingagentur</a>
                </div>
            </footer>
        </section>
    );
}
