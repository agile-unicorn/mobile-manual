export const Sprints = () => {
    return (
        <div className="bg-white rounded-lg p-8 shadow-md space-y-6">
            <h2 className="text-2xl font-semibold mb-6">Sprints</h2>

            <img
                src="/lovable-uploads/sprint.png"
                alt="Sprint Overview"
                className="w-full mb-8"
            />

            <p className="text-gray-600 mb-6">
                The game runs over several sprints: A sprint consists of up to 5 duel rounds (pitch). During a sprint, players try to outdo their opponents in several duels by playing their team and event cards to win the most valuable new cards for their own startup.
            </p>

            <section>

                <div className="space-y-6">
                    <div>
                        <h4 className="font-semibold mb-2">Sprint Start</h4>
                        <p className="text-gray-600 mb-2">
                            All players have their complete team in hand as well as their usable incentive cards in front of them on the table. If event cards are being played, they are also in hand.
                        </p>
                        <p>
                            The content of the sprint is determined by laying out a sprint backlog of 5 random cards from the draw pile (stories, incentives, team cards). The first card is placed face up in the center of the table, the next as a preview face up next to the remaining cards (which are still face down). Several pitch rounds then follow for the cards in the sprint backlog.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">Sprint End</h4>
                        <p className="text-gray-600">
                            The sprint ends as soon as the last pitch round has been played. It can also end prematurely if all players have already used their team cards or all players have passed. If only one player still has unused team cards in hand, they can complete the remaining pitches alone. However, if they pass, the sprint ends.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">Retro and New Sprint</h4>
                        <p className="text-gray-600">
                            Each player checks that their team consists of a maximum of 5 members. Excess team cards are placed under the draw pile.
                        </p>
                        <p className="text-gray-600">
                            All team cards are taken back, and new and used incentive cards are laid out face up. Each player draws two new event cards, unused ones remain in hand. The sprint backlog is replenished to 5 cards from the draw pile, and the next starting player begins the new sprint (see above).
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};