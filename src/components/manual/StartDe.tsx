import {ManualCard} from "@/components/ManualCard";

export const StartDe = () => {
    return (
        <>
            <h1 className="text-4xl font-bold text-primary mb-4">Agile Unicorn Regelwerk</h1>
            <div className="ml-2 text-sm text-gray-500 cursor-pointer group relative"> --&gt; Was ist ein Unicorn?
                <div
                    className="absolute left-0 top-full mt-1 w-1/3 p-2 bg-pink-400 text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    Ein Unicorn ist ein privates Start-up-Unternehmen,
                    das eine Bewertung von über einer Milliarde US-Dollar erreicht hat.<br/> Der Begriff wurde geprägt,
                    um die Seltenheit solcher Erfolge zu betonen, da es für Start-ups sehr schwierig ist, eine
                    solche Bewertung zu erreichen (außer man befindet sich in einer Blase).
                </div>
            </div>

            <div className="w-full mt-6">
                <div className="bg-white rounded-lg p-8 shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Spielziel</h2>
                    <div className="flex flex-col md:flex-row items-start gap-6">
                        <div className="flex-1">
                            <img
                                src="/lovable-uploads/74cf2d65-fe10-4f21-af77-58e52824a08c.png"
                                alt="Lumberjack character"
                                className="float-right ml-4 mb-4 w-64 h-auto hidden"
                            />
                            <p className="text-gray-600">
                                <strong>Überlebe mit deinem Startup das IT-Chaos und gewinne, indem du als Erster die
                                    meisten Siegpunkte erreichst.</strong>
                            </p>

                            <p className="text-gray-600">
                                Um deine Mitspieler auszustechen, muss es gelingen, das Potenzial deines Entwicklerteams
                                im Duell um neue Storys und die besten Köpfe optimal einzusetzen. Doch leider läuft
                                selten alles so wie geplant, denn auch die anderen Spieler werden zu allen Mitteln
                                greifen, um die besten Storys für sich zu gewinnen.
                            </p>

                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-start gap-6 mt-4">
                        <div className="flex-1">
                            <h2 className="text-2xl font-semibold mb-4">Spielablauf</h2>
                            <p className="text-gray-600 mb-6">
                                Das Spiel läuft über mehrere Durchgänge (Sprints): Ein Sprint besteht aus bis zu 5
                                Duell-Runden (Pitch).
                                Während eines Sprints versuchen die Spieler durch Ausspielen ihrer Team- und
                                Event-Karten die Mitspieler
                                in mehreren Duellen zu übertreffen, um möglichst wertvolle neue Karten für das eigene
                                Startup zu gewinnen.
                            </p></div>
                    </div>
                    <p className="text-gray-600 bg-gray-200 p-4 rounded">
                        <strong>TLDR:</strong> Auf die Karten, die die Siegpunkte bringen, werden verdeckt
                        Teammitglieder
                        angesetzt. Die Teammitglieder haben unterschiedliche Stärke (Würfel). Vor und nach dem
                        Würfeln können noch Effekte ausgespielt werden, um sich selbst einen Vorteil zu
                        verschaffen. Das Team mit dem höchsten Würfelergebnis bekommt die Story-Siegpunktkarte.
                    </p>
                </div>
            </div>

            <h2 className="text-4xl font-bold text-primary mt-16 mb-6 pl-4">Die Karten</h2>
            <p className="text-gray-600 mb-8 pl-4">
                Es gibt vier verschiedene Arten von Karten. Sie unterscheiden sich durch ihre Kartenfarbe. Für die
                Regeln sind die Zahlen und Symbole oben links relevant, die Kartentexte dienen alleine dem Amüsement.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ManualCard
                    title="Storys (Siegpunkte)"
                    description="Storys haben einen Wert zwischen 3 und 20 Siegpunkten. Er entspricht der Zahl oben links auf der Karte."
                    className="relative">
                    <div className="relative">
                        <img
                            src="/lovable-uploads/940f3730-58d6-4602-bc18-31c9c7114d59.png"
                            alt="Story card example"
                            className="float-right ml-6 mb-2 w-1/3 h-auto"
                        />
                        Ob eine Story erfolgreich umgesetzt werden kann, wird durch Würfeln gegen den Wert bestimmt. Bei
                        Erfolg erhält der Spieler mit dem höchsten Würfelergebnis die Story-Karte und legt diese am
                        Sprintende offen
                        neben den anderen gewonnenen Story-Karten vor sich aus.
                    </div>
                </ManualCard>
                <ManualCard
                    title="Teammitglieder"
                    description="Ihre Stärke wird oben links durch Würfel angezeigt. Dies gibt die Anzahl von Würfeln an, die du beim Pitch um eine Story würfeln darfst. Bei manchen Karten wird darunter noch ein Bonus oder Malus angezeigt."
                    className="relative"
                >
                    <img
                        src="/lovable-uploads/2a69e587-9129-40c7-b233-245d01f1ac7d.png"
                        alt="Der Hammer card"
                        className="float-right ml-2 mb-2 w-1/3 h-auto"
                    />

                    <p>Dein Team darf maximal aus 5 Mitgliedern bestehen. Wenn ein 6. Mitglied gewonnen wird, muss der
                        Spieler ein anderes Mitglied seiner Wahl entlassen und unter den Nachziehkartenstapel legen.</p>
                    <p>Die Teammitglieder bleiben auf der Hand bis sie eingesetzt werden. Dies ist je Teammitglied
                        einmal pro Sprint möglich.</p>
                </ManualCard>

                <ManualCard
                    title="Incentives"
                    description="Incentives können nach dem Würfeln eingesetzt werden, um das Ergebnis zu verbessern."
                >
                    <img
                        src="/lovable-uploads/b75da821-ce58-4b2e-9be4-a4b871e66267.png"
                        alt="Tischkicker und Mate"
                        className="float-right ml-2 mb-2 w-1/3 h-auto"
                    />
                    <p>
                        Die Attraktivität deines Startups wird durch Annehmlichkeiten gesteigert, mit denen die
                        Teammitglieder zu Höchstleistungen motiviert werden sollen.<br/>
                        Jede Karte kann 1x pro Sprint nach dem Würfeln eingesetzt werden, um das Würfelergebnis zu
                        verbessern, beginnend beim Startspieler.
                        Nach der Nutzung werden sie bis zum Sprintende umgedreht abgelegt.
                    </p>
                </ManualCard>

                <ManualCard
                    title="Events"
                    description="Event-Karten haben einen einmaligen Effekt vor dem Würfeln und können nur von Spielern gegen andere Spieler eingesetzt werden."
                >
                    <img
                        src="/lovable-uploads/6099a104-34b4-4501-bee6-c3dad95a8784.png"
                        alt="Serverausfall Ereigniskarte"
                        className="float-right ml-2 mb-2 w-1/3 h-auto"
                    />
                    Es gibt kein Limit von Event-Karten auf der Hand und sie können über mehrere Runden gesammelt
                    werden. Nach dem Ausspielen sind sie verbraucht und werden unter den Stapel der Event-Karten gelegt.

                    Wer passt, kann keine Event-Karten einsetzen. Jede Karte kann gegen jeden Spieler im Pitch (die
                    nicht gepasst haben) gespielt werden, inklusive sich selbst. Sie können nicht gegen die Pitch-Karte
                    in der Tischmitte gespielt werden, um diese zu verändern.
                </ManualCard>
            </div>

            <h2 className="text-4xl font-bold text-primary mt-16 mb-6 pl-4 ">Symbole</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                <ManualCard
                    title="Punktwert"
                    description="verändert das Würfelergebnis"
                    className="bg-white"
                >
                    <img
                        src="/lovable-uploads/df031a76-2250-4d8c-a810-f9e021ad6682.png"
                        alt="Plus one symbol"
                        className="float-left mr-2 w-1/3 h-auto"
                    />
                    Bonus oder Malus auf das gewürfelte Ergebnis.
                </ManualCard>

                <ManualCard
                    title="Aussetzen"
                    description="alle Teamkarten wieder auf die Hand nehmen"
                    className="bg-white"
                >
                    <img
                        src="/lovable-uploads/5786521a-1242-4e08-a8ff-7575299baf61.png"
                        alt="Aussetzen symbol"
                        className="float-left mr-2 w-1/3 h-auto"
                    />
                    Der Spieler muss alle gelegten Teamkarten sofort wieder auf die Hand nehmen. Die Teamkarten können
                    im nächsten Pitch weiter verwendet werden, aber gespielte Event-Karten sind verloren.<br /><br />
                    Es können Event-Karten gespielt werden, die auf der Hand sind (z.B. Zauberstab oder "Teammitglied
                    nachziehen", um einzelne Teammitglieder doch noch einzusetzen).
                </ManualCard>

                <ManualCard
                    title="Zauberstab"
                    description="wendet eine Event-Karte ab"
                    className="bg-white"
                >
                    <img
                        src="/lovable-uploads/b464c24b-351d-4585-9dc8-e7fb0de7ef89.png"
                        alt="Magic wand symbol"
                        className="float-left mr-2 w-1/3 h-auto"
                    />Wendet einmalig die Auswirkung einer anderen Event-Karte ab. Die Karte kann jederzeit gespielt
                    werden, auch gegen andere Zauberstab-Karten.
                </ManualCard>

                <ManualCard
                    title="Würfel"
                    description="plus (mehr) oder minus (weniger)"
                    className="bg-white"
                >
                    <img
                        src="/lovable-uploads/4cf6a244-f16f-41b2-8b9a-6b961d705512.png"
                        alt="Dice symbol"
                        className="float-left mr-2 w-1/3 h-auto"
                    />
                    Einmalig die gezeigten Würfel zusätzlich oder weniger im Pitch.
                </ManualCard>

                <ManualCard
                    title="Teammitglied dazu"
                    description="Ein zusätzliches Teammitglied ausspielen"
                    className="bg-white"
                >
                    <img
                        src="/lovable-uploads/83fa8356-7b6d-4a9e-80f3-62fce83f081b.png"
                        alt="Teammitglied dazu Symbol"
                        className="float-left mr-2 w-1/3 h-auto"
                    />
                    Der adressierte Spieler muss eine zusätzliche Teamkarte im Pitch verwenden. Diese Karte muss von
                    seiner Hand kommen und wird von ihm selbst ausgewählt.
                </ManualCard>

                <ManualCard
                    title="Teammitglied weg"
                    description="Ein ausgespieltes Teammitglied entfernen"
                    className="bg-white"
                >
                    <img
                        src="/lovable-uploads/b72ac29e-2735-436c-8840-a6354f4a0f87.png"
                        alt="Teammitglied entfernen Symbol"
                        className="float-left mr-2 w-1/3 h-auto"
                    />
                    Der adressierte Spieler muss eine bereits gespielte Teamkarte seiner Wahl aus dem Pitch entfernen.
                    Diese Teamkarte darf erst wieder im nächsten Sprint auf die Hand genommen werden.
                </ManualCard>
            </div>
        </>
    );
};
