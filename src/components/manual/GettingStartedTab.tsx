export const GettingStartedTab = () => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md space-y-6">
      <h2 className="text-2xl font-semibold mb-6">Spielaufbau</h2>

      <div className="space-y-6">
        <section>
          <h3 className="text-xl font-semibold mb-3">Siegpunkte festlegen</h3>
          <p className="text-gray-600 mb-2">Je nach gewünschter Spieldauer können die erforderlichen Siegpunkte variiert werden:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
            <li>22 Siegpunkte "MVP" (ca. 30 Minuten)</li>
            <li>32 Siegpunkte "Schnell-Scrum" (ca. 60 Minuten)</li>
            <li>42 Siegpunkte "Full Fledged" (ca. 90 Minuten)</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-3">Teamkarten ausgeben</h3>
          <p className="text-gray-600 mb-2">Jeder Spieler erhält sein Startdeck:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
            <li>einen CTO (3 Würfel)</li>
            <li>einen Teammitglied mit 2 Würfeln</li>
            <li>einen Noob (1 Würfel)</li>
            <li>eine grüne Incentive-Karte mit dem Wert 2 (offen vor sich ausgelegt)</li>
            <li>zwei Ereigniskarten (auf der Hand)</li>
          </ul>
          <p className="text-gray-600 mt-2">Alle übrigen CTOs und Noobs werden aussortiert und in die Box zurückgelegt.</p>
        </section>
      </div>

      <img 
        src="/lovable-uploads/spielaufbau.png"
        alt="Spielaufbau Übersicht mit Nachziehstapel, Pitch-Karten, Siegpunkte, Incentives und Handkarten"
        className="w-full mb-8"
      />
      
      <div className="space-y-6">

        <section>

          <p className="text-gray-600 mt-4 bg-gray-100 p-4 rounded">
            <strong>Anfänger:</strong> Ungeübte Spieler sollten 1-2 Sprints ohne Ereigniskarten spielen, um die Grundmechanik zu begreifen. Erfahrene Spieler können direkt mit Event-Karten starten.
          </p>
          <p className="text-gray-600 mt-4 bg-gray-100 p-4 rounded">
            <strong>Bei 2 Spielern:</strong> Falls nur 2 Spieler mitspielen, erhält jeder 2 weitere Teamkarten: eine mit Stärke 2 und eine mit Stärke 1.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-3">Stapel vorbereiten</h3>
          <p className="text-gray-600">Alle Event-Karten werden verdeckt in einem Stapel bereitgelegt. Alle übrigen Karten (Storys, Incentives und Teamkarten) werden gemischt und verdeckt im separaten Nachziehstapel bereitgelegt.</p>
        </section>
      </div>
    </div>
  );
};
