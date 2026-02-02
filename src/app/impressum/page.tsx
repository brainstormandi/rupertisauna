import Link from "next/link";
import { ChevronLeft, Scale, FileText, Smartphone, Mail, MapPin } from "lucide-react";

export default function ImpressumPage() {
    return (
        <main className="min-h-screen bg-ocean text-white selection:bg-accent-blue/30 selection:text-white">
            <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">

                {/* Back Link */}
                <Link href="/" className="inline-flex items-center gap-2 text-accent-blue hover:text-white transition-colors mb-12 group">
                    <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    Zurück zur Startseite
                </Link>

                <h1 className="font-serif text-4xl md:text-5xl font-bold mb-16 text-center">Impressum</h1>

                <div className="space-y-16">

                    {/* Contact & Company Info */}
                    <section className="glass p-8 md:p-12 rounded-[32px] border-white/5">
                        <h2 className="font-serif text-2xl font-bold mb-8 flex items-center gap-3">
                            <FileText className="text-accent-blue w-6 h-6" /> Angaben gemäß § 5 TMG
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8 text-ice-blue/80 leading-relaxed">
                            <div>
                                <strong className="block text-white mb-2">Betreiber:</strong>
                                <p>Ruperti-Sauna</p>
                                <p>Kohlhaasstraße 7</p>
                                <p>D-83410 Laufen</p>
                            </div>
                            <div>
                                <strong className="block text-white mb-2">Vertreten durch:</strong>
                                <p>Geschäftsführer: Ralf Deitermann</p>
                                <br />
                                <strong className="block text-white mb-2">Umsatzsteuer-ID:</strong>
                                <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:</p>
                                <p className="font-mono text-white">DE128976155</p>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/10 grid md:grid-cols-2 gap-8">
                            <div>
                                <strong className="block text-white mb-2 flex items-center gap-2"><Smartphone className="w-4 h-4 text-accent-blue" /> Kontakt:</strong>
                                <p>Telefon: <a href="tel:00491791306336" className="hover:text-accent-blue transition-colors">0049 179 1306336</a></p>
                                <p>oder: <a href="tel:+4986829740" className="hover:text-accent-blue transition-colors">+49 8682 9740</a></p>
                                <p>E-Mail: <a href="mailto:rupertisauna@t-online.de" className="hover:text-accent-blue transition-colors">rupertisauna@t-online.de</a></p>
                            </div>
                        </div>
                    </section>

                    {/* Opening Hours & Prices */}
                    <section className="glass p-8 md:p-12 rounded-[32px] border-white/5">
                        <h2 className="font-serif text-2xl font-bold mb-8 text-white">Öffnungszeiten & Preise</h2>

                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Hours */}
                            <div>
                                <h3 className="text-accent-blue font-bold uppercase tracking-widest text-sm mb-6">Öffnungszeiten</h3>
                                <ul className="space-y-4 text-ice-blue/80">
                                    <li className="flex justify-between border-b border-white/5 pb-2">
                                        <span>Di, Do, Fr</span>
                                        <span className="text-white font-bold">17:00 – 22:30 Uhr</span>
                                    </li>
                                    <li className="flex justify-between border-b border-white/5 pb-2">
                                        <span>Samstag (Nov-März)</span>
                                        <span className="text-white font-bold">14:00 – 22:00 Uhr</span>
                                    </li>
                                </ul>
                                <p className="mt-4 text-red-300 text-sm font-bold">Sonn- und Feiertage geschlossen!</p>
                            </div>

                            {/* Prices */}
                            <div>
                                <h3 className="text-accent-blue font-bold uppercase tracking-widest text-sm mb-6">Preise</h3>
                                <ul className="space-y-3 text-ice-blue/80 text-sm">
                                    <li className="flex justify-between">
                                        <span>Sauna mit Schwimmen</span>
                                        <span className="text-white font-bold">EUR 20,00</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Kinder (&lt;14J, Begleitung)</span>
                                        <span className="text-white font-bold">EUR 15,50</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Nur Schwimmen</span>
                                        <span className="text-white font-bold">EUR 6,50</span>
                                    </li>
                                    <li className="flex justify-between text-accent-blue/80">
                                        <span>Abendkasse (ab 20:00 Uhr)</span>
                                        <span className="text-white font-bold">EUR 13,00</span>
                                    </li>
                                </ul>

                                <h4 className="text-white font-bold mt-6 mb-3 text-xs uppercase tracking-widest">10er-Karten</h4>
                                <ul className="space-y-2 text-ice-blue/60 text-sm">
                                    <li className="flex justify-between">
                                        <span>Sauna mit Schwimmen</span>
                                        <span className="text-white">EUR 175,00</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Schwimmen</span>
                                        <span className="text-white">EUR 60,00</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Jahreskarte (Kombi)</span>
                                        <span className="text-white">EUR 700,00</span>
                                    </li>
                                </ul>

                                <h4 className="text-white font-bold mt-6 mb-3 text-xs uppercase tracking-widest">Solarium (8-23 Uhr)</h4>
                                <ul className="space-y-2 text-ice-blue/60 text-sm">
                                    <li className="flex justify-between">
                                        <span>8 Minuten</span>
                                        <span className="text-white">EUR 3,90</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Legal Boilerplate */}
                    <section className="space-y-8 text-ice-blue/60 text-sm leading-relaxed">
                        <div>
                            <h3 className="text-white font-bold text-lg mb-2">Haftung für Inhalte</h3>
                            <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
                            <p className="mt-2">Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
                        </div>

                        <div>
                            <h3 className="text-white font-bold text-lg mb-2">Haftung für Links</h3>
                            <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>
                            <p className="mt-2">Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
                        </div>

                        <div>
                            <h3 className="text-white font-bold text-lg mb-2">Urheberrecht</h3>
                            <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
                            <p className="mt-2">Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
                        </div>
                    </section>

                </div>
            </div>
        </main>
    );
}
