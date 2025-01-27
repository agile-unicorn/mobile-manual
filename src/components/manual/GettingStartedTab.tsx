export const GettingStartedTab = () => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md space-y-6">
      <h2 className="text-2xl font-semibold mb-6">Spielaufbau</h2>
      
      <img 
        src="/lovable-uploads/133a2da8-bbf5-4c4c-8e5e-23fc467dafeb.png"
        alt="Spielaufbau Übersicht mit Nachziehstapel, Pitch-Karten, Siegpunkte, Incentives und Handkarten"
        className="w-full mb-8"
      />
      
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
            <li>einen CTO</li>
            <li>einen Noob</li>
            <li>und einen Skill-Level-2 Entwickler</li>
            <li>eine grüne Incentive-Karte mit dem Wert 2 (offen vor sich ausgelegt)</li>
          </ul>
          <p className="text-gray-600 mt-2">Alle übrigen CTOs und Noobs werden aussortiert und in die Box zurückgelegt.</p>
          <p className="text-gray-600 mt-2">Erfahrene Spieler können direkt mit Eventkarten starten: jeder Spieler erhält 2 Event-Karten und hält diese verdeckt</p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-3">Stapel vorbereiten</h3>
          <p className="text-gray-600">Alle Event-Karten werden verdeckt in einem Stapel bereitgelegt. Alle übrigen Karten (Features, Incentives und Teamkarten) werden gemischt und verdeckt im separaten Nachziehstapel bereitgelegt.</p>
        </section>
      </div>
    </div>
  );
};