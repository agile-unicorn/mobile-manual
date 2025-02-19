export const SprintsTab = () => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md space-y-6">
      <h2 className="text-2xl font-semibold mb-6">Der Sprint</h2>
      
      <img 
        src="/lovable-uploads/1bc6d452-978e-4c1b-8dba-7a47a93c62ad.png"
        alt="Sprint Übersicht"
        className="w-full mb-8"
      />
      
      <p className="text-gray-600 mb-6">
        Das Spiel läuft über mehrere Sprints (Runden). Während eines Sprints versuchen die Spieler durch Ausspielen ihrer Team- und Event-Karten die Mitspieler in mehreren Duellen (Pitch, Spielzug) zu übertreffen, 
        um möglichst wertvolle neue Karten für das eigene Startup zu gewinnen.
      </p>

      <section>
        <h3 className="text-xl font-semibold mb-3">Der Sprint</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-2">Sprint-Start</h4>
            <p className="text-gray-600">
              Alle Spieler verfügen über ihr komplettes Team sowie mindestens zwei Event-Karten. Der Inhalt des Sprints wird festgelegt, indem ein Sprint-Backlog aus 5 zufälligen Karten vom Nachziehstapel ausgelegt wird (Features, Incentives, Teamkarten). Die erste Karte wird offen
              in die Tischmitte gelegt, die Nächste als Vorschau offen neben die verbleidenden Karten (die noch verdeckt sind). Es folgen dann mehrere Pitch-Runden auf die Karten des Sprint-Backlogs.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Sprint-Ende</h4>
            <p className="text-gray-600">
              Der Sprint ist beendet, sobald die letzte Pitch-Runde ausgespielt wurde. Er kann auch vorzeitig enden, falls bereits alle Spieler ihre Teamkarten eingesetzt oder alle Spieler gepasst haben. Besitzt nur noch ein Spieler ungenutzte Teamkarten auf der Hand, kann er die restlichen Pitches auch alleine durchführen. 
              Sollte er jedoch passen, ist der Sprint beendet.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Neuer Sprint</h4>
            <p className="text-gray-600">
              Sämtliche Teamkarten werden wieder aufgenommen sowie neue und eingesetzte Incentive-Karten offen ausgelegt. Jeder Spieler zieht zwei neue Event-Karten, ungenutzte bleiben auf der Hand. Das Sprint-Backlog wird wieder auf 5 Karten vom Nachziehstapel aufgefüllt und der nächste Startspieler beginnt den neuen Sprint (siehe oben). 
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
