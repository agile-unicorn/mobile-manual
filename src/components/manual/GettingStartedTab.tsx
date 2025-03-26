export const GettingStartedTab = () => {
  return (
      <div className="bg-white rounded-lg p-8 shadow-md space-y-6">
        <h2 className="text-2xl font-semibold mb-6">Game Setup</h2>

        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-semibold mb-3">Set Victory Points</h3>
            <p className="text-gray-600 mb-2">Depending on the desired game duration, the required victory points can be varied:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>22 Victory Points "MVP" (approx. 30 minutes)</li>
              <li>32 Victory Points "Quick Scrum" (approx. 60 minutes)</li>
              <li>42 Victory Points "Full Fledged" (approx. 90 minutes)</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">Distribute Team Cards</h3>
            <p className="text-gray-600 mb-2">Each player receives their starting deck:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>one CTO (3 dice)</li>
              <li>one team member with 2 dice</li>
              <li>one noob (1 dice)</li>
              <li>one green incentive card with a value of 2 (placed face up)</li>
              <li>two event cards (in hand)</li>
            </ul>
            <p className="text-gray-600 mt-2">All remaining CTOs and noobs are sorted out and put back in the box.</p>
          </section>
        </div>

        <img
            src="/lovable-uploads/spielaufbau.png"
            alt="Game setup overview with draw pile, pitch cards, victory points, incentives, and hand cards"
            className="w-full mb-8"
        />

        <div className="space-y-6">

          <section>

            <p className="text-gray-600 mt-4 bg-gray-100 p-4 rounded">
              <strong>Beginners:</strong> Inexperienced players should play 1-2 sprints without event cards to understand the basic mechanics. Experienced players can start directly with event cards.
            </p>
            <p className="text-gray-600 mt-4 bg-gray-100 p-4 rounded">
              <strong>With 2 players:</strong> If only 2 players are playing, each receives 2 additional team cards: one with strength 2 and one with strength 1.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">Prepare Decks</h3>
            <p className="text-gray-600">All event cards are placed face down in a stack. All other cards (stories, incentives, and team cards) are shuffled and placed face down in a separate draw pile.</p>
          </section>
        </div>
      </div>
  );
};