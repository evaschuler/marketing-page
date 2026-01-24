
# Dokumentation Viben & Coden – Eva Schuler

## Projektbeschreibung & Zielsetzung

### App

Ich häkle sehr gerne und viel. Die meisten meiner Produkte verschenke ich – und immer wieder werde ich gefragt, wie lange ich für ein Projekt brauche. Das konnte ich bisher nie beantworten. So entstand die Idee zur App **«HäkTrack»**: schnell und unkompliziert jeden Tag die Stunden erfassen, die ich pro Projekt häkle. Genau das ist die Zielsetzung. Die App soll hell, freundlich und in Pastelltönen gestaltet sein.

Die App besteht aus der Startseite, auf der alle laufenden Projekte ersichtlich sind. In einem aufklappbaren Bereich sind die abgeschlossenen Projekte. Über den Button **«Neues Projekt»** kann ich ein neues Projekt erfassen. Über den Button **«Statistik»** gelange ich zu einem Dashboard mit Statistiken.

Beim Erstellen des Projekts gebe ich neben dem Projektnamen auch das Startdatum, optional das Enddatum, das benutzte Garn und die Häkelnadelgrösse an. Ich kann bis zu zehn Farben auswählen, die ich für das Projekt verwende. Dies dient zu Dokumentationszwecken, damit ich auch später noch weiss, welches Material ich für ein bestimmtes Projekt benutzte.

Pro Projekt kann ich dann die gehäkelten Stunden erfassen. Im optionalen Feld Beschreibung kann ich festhalten, an welchem Teil ich an diesem Tag gearbeitet habe. Gerade bei Amigurumi (den kleinen Häkeltierchen) ist es spannend zu sehen, wie viel Zeit welcher Arbeitsschritt benötigt.

Am Schluss kann ich ein Foto des fertigen Produkts hochladen. So sehe ich auch Jahre später noch, wie das Fertige aussieht.

Wenn das Projekt fertig und ich alles erfasst habe, kann ich es abschliessen. Dann wird es in den Bereich **«Abgeschlossene Projekte»** verschoben.

Im Statistik-Dashboard sehe ich alle Projekte sowie die insgesamt gehäkelten Stunden. Dort kann ich nach Projekt, Jahr und Monat filtern.

### Website

Die Website soll über HäkTrack informieren und dazu motivieren, eigene Häkelprojekte zu tracken. Auf der Startseite werden die Vorteile aufgezeigt und einige Testimonials erwähnt. Unter **Features** wird die App mit praktischen Screenshots erklärt. Auf der Seite **FAQs** werden die wichtigsten Fragen beantwortet. Unter **Über uns** sind Vision und Motivation dargestellt.

Die gesamte Website enthält viele Fotos – die meisten stammen von Envato. Das Foto der «Gründer/innen» auf der Über-uns-Seite habe ich mit Nano Banana generiert. Am Ende jeder Seite befindet sich ein Call-to-Action, der direkt auf die App verweist.

---

## Entwicklungsprozess

Ich schreibe zuerst den Entwicklungsprozess, bevor ich die Prompts aufliste. Denn zuerst hatte ich für die App eine andere Funktion im Kopf: Ich promptete quasi eine Motivationsapp fürs Häkeln. Pro Projekt konnte ich ein Enddatum und die Anzahl zu häkelnden Reihen eingeben. Die App zeigte mir dann an, wie viele Reihen ich pro Tag häkeln muss, damit ich bis zum Enddatum fertig bin. Der Fortschrittsbalken zeigte mir an, wie ich im Plan drin bin.

Nachdem ich dies alles gepromptet hatte, merkte ich, dass es in der Praxis für mich gar nicht sinnvoll ist. Meistens weiss ich nämlich weder, wie viele Reihen ich für ein Projekt häkeln muss noch wie viele Stunden es dauern wird. So entstand die Idee, einfach die investierte Zeit pro Projekt zu tracken.

Den Initialprompt formulierte Copilot. Der Prompt an Copilot lautete:

> «bitte erstelle mir einen prompt für replit für eine app, in der die nutzer:innen ihre häkelarbeit tracken können. sie sollen ein projekt anlegen und darin dann ihren fortschritt sehen können. bei bedarf können sie auch ein enddatum festlegen, damit sie wissen, wie viel sie jeden tag häkeln müssen. mach mir zuerst nur den prompt für das gerüst der app, der feinschliff kommt später.es sollen helle farben in pastelltönen sein. Zielgruppe sind menschen, die sich für handarbeiten generell und häkeln im speziellen interessieren.»

