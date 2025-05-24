export const GettingStartedDe = () => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md space-y-6">
      <h2 className="text-2xl font-semibold mb-6">Spielaufbau</h2>

      <div className="space-y-6">
        <section>
          <h3 className="text-xl font-semibold mb-3">Siegpunkte festlegen</h3>
          <p className="text-gray-600 mb-2">Je nach gewünschter Spieldauer können die erforderlichen Siegpunkte variiert werden:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
            <li>22 Siegpunkte "MVP" (ca. 20 Minuten)</li>
            <li>32 Siegpunkte "Schnell-Scrum" (ca. 40 Minuten)</li>
            <li>42 Siegpunkte "Full Fledged" (ca. 60 Minuten)</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-3">Startdeck ausgeben</h3>
          <p className="text-gray-600 mb-2">Jeder Spieler erhält folgende Karten:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
            <li>einen Chief Technical Officer (CTO, 3 Würfel)</li>
            <li>ein Teammitglied mit 2 Würfeln</li>
            <li>einen Noob (1 Würfel)</li>
            <li>eine grüne Incentive-Karte mit dem Wert 2</li>
            <li>zwei Ereigniskarten</li>
          </ul>
          <p className="text-gray-600 mt-2">Alle übrigen CTOs und Noobs werden aussortiert und in die Box zurückgelegt.</p>
        </section>


        <section>
          <h3 className="text-xl font-semibold mb-3">Stapel vorbereiten</h3>
          <p className="text-gray-600">Alle Event-Karten werden verdeckt in einem Stapel bereitgelegt. Alle übrigen Karten (Storys, Incentives und Teamkarten) werden gemischt und verdeckt im separaten Nachziehstapel bereitgelegt.</p>
        </section>
      </div>

      <img 
        src="/lovable-uploads/spielaufbau.png"
        alt="Spielaufbau Übersicht mit Nachziehstapel, Pitch-Karten, Siegpunkte, Incentives und Handkarten"
        className="w-full mb-8"
      />
      
      <div className="space-y-6">

        <section>
          <h3 className="text-xl font-semibold mb-3">Anpassungen </h3>
          <p className="text-gray-600 mt-4 bg-gray-100 p-4 rounded">
            <strong>Leichter Einstieg:</strong> Ungeübte Spieler können 1 Sprint ohne Ereigniskarten spielen, um die Grundmechanik zu verinnerlichen. Erfahrene Spieler können direkt mit Event-Karten starten.
          </p>
          <p className="text-gray-600 mt-4 bg-gray-100 p-4 rounded">
            <strong>Bei 2 Spielern:</strong> Falls nur 2 Spieler mitspielen, erhält jeder 2 weitere Teamkarten: eine mit Stärke 2 und eine mit Stärke 1.
          </p>
          <p className="text-gray-600 mt-4 bg-gray-100 p-4 rounded">
            <strong>Bei 5 Spielern:</strong> Falls 5 Spieler mitspielen, muss der <strong>Backlog auf 6 Karten erweitert werden</strong>, damit der Startspieler durchgehend wechselt.
          </p>

        </section>

        <section>
          <h4 className="text-xl font-semibold mb-3">Teams (Coop-Modus) </h4>

          <p className="text-gray-600 mb-2">Bei einer geraden Anzahl von Spielern (4) können Teams gebildet werden: Die Mitglieder eines Team dürfen sich untereinander absprechen und gemeinsam auf Karten pitchen,
            d.h. die Würfelergebnisse werden addiert. Alle Effekte der Ereignis- und Incentive-Karten gelten dann auch für das gesamte Team (z.B. Aussetzen, Zauberstäbe).
            Die Siegpunkte der Spieler eines Teams werden ebenfalls addiert.</p>

          <p className="text-gray-600 mb-2">Falls ein Mitglied eines Teams nicht am Pitch teilnimmt, darf er auch nicht seine Event- und Incentive-Karten einsetzen.</p>
        </section>

      </div>
    </div>
  );
};
