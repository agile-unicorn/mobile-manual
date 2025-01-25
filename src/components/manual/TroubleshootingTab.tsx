export const TroubleshootingTab = () => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md space-y-6">
      <h2 className="text-2xl font-semibold mb-6">Die Pitches</h2>
      
      <img 
        src="/lovable-uploads/4ff67390-89ef-495a-9f61-a68c580a21e9.png"
        alt="Pitch Runde Übersicht"
        className="w-full mb-8"
      />
      
      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-semibold mb-4">Präsentationsphase</h3>
          
          <div className="space-y-6">
            <div className="border-b pb-4">
              <h4 className="font-semibold mb-2">Vorbereitung</h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li>Produkt-Features zusammenfassen</li>
                <li>Pitch-Strategie festlegen</li>
                <li>Präsentationszeit beachten</li>
                <li>Unterlagen vorbereiten</li>
              </ol>
            </div>

            <div className="border-b pb-4">
              <h4 className="font-semibold mb-2">Durchführung</h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li>Produkt vorstellen</li>
                <li>Alleinstellungsmerkmale hervorheben</li>
                <li>Marktpotenzial aufzeigen</li>
                <li>Investitionsbedarf erläutern</li>
              </ol>
            </div>

            <div className="border-b pb-4">
              <h4 className="font-semibold mb-2">Bewertung</h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li>Innovation und Kreativität</li>
                <li>Marktpotenzial und Umsetzbarkeit</li>
                <li>Präsentationsqualität</li>
                <li>Gesamteindruck</li>
              </ol>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4">Spielende</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <ul className="space-y-2 text-gray-600">
              <li>Auswertung der gesammelten Investitionen</li>
              <li>Ermittlung des Gewinners</li>
              <li>Vergabe von Bonus-Punkten für besondere Leistungen</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};