Ein wichtiges Learning beim Vibe Coden mit Replit war für mich, der KI zu Beginn nicht zu viele Vorgaben zu machen. Wenn ich die KI zuerst frei arbeiten lasse, komme ich meist auf Ideen, die mir selbst nicht eingefallen wären. Und wie immer bei der Arbeit mit KI: Sie ist gar nicht so intelligent. Manchmal muss man ein Anliegen fünfmal unterschiedlich formulieren, bis das Ergebnis stimmt.

Für die Website liess ich wiederum Copilot den Initialprompt formulieren. Der Prompt an Copilot lautete:

> «ich habe die häkel-app jetzt fertig: https://haek-track.replit.app/ich kann projekte eingeben und damit dann meine Stunden tracken, die ich pro projekt aufwende. es gibt kein ziel. nun bin ich an der website. kannst du mir dazu einen prompt generieren für cursor? Hier ist die aufgabenstellung:Mindestens drei Marketing-Landing-Pages (ähnlich wie SaaS-Webseiten), die für KISuchmaschienen optimiert sind. Zum Beispiel:- Landing Page- Features- FAQWeitere Seiten als Inspiration: Über uns, Blog-Artikel, Pricing, Use Cases, …Diese Seiten müssen:- Die GEO-Prinzipien anwenden (strukturierte Inhalte, semantische Klarheit)- Schema.org Markup enthalten (Mindestens eine Seite)- Zitierfähigkeit für LLMs haben- Von KI-Suchmaschinen gecrawled werden dürfen.und die bewertungskriterien: - Content-Struktur (Überschriften, Hierarchie, FAQ-Section)- SEO/GEO-Optimierung (Schema.org Markup, Meta-Tags, Semantisches HTML)- GEO-Prinzipien (Zitierbarkeit, Klarheit)»

Hier habe ich bewusst aus der vorherigen Konversation zum Projekt weiterarbeiten lassen und die Aufgabenstellung eingebunden.

Mein Aha-Moment war, als ich merkte, wie sehr mir das HTML- und CSS-Wissen aus dem Studium Multimedia Production half – und dass ich auch einfach selbst in den Code schreiben kann. Mit der Zeit kam das Wissen immer mehr zurück, und ich hatte das Gefühl, dass ich mit Cursor in der gleichen Sprache sprechen konnte. Beim Reviewen erkannte ich jeweils gut, was verändert wurde, und das hat mich positiv überrascht.

Ausserdem wurde mir erneut bewusst, wie viele verschiedene KI-Tools es gibt und dass man in einem Projekt nicht nur eines benutzt. Dieses Zusammenspiel – Cursor, Nano Banana, Copilot usw. – fand ich sehr spannend und «inspirierend».

---

## Wichtigste Prompts

### App

#### Initialprompt

Du bist senior ux-designer.

Erstelle das Grundgerüst einer modernen, freundlichen Web-App namens «Häk-Track» für Menschen, die Handarbeiten – speziell Häkeln – lieben. Die App soll folgende Funktionen enthalten:

**Projektverwaltung:**
- Nutzer:innen können Projekte anlegen, bearbeiten und löschen.
- Jedes Projekt hat: Name, Beschreibung (optional), Startdatum, optionales Enddatum, Gesamtziel (z. B. Anzahl Reihen, Stunden oder Gramm), Einheit (z. B. «Reihen»), und eine Pastellfarbe zur individuellen Kennzeichnung.

**Fortschrittstracking:**
- Nutzer:innen können Fortschrittseinträge hinzufügen (Datum, Menge, optional Notiz).
- Die App zeigt: bisher erreicht, verbleibend, Prozent fertig.

**Tages-Soll bei Enddatum:**
- Wenn ein Enddatum gesetzt ist, berechnet die App die tägliche Soll-Menge:  
  (Gesamtziel – bisher erreicht) ÷ verbleibende Tage.
- Hinweis, wenn das Zieldatum überschritten ist.

**UI und Design:**
- Helle, freundliche Oberfläche in Pastelltönen (z. B. Rosé, Mint, Hellblau, Apricot, Off-White).
- Mobile-freundlich, klare Typografie, große Buttons, einfache Navigation.
- Dashboard mit allen Projekten und Fortschrittsbalken.
- Detailseite für jedes Projekt mit Statistiken und Fortschrittsliste.

