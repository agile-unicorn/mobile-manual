export const GettingStartedTab = () => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md space-y-6">
      <h2 className="text-2xl font-semibold mb-6">Spielaufbau</h2>
      
      <img 
        src="/lovable-uploads/da0db9c6-2208-43d7-8df9-a18f77747fa7.png"
        alt="Spielaufbau Übersicht"
        className="w-full max-w-3xl mx-auto rounded-lg shadow-md mb-8"
      />
      
      <div className="space-y-6">
        <section>
          <h3 className="text-xl font-semibold mb-3">Spielmaterial</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
            <li>1 Spielbrett</li>
            <li>6 Spielfiguren</li>
            <li>60 Entwicklungskarten</li>
            <li>30 Ereigniskarten</li>
            <li>Würfel</li>
            <li>Spielgeld</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-3">Vorbereitung</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-600 ml-4">
            <li>Spielbrett in die Tischmitte legen</li>
            <li>Jeder Spieler wählt eine Spielfigur</li>
            <li>Entwicklungs- und Ereigniskarten mischen</li>
            <li>Startkapital verteilen</li>
            <li>Startspieler bestimmen</li>
          </ol>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-3">Startaufstellung</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
            <li>Spielfiguren auf das Startfeld stellen</li>
            <li>Jeder Spieler zieht 3 Entwicklungskarten</li>
            <li>Ereigniskarten als verdeckten Stapel bereitlegen</li>
          </ul>
        </section>
      </div>
    </div>
  );
};