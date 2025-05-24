import {ManualCard} from "@/components/ManualCard";

export const EnterpriseEn = () => {
    return (
        <>
            <h1 className="text-4xl font-bold text-primary mb-8">Enterprise Ecstasy (Expansion)</h1>

            <div className="w-full mt-6">
                <div className="bg-white rounded-lg p-8 shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Highly Professional in the Corporation</h2>
                    <div className="flex flex-col md:flex-row items-start gap-6">
                        <div className="flex-1">
                            <img
                                src="/lovable-uploads/74cf2d65-fe10-4f21-af77-58e52824a08c.png"
                                alt="Consultant"
                                className="float-left mr-8 mb-4 w-32 h-auto"
                            />
                            <p className="text-gray-600 mb-2">
                                Enterprise Ecstasy is a separately available expansion for the base game and allows you to play Agile Unicorn with <strong>up to 6 players</strong>, introducing <strong>new tactical elements</strong>.
                            </p>

                            <p className="text-gray-600 mb-2">
                                With 6 players, the game duration increases, so stronger incentives and more valuable stories are included in the deck.
                                The cards from the expansion deck complement the cards from the base game, meaning they are shuffled together. They are marked to distinguish them from the other cards and can be sorted out if needed.
                            </p>

                            <p className="text-gray-600">
                                <strong>These rules are not final yet.</strong>
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <h2 className="text-4xl font-bold text-primary mt-16 mb-6 pl-4 ">New Mechanics</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
                <ManualCard
                    title="Reroll"
                    description="Incentive to reroll"
                    className="bg-white"
                >
                    <img
                        src="/lovable-uploads/reroll.png"
                        alt="reroll symbol"
                        className="float-left mr-2 w-1/3 h-auto"
                    />
                    Rerolls can be used for yourself or against another player to <strong>reroll all dice</strong>.
                    After use, the card is consumed for the sprint.
                </ManualCard>

                <ManualCard
                    title="The Bomb"
                    description="Event to cancel the pitch"
                    className="bg-white"
                >
                    <img
                        src="/lovable-uploads/bomb.png"
                        alt="Bomb symbol"
                        className="float-left mr-2 w-1/3 h-auto"
                    />
                    The entire pitch is canceled, and all used cards are consumed. This card affects all players who participated in the pitch.
                </ManualCard>

                <ManualCard
                    title="All In"
                    description="Event to use all team members"
                    className="bg-white"
                >
                    <img
                        src="/lovable-uploads/allin.png"
                        alt="All in symbol"
                        className="float-left mr-2 w-1/3 h-auto"
                    />
                    All remaining team members must be used in the pitch.
                </ManualCard>

                <ManualCard
                    title="Sabotage"
                    description="Steal an incentive"
                    className="bg-white"
                >
                    <img
                        src="/lovable-uploads/sabotage.png"
                        alt="Sabotage symbol"
                        className="float-left mr-2 w-1/3 h-auto"
                    />
                    An incentive can be permanently stolen from another player's hand. The player keeps their incentives hidden, and the player who played the sabotage card draws one of them. Used incentives cannot be stolen.
                </ManualCard>

            </div>

            <h2 className="text-4xl font-bold text-primary mt-16 mb-6 pl-4 ">Game Setup</h2>

            <div className="w-full mt-6">
                <div className="bg-white rounded-lg p-8 shadow-md">

                    <section className="mb-4">
                        <h3 className="text-xl font-semibold mb-3">Sort Cards</h3>
                        <p className="text-gray-600 mb-2">The cards from the expansion deck are shuffled into the base game cards, except for the following:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                            <li>One reroll card is set aside for each player for the starting deck. Additional reroll cards are shuffled into the draw pile.</li>
                            <li>All CTOs and noobs not needed by the players are removed from the game.</li>
                            <li>The rest of the setup proceeds as in the base game.</li>
                        </ul>

                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-3">Distribute Starting Deck</h3>
                        <p className="text-gray-600 mb-2">Each player receives the following cards:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                            <li>one Chief Technical Officer (CTO, 3 dice)</li>
                            <li>one team member with 2 dice</li>
                            <li>one noob (1 die)</li>
                            <li>one green reroll incentive card</li>
                            <li>one green incentive card with a value of 2</li>
                            <li>two event cards</li>
                        </ul>

                    </section>
                </div>
            </div>
        </>
    );
};