**Barrierefreiheit:**
- Gut lesbare Kontraste, klare Labels, einfache Bedienung.

**Struktur:**
- Dashboard, Projekt-Detailseite, Formular für neues Projekt, Bereich für Einstellungen (Platzhalter).

**Ziel:** Nur das Grundgerüst mit Platzhaltern für Diagramme und Statistiken, ohne Feinschliff oder komplexe Zusatzfunktionen.

#### Prompts für Feinschliff (alte Funktion)

- ich möchte auch das ziel-datum im nachhinein noch anpassen können
- ich möchte auch die beschreibung im nachhinein anpassen können.
- ich möchte im projekt auch noch die farben angeben können (auswahl bis zu 10 farben mit colorpicker), das garn, die häkelnadel (grösse). Ausserdem wäre es super, wenn es auch noch ein feld gibt, wo ich ein muster generieren lassen kann. diese neuen felder sind optional aber im nachhinein auch bearbeitbar.
- mach alle felder auch anwählbar wie das ziel. damit man von überall her auf die maske zum bearbeiten kommt. 
- Die farben für das garn sollen nicht vordefiniert sein. man soll mit einem colorpick-wheel die farbe auswählen können.
- vom feld mit dem muster bin ich noch nicht überzeugt. mach da auch ein bearbeitungsfeld, in dem man z.B. eingeben muss, ob man ein granny-square oder so machen möchte. dann erstelle ein muster für dieses granny-square. keine anleitung für das projekt, nur eine anleitung für das muster.
- lösch bitte die muster-generierung ersatzlos.
- der colorpicker funktioniert nicht richtig. die farbe #B5EAD7 bleibt immer drin, egal, welche farbe man anwählt.
- die löschen-funktion funktioniert nicht. ausserdem möchte ich die feature garn, häkelnadel und farben schon beim erstellen des projekts angeben können.
- zeig mir in der übersicht auch den fortschritt an. mit einer farbigen linie auf dem fortschrittsbalken.
- und ich möchte noch eine funktion, dass ich ein projekt abschliessen kann. Dieses soll dann in einem neuen fenster «abgeschlossene projekte» versorgt werden. nach enddatum sortiert.

#### Prompts für neue Funktion

- ich möchte gerne die funktion anpassen. ich möchte kein ziel mehr eingeben sondern einfach pro projekt tracken, wie viel zeit ich dafür aufgewendet habe. im fortschrittsverlauf soll angezeigt werden, wie viele stunden ich an welchem tag aufgewendet habe.
- mach mir noch eine report-seite auf der ich einige statistiken sehe (wie viele stunden ich gehäkelt habe, wie viele projekte, usw.). ich möchte sie nach monat und jahr filtern können.
- beim dropdown-menü «jahre» liste nur die jahre auf, in denen es auch wirklich projekte gibt.
- Wenn ich auf «projekte gesamt» klicke, möchte ich eine liste mit den projekten sehen. Mit einer verlinkung auf das projekt mit allen details.
- ich möchte noch die möglichkeit, am ein foto hochzuladen.
- das foto soll am schluss der auflistung sein (nach fortschrittsverauf und einträge). es soll auch gelöscht werden können und es soll nicht zugeschnitten werden.
- verwende für das ganze projekte folgende schriften:  
  `font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;`

---

### Website

#### Initialprompt

