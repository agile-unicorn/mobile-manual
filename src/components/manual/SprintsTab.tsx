export const SprintsTab = () => {
    return (
        <div className="bg-white rounded-lg p-8 shadow-md space-y-6">
            <h2 className="text-2xl font-semibold mb-6">Der Sprint</h2>

            <img
                src="/lovable-uploads/sprint.png"
                alt="Sprint Übersicht"
                className="w-full mb-8"
            />

            <p className="text-gray-600 mb-6">
                Das Spiel läuft über mehrere Sprints: Ein Sprint besteht aus bis zu 5 Duell-Runden (Pitch). Während eines Sprints versuchen die
                Spieler durch Ausspielen ihrer Team- und Event-Karten die Mitspieler in mehreren Duellen  zu übertreffen,
                um möglichst wertvolle neue Karten für das eigene Startup zu gewinnen.
            </p>

            <section>

                <div className="space-y-6">
                    <div>
                        <h4 className="font-semibold mb-2">Sprint-Start</h4>
                        <p className="text-gray-600 mb-2">
                            Alle Spieler verfügen über ihr komplettes Team auf der Hand sowie ihren nutzbaren
                            Incentive-Karten vor sich auf dem Tisch. Falls mit Event-Karten gespielt wird, sind diese
                            ebenfalls auf der hand.
                        </p>
                        <p>
                            Der Inhalt des Sprints wird festgelegt, indem ein Sprint-Backlog aus 5 zufälligen Karten vom
                            Nachziehstapel ausgelegt wird (Storys, Incentives, Teamkarten). Die erste Karte wird offen
                            in die Tischmitte gelegt, die Nächste als Vorschau offen neben die verbleidenden Karten (die
                            noch verdeckt sind). Es folgen dann mehrere Pitch-Runden um die Karten des Sprint-Backlogs.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">Sprint-Ende</h4>
                        <p className="text-gray-600">
                            Der Sprint ist beendet, sobald die letzte Pitch-Runde ausgespielt wurde. Er kann auch
                            vorzeitig enden, falls bereits alle Spieler ihre Teamkarten eingesetzt oder alle Spieler
                            gepasst haben. Besitzt nur noch ein Spieler ungenutzte Teamkarten auf der Hand, kann er die
                            restlichen Pitches auch alleine durchführen.
                            Sollte er jedoch passen, ist der Sprint beendet.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">Retro und neuer Sprint</h4>
                        <p className="text-gray-600">
                            Jeder Spieler kontrolliert, dass das Team aus maximal 5 Mitgliedern besteht. Überzählige Teamkarten werden unter den Nachziehstapel geschoben.
                        </p>
                        <p className="text-gray-600">
                            Sämtliche Teamkarten werden wieder aufgenommen sowie neue und eingesetzte Incentive-Karten
                            offen ausgelegt. Jeder Spieler zieht zwei neue Event-Karten, ungenutzte bleiben auf der
                            Hand. Das Sprint-Backlog wird wieder auf 5 Karten vom Nachziehstapel aufgefüllt und der
                            nächste Startspieler beginnt den neuen Sprint (siehe oben).
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};
