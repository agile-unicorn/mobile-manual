export const SprintsEn = () => {
    return (
        <div className="bg-white rounded-lg p-8 shadow-md space-y-6">
            <h2 className="text-2xl font-semibold mb-6">The Sprint</h2>

            <img
                src="/lovable-uploads/sprint.png"
                alt="Sprint Overview"
                className="w-full mb-8"
            />

            <p className="text-gray-600 mb-6">
                The game runs over multiple sprints: A sprint consists of up to 5 duel rounds (pitches). During a sprint, players try to outperform their opponents in several duels by playing their team and event cards to win the most valuable new cards for their startup.
            </p>

            <section>
                <div className="space-y-6">
                    <div>
                        <h4 className="font-semibold mb-2">Sprint Start</h4>
                        <p className="text-gray-600 mb-2">
                            All players have their complete team as well as any incentive cards in their hand. If event cards are used, they are also in hand.
                        </p>
                        <h4 className="font-semibold mb-2">Sprint Backlog</h4>
                        <p className="text-gray-600 mb-2">
                            The content of the sprint is determined by laying out a sprint backlog of 5 random cards drawn from the draw pile (stories, incentives, team cards). The first card is placed face up in the center of the table, the next one as a preview next to the remaining cards (which are still face down). This is followed by several pitch rounds for the sprint backlog cards.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">Sprint End</h4>
                        <p className="text-gray-600">
                            The sprint ends as soon as the last pitch round has been played. It may also end prematurely if all players have used their team cards or have passed. If only one player still has unused team cards in hand, they can continue the remaining pitches alone. However, if they pass, the sprint is over.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">Retro and New Sprint</h4>
                        <p className="text-gray-600">
                            Each player ensures that their team consists of a maximum of 5 members. Extra team cards are placed back in the draw pile.
                        </p>
                        <p className="text-gray-600">
                            All team cards as well as new and used incentive cards are retrieved. Each player draws two new event cards; unused ones remain in hand. The sprint backlog is replenished from the draw pile (5 cards, or 6 cards with 5 players) and the next starting player begins the new sprint.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};