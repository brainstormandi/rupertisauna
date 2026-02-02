import Link from "next/link";
import { ChevronLeft, Lock } from "lucide-react";

export default function DatenschutzPage() {
    return (
        <main className="min-h-screen bg-ocean text-white selection:bg-accent-blue/30 selection:text-white">
            <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">

                {/* Back Link */}
                <Link href="/" className="inline-flex items-center gap-2 text-accent-blue hover:text-white transition-colors mb-12 group">
                    <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    Zurück zur Startseite
                </Link>

                <h1 className="font-serif text-4xl md:text-5xl font-bold mb-16 text-center flex items-center justify-center gap-4">
                    <Lock className="w-10 h-10 text-accent-blue" />
                    Datenschutzerklärung
                </h1>

                <div className="space-y-12 text-ice-blue/80 leading-relaxed text-sm md:text-base">

                    {/* Section 1 */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6">1. Datenschutz auf einen Blick</h2>
                        <h3 className="text-lg font-bold text-white mb-2">Allgemeine Hinweise</h3>
                        <p className="mb-4">Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>

                        <h3 className="text-lg font-bold text-white mb-2">Datenerfassung auf dieser Website</h3>
                        <h4 className="font-bold text-white mt-4">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
                        <p className="mb-4">Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>

                        <h4 className="font-bold text-white mt-4">Wie erfassen wir Ihre Daten?</h4>
                        <p className="mb-4">Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>
                        <p className="mb-4">Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</p>

                        <h4 className="font-bold text-white mt-4">Wofür nutzen wir Ihre Daten?</h4>
                        <p className="mb-4">Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.</p>

                        <h4 className="font-bold text-white mt-4">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
                        <p className="mb-4">Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.</p>
                        <p className="mb-4">Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.</p>

                        <h3 className="text-lg font-bold text-white mb-2 mt-6">Analyse-Tools und Tools von Drittanbietern</h3>
                        <p className="mb-4">Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit Cookies und mit sogenannten Analyseprogrammen.</p>
                        <p className="mb-4">Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung.</p>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6">2. Hosting und Content Delivery Networks (CDN)</h2>
                        <h3 className="text-lg font-bold text-white mb-2">Externes Hosting</h3>
                        <p className="mb-4">Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Webseitenzugriffe und sonstige Daten, die über eine Website generiert werden, handeln.</p>
                        <p className="mb-4">Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).</p>
                        <p className="mb-4">Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.</p>

                        <h3 className="text-lg font-bold text-white mb-2 mt-4">Abschluss eines Vertrages über Auftragsverarbeitung</h3>
                        <p className="mb-4">Um die datenschutzkonforme Verarbeitung zu gewährleisten, haben wir einen Vertrag über Auftragsverarbeitung mit unserem Hoster geschlossen.</p>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6">3. Allgemeine Hinweise und Pflichtinformationen</h2>
                        <h3 className="text-lg font-bold text-white mb-2">Datenschutz</h3>
                        <p className="mb-4">Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
                        <p className="mb-4">Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.</p>
                        <p className="mb-4">Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>

                        <h3 className="text-lg font-bold text-white mb-2 mt-4">Hinweis zur verantwortlichen Stelle</h3>
                        <p className="mb-4">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                        <p className="mb-4 font-mono text-sm bg-white/5 p-4 rounded-lg border border-white/10">
                            Ruperti Sauna<br />
                            Ralf Deitermann<br />
                            Kohlhaasstrasse 7<br />
                            83410 Laufen<br /><br />
                            Telefon: +49 8682 9740 od. 01791306336<br />
                            E-Mail: rupertisauna@t-online.de
                        </p>
                        <p className="mb-4">Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.</p>

                        <h3 className="text-lg font-bold text-white mb-2 mt-4">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                        <p className="mb-4">Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</p>

                        <h3 className="text-lg font-bold text-white mb-2 mt-4">Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h3>
                        <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-2xl mb-6">
                            <p className="mb-4 font-bold">WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).</p>
                            <p className="font-bold">WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).</p>
                        </div>

                        <h3 className="text-lg font-bold text-white mb-2 mt-4">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
                        <p className="mb-4">Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</p>

                        <h3 className="text-lg font-bold text-white mb-2 mt-4">Recht auf Datenübertragbarkeit</h3>
                        <p className="mb-4">Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.</p>

                        <h3 className="text-lg font-bold text-white mb-2 mt-4">SSL- bzw. TLS-Verschlüsselung</h3>
                        <p className="mb-4">Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p>
                        <p className="mb-4">Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.</p>

                        <h3 className="text-lg font-bold text-white mb-2 mt-4">Auskunft, Löschung und Berichtigung</h3>
                        <p className="mb-4">Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.</p>

                        <h3 className="text-lg font-bold text-white mb-2 mt-4">Recht auf Einschränkung der Verarbeitung</h3>
                        <p className="mb-4">Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:</p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                            <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</li>
                            <li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                            <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                        </ul>
                        <p className="mb-4">Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.</p>

                        <h3 className="text-lg font-bold text-white mb-2 mt-4">Widerspruch gegen Werbe-E-Mails</h3>
                        <p className="mb-4">Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.</p>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6">4. Datenerfassung auf dieser Website</h2>

                        <h3 className="text-lg font-bold text-white mb-2">Cookies</h3>
                        <p className="mb-4">Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.</p>
                        <p className="mb-4">Teilweise können auch Cookies von Drittunternehmen auf Ihrem Endgerät gespeichert werden, wenn Sie unsere Seite betreten (Third-Party-Cookies). Diese ermöglichen uns oder Ihnen die Nutzung bestimmter Dienstleistungen des Drittunternehmens (z.B. Cookies zur Abwicklung von Zahlungsdienstleistungen).</p>
                        <p className="mb-4">Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte Webseitenfunktionen ohne diese nicht funktionieren würden (z.B. die Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies dienen dazu, das Nutzerverhalten auszuwerten oder Werbung anzuzeigen.</p>
                        <p className="mb-4">Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs (notwendige Cookies) oder zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (funktionale Cookies, z. B. für die Warenkorbfunktion) oder zur Optimierung der Webseite (z.B. Cookies zur Messung des Webpublikums) erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine Einwilligung zur Speicherung von Cookies abgefragt wurde, erfolgt die Speicherung der betreffenden Cookies ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO); die Einwilligung ist jederzeit widerrufbar.</p>
                        <p className="mb-4">Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.</p>
                        <p className="mb-4">Soweit Cookies von Drittunternehmen oder zu Analysezwecken eingesetzt werden, werden wir Sie hierüber im Rahmen dieser Datenschutzerklärung gesondert informieren und ggf. eine Einwilligung abfragen.</p>

                        <h3 className="text-lg font-bold text-white mb-2 mt-4">Kontaktformular</h3>
                        <p className="mb-4">Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
                        <p className="mb-4">Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.</p>
                        <p className="mb-4">Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.</p>

                        <h3 className="text-lg font-bold text-white mb-2 mt-4">Anfrage per E-Mail, Telefon oder Telefax</h3>
                        <p className="mb-4">Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
                        <p className="mb-4">Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.</p>
                        <p className="mb-4">Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.</p>
                    </section>

                    {/* Section 5 */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6">5. Soziale Medien</h2>

                        <h3 className="text-lg font-bold text-white mb-2">Social-Media-Plugins mit Shariff</h3>
                        <p className="mb-4">Auf dieser Website werden Plugins von sozialen Medien verwendet (z. B. Facebook, Twitter, Instagram, Pinterest, XING, LinkedIn, Tumblr).</p>
                        <p className="mb-4">Die Plugins können Sie in der Regel anhand der jeweiligen Social-Media-Logos erkennen. Um den Datenschutz auf dieser Website zu gewährleisten, verwenden wir diese Plugins nur zusammen mit der sogenannten „Shariff“-Lösung. Diese Anwendung verhindert, dass die auf dieser Website integrierten Plugins Daten schon beim ersten Betreten der Seite an den jeweiligen Anbieter übertragen.</p>
                        <p className="mb-4">Erst wenn Sie das jeweilige Plugin durch Anklicken der zugehörigen Schaltfläche aktivieren, wird eine direkte Verbindung zum Server des Anbieters hergestellt (Einwilligung). Sobald Sie das Plugin aktivieren, erhält der jeweilige Anbieter die Information, dass Sie mit Ihrer IP-Adresse dieser Website besucht haben. Wenn Sie gleichzeitig in Ihrem jeweiligen Social-Media-Account (z. B. Facebook) eingeloggt sind, kann der jeweilige Anbieter den Besuch dieser Website Ihrem Benutzerkonto zuordnen.</p>
                        <p className="mb-4">Das Aktivieren des Plugins stellt eine Einwilligung im Sinne des Art. 6 Abs. 1 lit. a DSGVO dar. Diese Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen.</p>

                        {/* Facebook */}
                        <h3 className="text-lg font-bold text-white mb-2 mt-4">Facebook Plugins (Like & Share-Button)</h3>
                        <p className="mb-4">Auf dieser Website sind Plugins des sozialen Netzwerks Facebook integriert. Anbieter dieses Dienstes ist die Facebook Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland. Die erfassten Daten werden nach Aussage von Facebook jedoch auch in die USA und in andere Drittländer übertragen.</p>
                        <p className="mb-4">Die Facebook Plugins erkennen Sie an dem Facebook-Logo oder dem „Like-Button“ („Gefällt mir“) auf dieser Website. Eine Übersicht über die Facebook Plugins finden Sie hier: https://developers.facebook.com/docs/plugins/?locale=de_DE.</p>
                        <p className="mb-4">Wenn Sie diese Website besuchen, wird über das Plugin eine direkte Verbindung zwischen Ihrem Browser und dem Facebook-Server hergestellt. Facebook erhält dadurch die Information, dass Sie mit Ihrer IP-Adresse diese Website besucht haben. Wenn Sie den Facebook „Like-Button“ anklicken während Sie in Ihrem Facebook-Account eingeloggt sind, können Sie die Inhalte dieser Website auf Ihrem Facebook-Profil verlinken. Dadurch kann Facebook den Besuch dieser Website Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch Facebook erhalten. Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von Facebook unter: https://de-de.facebook.com/privacy/explanation.</p>
                        <p className="mb-4">Wenn Sie nicht wünschen, dass Facebook den Besuch dieser Website Ihrem Facebook-Nutzerkonto zuordnen kann, loggen Sie sich bitte aus Ihrem Facebook-Benutzerkonto aus.</p>
                        <p className="mb-4">Die Verwendung der Facebook Plugins erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an einer möglichst umfangreichen Sichtbarkeit in den Sozialen Medien. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.</p>

                        {/* Instagram */}
                        <h3 className="text-lg font-bold text-white mb-2 mt-4">Instagram Plugin</h3>
                        <p className="mb-4">Auf dieser Website sind Funktionen des Dienstes Instagram eingebunden. Diese Funktionen werden angeboten durch die Instagram Inc., 1601 Willow Road, Menlo Park, CA 94025, USA integriert.</p>
                        <p className="mb-4">Wenn Sie in Ihrem Instagram-Account eingeloggt sind, können Sie durch Anklicken des Instagram-Buttons die Inhalte dieser Website mit Ihrem Instagram-Profil verlinken. Dadurch kann Instagram den Besuch dieser Website Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch Instagram erhalten.</p>
                        <p className="mb-4">Die Speicherung und Analyse der Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Webseitenbetreiber hat ein berechtigtes Interesse an einer möglichst umfangreichen Sichtbarkeit in den Sozialen Medien. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.</p>
                        <p className="mb-4">Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von Instagram: https://instagram.com/about/legal/privacy/.</p>

                        {/* Pinterest */}
                        <h3 className="text-lg font-bold text-white mb-2 mt-4">Pinterest Plugin</h3>
                        <p className="mb-4">Auf dieser Website verwenden wir Social Plugins des sozialen Netzwerkes Pinterest, das von der Pinterest Inc., 808 Brannan Street, San Francisco, CA 94103-490, USA („Pinterest“) betrieben wird.</p>
                        <p className="mb-4">Wenn Sie eine Seite aufrufen, die ein solches Plugin enthält, stellt Ihr Browser eine direkte Verbindung zu den Servern von Pinterest her. Das Plugin übermittelt dabei Protokolldaten an den Server von Pinterest in die USA. Diese Protokolldaten enthalten möglicherweise Ihre IP-Adresse, die Adresse der besuchten Websites, die ebenfalls Pinterest-Funktionen enthalten, Art und Einstellungen des Browsers, Datum und Zeitpunkt der Anfrage, Ihre Verwendungsweise von Pinterest sowie Cookies.</p>
                        <p className="mb-4">Die Speicherung und Analyse der Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Webseitenbetreiber hat ein berechtigtes Interesse an einer möglichst umfangreichen Sichtbarkeit in den Sozialen Medien. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.</p>
                        <p className="mb-4">Weitere Informationen zu Zweck, Umfang und weiterer Verarbeitung und Nutzung der Daten durch Pinterest sowie Ihre diesbezüglichen Rechte und Möglichkeiten zum Schutz Ihrer Privatsphäre finden Sie in den Datenschutzhinweisen von Pinterest: https://policy.pinterest.com/de/privacy-policy.</p>
                    </section>

                    {/* Section 6 */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6">6. Analyse-Tools und Werbung</h2>

                        <h3 className="text-lg font-bold text-white mb-2">1&1 Web Analytics</h3>
                        <p className="mb-4">Diese Website nutzt die Analysedienste von 1&1-Webanalytics. Anbieter ist die 1&1 IONOS SE, Elgendorfer Straße 57, D – 56410 Montabaur. Im Rahmen der Analysen mit 1&1 können u. a. Besucherzahlen und –verhalten (z. B. Anzahl der Seitenaufrufe, Dauer eines Webseitenbesuchs, Absprungraten), Besucherquellen (d. h., von welcher Seite der Besucher kommt), Besucherstandorte sowie technische Daten (Browser- und Betriebssystemversionen) analysiert werden. Zu diesem Zweck speichert 1&1 insbesondere folgende Daten:</p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Referrer (zuvor besuchte Webseite)</li>
                            <li>angeforderte Webseite oder Datei</li>
                            <li>Browsertyp und Browserversion</li>
                            <li>verwendetes Betriebssystem</li>
                            <li>verwendeter Gerätetyp</li>
                            <li>Uhrzeit des Zugriffs</li>
                            <li>IP-Adresse in anonymisierter Form (wird nur zur Feststellung des Orts des Zugriffs verwendet)</li>
                        </ul>
                        <p className="mb-4">Die Datenerfassung erfolgt laut 1&1 vollständig anonymisiert, sodass sie nicht zu einzelnen Personen zurückverfolgt werden kann. Cookies werden von 1&1-Webanalytics nicht gespeichert.</p>
                        <p className="mb-4">Die Speicherung und Analyse der Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der statistischen Analyse des Nutzerverhaltens, um sowohl sein Webangebot als auch seine Werbung zu optimieren. Sofern eine entsprechende Einwilligung abgefragt wurde (z. B. eine Einwilligung zur Speicherung von Cookies), erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.</p>
                        <p className="mb-4">Weitere Informationen zur Datenerfassung und Verarbeitung durch 1&1-Webanalytics entnehmen Sie folgenden Links:</p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li><a href="https://hosting.1und1.de/hilfe/online-marketing/" className="text-accent-blue/80 hover:text-white transition-colors">https://hosting.1und1.de/hilfe/online-marketing/</a></li>
                            <li><a href="https://hosting.1und1.de/hilfe/datenschutz/datenverarbeitung-von-webseitenbesuchern-ihres-company-name-produktes/webanalytics/" className="text-accent-blue/80 hover:text-white transition-colors">https://hosting.1und1.de/hilfe/datenschutz/datenverarbeitung-von-webseitenbesuchern-ihres-company-name-produktes/webanalytics/</a></li>
                            <li><a href="https://hosting.1und1.de/terms-gtc/terms-privacy/" className="text-accent-blue/80 hover:text-white transition-colors">https://hosting.1und1.de/terms-gtc/terms-privacy/</a></li>
                        </ul>
                    </section>

                    {/* Section 7 */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6">7. Plugins und Tools</h2>

                        <h3 className="text-lg font-bold text-white mb-2">YouTube mit erweitertem Datenschutz</h3>
                        <p className="mb-4">Diese Website bindet Videos der YouTube ein. Betreiber der Seiten ist die Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.</p>
                        <p className="mb-4">Wir nutzen YouTube im erweiterten Datenschutzmodus. Dieser Modus bewirkt laut YouTube, dass YouTube keine Informationen über die Besucher auf dieser Website speichert, bevor diese sich das Video ansehen. Die Weitergabe von Daten an YouTube-Partner wird durch den erweiterten Datenschutzmodus hingegen nicht zwingend ausgeschlossen. So stellt YouTube – unabhängig davon, ob Sie sich ein Video ansehen – eine Verbindung zum Google DoubleClick-Netzwerk her.</p>
                        <p className="mb-4">Sobald Sie ein YouTube-Video auf dieser Website starten, wird eine Verbindung zu den Servern von YouTube hergestellt. Dabei wird dem YouTube-Server mitgeteilt, welche unserer Seiten Sie besucht haben. Wenn Sie in Ihrem YouTube-Account eingeloggt sind, ermöglichen Sie YouTube, Ihr Surfverhalten direkt Ihrem persönlichen Profil zuzuordnen. Dies können Sie verhindern, indem Sie sich aus Ihrem YouTube-Account ausloggen.</p>
                        <p className="mb-4">Des Weiteren kann YouTube nach Starten eines Videos verschiedene Cookies auf Ihrem Endgerät speichern. Mit Hilfe dieser Cookies kann YouTube Informationen über Besucher dieser Website erhalten. Diese Informationen werden u. a. verwendet, um Videostatistiken zu erfassen, die Anwenderfreundlichkeit zu verbessern und Betrugsversuchen vorzubeugen. Die Cookies verbleiben auf Ihrem Endgerät, bis Sie sie löschen.</p>
                        <p className="mb-4">Gegebenenfalls können nach dem Start eines YouTube-Videos weitere Datenverarbeitungsvorgänge ausgelöst werden, auf die wir keinen Einfluss haben.</p>
                        <p className="mb-4">Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.</p>
                        <p className="mb-4">Weitere Informationen über Datenschutz bei YouTube finden Sie in deren Datenschutzerklärung unter: https://policies.google.com/privacy?hl=de.</p>

                        <h3 className="text-lg font-bold text-white mb-2 mt-4">Vimeo</h3>
                        <p className="mb-4">Diese Website nutzt Plugins des Videoportals Vimeo. Anbieter ist die Vimeo Inc., 555 West 18th Street, New York, New York 10011, USA.</p>
                        <p className="mb-4">Wenn Sie eine unserer mit einem Vimeo-Plugin ausgestatteten Seiten besuchen, wird eine Verbindung zu den Servern von Vimeo hergestellt. Dabei wird dem Vimeo-Server mitgeteilt, welche unserer Seiten Sie besucht haben. Zudem erlangt Vimeo Ihre IP-Adresse. Dies gilt auch dann, wenn Sie nicht bei Vimeo eingeloggt sind oder keinen Account bei Vimeo besitzen. Die von Vimeo erfassten Informationen werden an den Vimeo-Server in den USA übermittelt.</p>
                        <p className="mb-4">Wenn Sie in Ihrem Vimeo-Account eingeloggt sind, ermöglichen Sie Vimeo, Ihr Surfverhalten direkt Ihrem persönlichen Profil zuzuordnen. Dies können Sie verhindern, indem Sie sich aus Ihrem Vimeo-Account ausloggen.</p>
                        <p className="mb-4">Die Nutzung von Vimeo erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne des Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.</p>
                        <p className="mb-4">Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Vimeo unter: https://vimeo.com/privacy.</p>

                        <h3 className="text-lg font-bold text-white mb-2 mt-4">Google Maps</h3>
                        <p className="mb-4">Diese Seite nutzt über eine API den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.</p>
                        <p className="mb-4">Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf diese Datenübertragung.</p>
                        <p className="mb-4">Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote und an einer leichten Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.</p>
                        <p className="mb-4">Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google: https://policies.google.com/privacy?hl=de.</p>

                        <h3 className="text-lg font-bold text-white mb-2 mt-4">OpenStreetMap</h3>
                        <p className="mb-4">Wir nutzen den Kartendienst von OpenStreetMap (OSM). Anbieterin ist die Open-Street-Map Foundation (OSMF), 132 Maney Hill Road, Sutton Coldfield, West Midlands, B72 1JU, United Kingdom.</p>
                        <p className="mb-4">Wenn Sie eine Website besuchen, auf der OpenStreetMap eingebunden ist, werden u. a. Ihre IP-Adresse und weitere Informationen über Ihr Verhalten auf dieser Website an die OSMF weitergeleitet. OpenStreetMap speichert hierzu unter Umständen Cookies in Ihrem Browser. Das sind Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen können.</p>
                        <p className="mb-4">Ferner kann Ihr Standort erfasst werden, wenn Sie dies in Ihren Geräteeinstellungen – z. B. auf Ihrem Handy – zugelassen haben. Der Anbieter dieser Seite hat keinen Einfluss auf diese Datenübertragung. Details entnehmen Sie der Datenschutzerklärung von OpenStreetMap unter folgendem Link: https://wiki.osmfoundation.org/wiki/Privacy_Policy.</p>
                        <p className="mb-4">Die Nutzung von OpenStreetMap erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote und einer leichten Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende Einwilligung abgefragt wurde (z. B. eine Einwilligung zur Speicherung von Cookies), erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.</p>

                        <h3 className="text-lg font-bold text-white mb-2 mt-4">Google reCAPTCHA</h3>
                        <p className="mb-4">Wir nutzen „Google reCAPTCHA“ (im Folgenden „reCAPTCHA“) auf dieser Website. Anbieter ist die Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.</p>
                        <p className="mb-4">Mit reCAPTCHA soll überprüft werden, ob die Dateneingabe auf dieser Website (z. B. in einem Kontaktformular) durch einen Menschen oder durch ein automatisiertes Programm erfolgt. Hierzu analysiert reCAPTCHA das Verhalten des Websitebesuchers anhand verschiedener Merkmale. Diese Analyse beginnt automatisch, sobald der Websitebesucher die Website betritt. Zur Analyse wertet reCAPTCHA verschiedene Informationen aus (z. B. IP-Adresse, Verweildauer des Websitebesuchers auf der Website oder vom Nutzer getätigte Mausbewegungen). Die bei der Analyse erfassten Daten werden an Google weitergeleitet.</p>
                        <p className="mb-4">Die reCAPTCHA-Analysen laufen vollständig im Hintergrund. Websitebesucher werden nicht darauf hingewiesen, dass eine Analyse stattfindet.</p>
                        <p className="mb-4">Die Speicherung und Analyse der Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse daran, seine Webangebote vor missbräuchlicher automatisierter Ausspähung und vor SPAM zu schützen. Sofern eine entsprechende Einwilligung abgefragt wurde (z. B. eine Einwilligung zur Speicherung von Cookies), erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.</p>
                        <p className="mb-4">Weitere Informationen zu Google reCAPTCHA entnehmen Sie den Google-Datenschutzbestimmungen und den Google Nutzungsbedingungen unter folgenden Links: https://policies.google.com/privacy?hl=de und https://policies.google.com/terms?hl=de.</p>
                    </section>

                    <p className="text-xs text-ice-blue/40 mt-12">Quelle: <a href="https://www.e-recht24.de/muster-datenschutzerklaerung.html" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">https://www.e-recht24.de/muster-datenschutzerklaerung.html</a></p>

                </div>
            </div>
        </main>
    );
}
