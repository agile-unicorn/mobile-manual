export const SprintsDe = () => {
    return (
        <div className="bg-white rounded-lg p-8 shadow-md space-y-6">
            <h2 className="text-2xl font-semibold mb-6">Der Sprint</h2>

            <img
                src="/lovable-uploads/sprint.png"
                alt="Sprint Übersicht"
                className="w-full mb-8"
            />

            <p className="text-gray-600 mb-6">
                Das Spiel läuft über mehrere Sprints: Ein Sprint besteht aus bis zu 5 Duell-Runden (Pitches). Während eines Sprints versuchen die
                Spieler durch Ausspielen ihrer Team- und Event-Karten die Mitspieler in mehreren Duellen  zu übertreffen,
                um möglichst wertvolle neue Karten für das eigene Startup zu gewinnen.
            </p>

            <section>

                <div className="space-y-6">
                    <div>
                        <h4 className="font-semibold mb-2">Sprint-Start</h4>
                        <p className="text-gray-600 mb-2">
                            Alle Spieler verfügen über ihr komplettes Team sowie den Incentive-Karten auf der Hand. Falls mit Event-Karten gespielt wird, sind diese
                            ebenfalls auf der Hand.
                        </p>
                        <h4 className="font-semibold mb-2">Sprint-Backlog</h4>
                        <p className="text-gray-600 mb-2">
                            Der Inhalt des Sprints wird festgelegt, indem ein Sprint-Backlog aus 5 zufälligen Karten (bei 5 Spielern 6 Karten) vom Nachziehstapel ausgelegt wird
                            (Storys, Incentives, Teamkarten). Die erste Karte wird offen in die Tischmitte gelegt, die Nächste als Vorschau offen neben die
                            verbleibenden Karten (die noch verdeckt sind). Es folgen dann mehrere Pitch-Runden um die Karten des Sprint-Backlogs.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">Pitches</h4>
                        <p className="text-gray-600">
                            Nun finden die Duell-Runden statt, in denen die Spieler um die Karten des Sprint-Backlogs pitchen können. Die genaue Beschreibung des Ablauf befindet sich auf der nächsten Seite.
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
                            Sämtliche Teamkarten sowie neue und eingesetzte Incentive-Karten werden wieder aufgenommen.
                        </p>
                        <p className="text-gray-600">
                            Jeder Spieler kontrolliert, dass das Team aus maximal 5 Mitgliedern besteht. Überzählige Teammitglieder müssen entlassen werden, also die Karten unter den Nachziehstapel geschoben werden.
                        </p>
                        <p className="text-gray-600">

                            Jeder Spieler zieht zwei neue Event-Karten, ungenutzte bleiben auf der
                            Hand. Das Sprint-Backlog wird wieder vom Nachziehstapel auf die Anfangskartenzahl aufgefüllt und der
                            nächste Startspieler beginnt den neuen Sprint.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};
