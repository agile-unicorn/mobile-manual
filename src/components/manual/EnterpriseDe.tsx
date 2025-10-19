import {ManualCard} from "@/components/ManualCard";

export const EnterpriseDe = () => {
    return (
        <>
            <h1 className="text-4xl font-bold text-primary mb-8">Enterprise Ekstase (Erweiterung)</h1>

            <div className="w-full mt-6">
                <div className="bg-white rounded-lg p-8 shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Hochprofessionell unterwegs im Konzern</h2>
                    <div className="flex flex-col md:flex-row items-start gap-6">
                        <div className="flex-1">
                            <img
                                src="/lovable-uploads/74cf2d65-fe10-4f21-af77-58e52824a08c.png"
                                alt="Consultant"
                                className="float-left mr-8 mb-4 w-32 h-auto"
                            />
                            <p className="text-gray-600 mb-2">
                                Enterprise Ekstase ist eine separat erhältliche Erweiterung des Basisspiels und
                                ermöglicht es, Agile Unicorn mit <strong>bis zu 6
                                Spielern</strong> zu spielen und führt <strong>neue taktische Elemente ein</strong>. Es
                                ist kein eigenständiges Spiel.
                            </p>

                            <p className="text-gray-600 mb-2">
                                Bei 6 Spielern erhöht sich die Spielzeit, deswegen sind stärkere Incentives und
                                wertvollere
                                Storys im Deck.
                                Die Karten des Erweiterungs-Decks ergänzen die Karten des
                                Basisspiels, d.h. sie werden mit den anderen vermischt. Sie haben eine Markierung, um
                                sie von den anderen Karten zu unterscheiden
                                und bei Bedarf aussortieren zu können.
                            </p>

                        </div>
                    </div>

                </div>
            </div>

            <h2 className="text-4xl font-bold text-primary mt-16 mb-6 pl-4 ">Neue Mechaniken</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
                <ManualCard
                    title="Reroll "
                    description="Incentive, um neu zu würfeln"
                    className="bg-white"
                >
                    <img
                        src="/lovable-uploads/reroll.png"
                        alt="reroll symbol"
                        className="float-left mr-2 w-1/3 h-auto"
                    />
                    Rerolls kann man für sich oder gegen einen Mitspieler einsetzen, um einen kompletten <strong>Wurf
                    aller Würfel</strong> zu wiederholen. Tipp: Daran denken, sich nach dem Sprint seine Reroll-Karte
                    wieder zurückzuholen.

                </ManualCard>

                <ManualCard
                    title="Die Bombe"
                    description="Event, um den Pitch abzubrechen"
                    className="bg-white"
                >
                    <img
                        src="/lovable-uploads/bomb.png"
                        alt="Bomb symbol"
                        className="float-left mr-2 w-1/3 h-auto"
                    />
                    Der komplette Pitch wird abgebrochen und alle eingesetzten Karten sind verbraucht. Diese Karte
                    betrifft alle Spieler, die am Pitch teilgenommen haben.
                </ManualCard>

                <ManualCard
                    title="All In"
                    description="Event, um alle Teammitglieder einzusetzen"
                    className="bg-white"
                >
                    <img
                        src="/lovable-uploads/allin.png"
                        alt="All in symbol"
                        className="float-left mr-2 w-1/3 h-auto"
                    />
                    Alle verbliebenden Teammitglieder müssen im Pitch eingesetzt werden.
                </ManualCard>

                <ManualCard
                    title="Sabotage"
                    description="Incentive klauen"
                    className="bg-white"
                >
                    <img
                        src="/lovable-uploads/sabotage.png"
                        alt="Sabotage symbol"
                        className="float-left mr-2 w-1/3 h-auto"
                    />
                    Ein Incentive kann von der Hand eines Mitspielers dauerhaft geklaut werden. Der Mitspieler hält die
                    Incentives verdeckt
                    und der Spieler, der die Sabotage-Karte gespielt hat, zieht eine der Karten. Benutzte Incentives
                    können nicht geklaut werden.
                </ManualCard>

            </div>

            <h2 className="text-4xl font-bold text-primary mt-16 mb-6 pl-4 ">Spielaufbau</h2>

            <div className="w-full mt-6">
                <div className="bg-white rounded-lg p-8 shadow-md">

                    <section className="mb-4">
                        <h3 className="text-xl font-semibold mb-3">Karten sortieren</h3>
                        <p className="text-gray-600 mb-2">Die Karten des Erweiterungs-Decks werden bis auf folgende
                            Ausnahmen unter die Karten des
                            Basisspiels gemischt:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                            <li>Für jeden Spieler wird eine Reroll-Karte für das Startdeck aussortiert. Weitere
                                Reroll-Karten
                                werden in den Nachziehstapel gemischt.
                            </li>
                            <li>Alle CTOs und Noobs, die nicht von den Spielern benötigt werden, werden aus dem Spiel
                                entfernt.
                            </li>
                            <li>Die weitere Vorbereitung läuft wie im Basisspiel ab.</li>
                        </ul>

                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-3">Startdeck ausgeben</h3>
                        <p className="text-gray-600 mb-2">Jeder Spieler erhält folgende Karten:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                            <li>einen Chief Technical Officer (CTO, 3 Würfel)</li>
                            <li>ein Teammitglied mit 2 Würfeln</li>
                            <li>einen Noob (1 Würfel)</li>
                            <li>eine grüne Reroll-Incentive-Karte</li>
                            <li>eine grüne Incentive-Karte mit dem Wert 2</li>
                            <li>zwei rote Event-Karten</li>
                        </ul>

                    </section>
                </div>
            </div>
        </>
    );
};