**Goal:**  
Erstelle eine kleine Marketing-Website für die Web-App **«HäkTrack»** (https://haek-track.replit.app/).

Die Website soll mindestens die folgenden Seiten enthalten:

1. Landing Page (Homepage)  
2. Features Page  
3. FAQ Page  

Optional weitere Seiten: About, Pricing, Blog-Article, Use Cases.

**Wichtige Anforderungen:**
- Jede Seite muss die GEO-Prinzipien erfüllen: klare Struktur, eindeutige semantische Hierarchie, zitierbare Aussagen.
- Die Seiten müssen für KI-Suchmaschinen optimiert sein (SEO/GEO).
- Mindestens eine Seite muss vollständiges Schema.org Markup enthalten.
- Der Code soll semantisches HTML5 nutzen (header, nav, main, section, article, footer, h1-h2-h3-Hierarchie).
- Responsive Design (Mobile + Desktop) mit einfachem CSS oder Tailwind (optional).
- Jede Seite soll via KI crawlbar sein (robots.txt erlaubend, keine Blocker).
- Konsistentes Branding, aber schlicht (Hobby-Tool, keine überladenen Farben).

**Branding:**
- App-Name: Häk-Track
- Claim: «Tracke deine Häkelprojekte – organisiert, einfach, motivierend.»
- Farben (Vorschlag):
  - Primary: #F68BA3 (soft pink)
  - Secondary: #6E8EF7 (soft blue)
  - Neutral: #333, #f5f5f5

**Tonality:**
- Klar, freundlich, strukturiert.
- Kein Marketing-Blabla. Aussagekräftig, prägnant, zitierbar.
- Zielgruppe: Menschen, die gerne häkeln und ihre Projekte organisieren wollen.

**Technische Anforderungen:**
- Jede Seite soll eine saubere URL-Struktur bekommen:
  - / (Landing Page)
  - /features
  - /faq
  - Optional: /about, /pricing, /blog/hakel-tipps
- Füge sinnvolle &lt;meta&gt;-Tags hinzu: description, open graph, twitter cards.
- Verwende schema.org Markup im JSON-LD Format (mindestens auf der Landing Page).  
  Beispiel: WebApplication, FAQPage oder HowTo.

**Content-Richtschnur:**

**Landing Page:**
- H1: «HäkTrack – Dein persönlicher Häkel-Tracker»
- Value Proposition: «Verwalte deine Häkelprojekte, dokumentiere deine Stunden und bleibe motiviert.»
- Hero-CTA: «Jetzt Projekte tracken»
- Kurze Sektionen: Vorteile, wie es funktioniert, Screenshots/Mockups, Testimonials (optional generiert).
- Structured, SEO-optimiert.

**Features Page:**
- H1: «Alle Funktionen»
- Abschnitte:
  - Projektverwaltung
  - Stunden-Tracking pro Projekt
  - Notizen &amp; Bilder (optional)
  - Übersichtliche Statistik
- Jede Section klar gegliedert mit h2/h3.

**FAQ Page:**
- H1: «Häufige Fragen»
- 6–10 Fragen
- FAQPage Schema Markup verwenden (JSON-LD)
- Fragen und Antworten sollen zitierfähige, präzise Inhalte enthalten.

**Bitte:**
- Generiere vollständige HTML-Dateien (mit &lt;html&gt;, &lt;head&gt;, &lt;body&gt;).
- Erstelle eine klare Navigationsleiste zwischen den Seiten.
- Implementiere ein responsives Layout.

#### Prompts für Feinschliff

- index.html: &lt;header&gt; .hero ich möchte als hintergrund hier das bild «Bild_Startseite» aus dem image-ordner haben.
- index.html: füge auf der startseite bei den Punkten «Organisation», «Motivation» und «Einfachheit» jeweils ein Icon hinzu. Es soll in einem runden Kreis neben dem Text stehen. Bei Organisation und Einfachheit links, bei Motivation rechts.
- index.html: ich möchte den ganzen block «so funktioniert's» nicht haben. Füge stattdessen das Foto «Mockups» aus dem image-Ordner ein. positioniere es neben dem Block «Warum HäkTrack?»
- bitte füge auf dei Seiten @about.html und @features.html auch noh ein schema.org ein
- features.html: füge für die h3-elemente passende icons ein. sie sollen gleich aussehen wie die icons auf der startseite. sie sollen auch gleich angeordnet sein (neben dem text, rechts-links abwechselnd)
- ich möchte die icons auf der @features.html seite doch etwas anders: sie sollen nur halb so gross sein und alle untereinander. der text soll aber nur über die halbe seite gehen. erstelle auf der anderen seite platzhalter für bilder. diese bilder sollen immer einmal rechts und einmal links sein.
- features.html: bei den h2 Stunden-Tracking und übersichtliche statistik möchte ich das bild gerne rechts der auflistung
- &lt;header&gt; .hero ich möchte hier statt das bild @images/Bild_Startseite.jpg das video namens «video hero picture» aus dem ordner video. auf allen seiten.
- index.html: &lt;section&gt; .container ich möchte in diese section die icons genau gleich wie auf @features.html . auch der text daneben soll nur bis in die mitte gehen und füge mir einen platzhalter für bilder hinzu.
- index.html: kann es sein, dass etwas mit der class=»benefits-section reverse» beim responsive nicht stimmt? Bei den sections Organisation und Einfachheit geht das bild mobile unter den text. bei section motivation bleibt es neben dem text. es soll auch unter den text wie bei den anderen zwei.
- es stimmt immer noch nicht. vielleicht hat es auch nichts mit der class zu tun. auf der @features.html seite ist es dasselbe: bei den sections mit text links und bild rechts bleibt das bild auf mobile neben dem text, statt unter den text zu gehen.
- super. jetzt stimmt es. auf @features.html werden die bilder jetzt aber zugeschnitten. die bilder sollen nicht zugeschnitten werden.
- features.html: &lt;img&gt; img &lt;img&gt; img &lt;img&gt; img &lt;img&gt; img die bilder sind jetzt hier auf mobile ziemlich gross. kannst du sie auf der mobile ansicht etwas kleiner machen, auf der desktop aber so lassen wie sie sind?
- faq.html: bitte organisiere die fragen hier in aufklappbaren menüs. also die frage offen und aufklappbar die antwort darauf.
- about.html: &lt;div&gt; .advantage-item &lt;div&gt; .advantage-item &lt;div&gt; .advantage-item die icons und texte analog @index.html aufbauen.
- about.html: &lt;article&gt; article füge links von diesem container das bild about us aus dem ordner @images hinzu. in mobile ansicht soll es unter dem text angezeigt werden
- &lt;footer&gt; footer tausche die zwei p-tags hier. dass die verlinkungen oben und das rechtliche unten ist. auf allen seiten.
- auf der app https://haek-track.replit.app/ habe ich neben dem titel «HäkTrack» noch dieses kleine wollknäuel-icon:  
  `&lt;span class=»inline-block» style=»transform: translateY(-1.7e-06px);»&gt;🧶&lt;/span&gt;` kannst du das hier auch neben den Titel setzen? &lt;a&gt; .logo
- kannst du das emoji überall auf allen seiten nach «HäkTrack» einfügen?
- und bitte ergänze auf allen seiten die männliche form in allen texten. ich möchte also die männliche und die weibliche form haben, die weibliche zuerst.

---

## GEO-Strategie und Keyword Recherche

Die GEO-Strategie basiert auf einer klaren und semantisch sauberen Struktur. Jede Seite nutzt eine eindeutige Titelhierarchie (h1, h2, h3). Damit können LLMs die Inhalte optimal lesen und interpretieren. Ich habe Cursor angewiesen, präzise und zitierfähige Texte zu verfassen. Aus diesem Grund gibt es auch bewusst eine eigene FAQ-Seite.

Ein weiterer Bestandteil der GEO-Strategie ist der Einsatz von Schema.org-Markup. Die Seiten enthalten JSON-LD-Strukturen, damit LLMs zusätzliche Informationen erhalten.

Die Haupt-Keywords sind:

- Häkeln
- Häkelprojekte
- Tracker Häkeln
- Organisation Häkeln

Diese Keywords sind in Überschriften, Fliesstext und Metadaten enthalten.

---

## Reflexion

Ich startete als völlige Neuling in dieses Modul und die Projektarbeit. Meine bisherigen Erfahrungen mit Vibe Coden waren gleich null. Nach dem ersten Webinar fragte ich mich kurz, ob ich die richtige Wahl getroffen hatte – so viele Begriffe, die mir eigentlich etwas sagen sollten, ich aber keine Ahnung hatte, was sie bedeuten…

Nach dem ersten Präsenztag und den ersten Erfahrungen mit dem App-Bauen kam die Freude und der Spass auf. Mit der Website und mit Cursor dann sogar noch mehr. Ich mochte es bereits während des Studiums im Modul Interaktive Medien, Websites zu bauen. Wenn etwas nicht funktioniert, dem Fehler auf den Grund zu gehen und das Problem zu lösen. Es ist fast wie Kreuzwort- oder sonstiges Rätseln. Am Ende sieht die Website zwar selten genau so aus wie im Kopf, aber meistens ist das sogar ein Vorteil.

Für zukünftige Projekte nehme ich mir mit: Vor dem Prompten etwas mehr konzeptionelle Arbeit zu leisten – insbesondere ein Gestaltungskonzept zu definieren. Ich bin diesmal relativ planlos gestartet. Dadurch musste ich die App grundsätzlich umstrukturieren. Auch bei der Website habe ich viele Tokens verbraucht, weil ich vieles ausprobiert habe – vor allem was das Design (die Farben!) betraf. Andererseits ist dieses Projekt ja auch eine Spielwiese, um Erfahrungen zu sammeln.

