export const GettingStartedEn = () => {
  return (
      <div className="bg-white rounded-lg p-8 shadow-md space-y-6">
        <h2 className="text-2xl font-semibold mb-6">Game Setup</h2>

        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-semibold mb-3">Set Victory Points</h3>
            <p className="text-gray-600 mb-2">
              Depending on how long you want the game to last, the required victory points can be varied:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>22 Victory Points "MVP" (approx. 20 minutes)</li>
              <li>32 Victory Points "Quick Scrum" (approx. 40 minutes)</li>
              <li>42 Victory Points "Full Fledged" (approx. 60 minutes)</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">Distribute Team Cards</h3>
            <p className="text-gray-600 mb-2">Each player receives their starting deck:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>one Chief Technical Officer (CTO, 3 dice)</li>
              <li>one team member with 2 dice</li>
              <li>one noob (1 die)</li>
              <li>one green incentive card with a value of 2</li>
              <li>two event cards</li>
            </ul>
            <p className="text-gray-600 mt-2">
              All remaining CTOs and noobs are removed and put back into the box.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">Prepare Piles</h3>
            <p className="text-gray-600">
              All event cards are placed face down in a pile. All other cards (stories, incentives and team cards) are shuffled and placed face down in a separate draw pile.
            </p>
          </section>
        </div>

        <img
            src="/lovable-uploads/spielaufbau.png"
            alt="Game setup overview with draw pile, pitch cards, victory points, incentives and hand cards"
            className="w-full mb-8"
        />

        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-semibold mb-3">Adjustments</h3>
            <p className="text-gray-600 mt-4 bg-gray-100 p-4 rounded">
              <strong>Easy Start:</strong> Inexperienced players can play one sprint without event cards to learn the basic mechanics. Experienced players can start directly with event cards.
            </p>
            <p className="text-gray-600 mt-4 bg-gray-100 p-4 rounded">
              <strong>With 2 Players:</strong> If only 2 players are participating, each receives 2 additional team cards: one with strength 2 and one with strength 1.
            </p>
            <p className="text-gray-600 mt-4 bg-gray-100 p-4 rounded">
              <strong>With 5 Players:</strong> If 5 players are participating, the backlog must be expanded to 6 cards so that the starting player changes continuously.
            </p>
          </section>

          <section>
            <h4 className="text-xl font-semibold mb-3">Teams (Cooperative Mode)</h4>

            <p className="text-gray-600 mb-2">
              For an even number of players (4), teams can be formed: team members can coordinate and pitch on cards together,
              meaning that the dice results are added up. All effects of event and incentive cards then apply to the entire team
              (e.g. skip, magic wands). The victory points of the team members are also summed.
            </p>

            <p className="text-gray-600 mb-2">
              If a team member does not participate in the pitch, they are not allowed to use their event and incentive cards.
            </p>
          </section>
        </div>
      </div>
  );
};