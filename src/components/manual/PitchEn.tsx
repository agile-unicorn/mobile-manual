export const PitchEn = () => {
  return (
      <div className="bg-white rounded-lg p-8 shadow-md space-y-6">
        <h2 className="text-2xl font-semibold mb-6">The Pitches</h2>

        <img
            src="/lovable-uploads/pitch.png"
            alt="Pitch Round Overview"
            className="w-full mb-8"
        />

        <div className="space-y-8">
          <section>
            <h3 className="text-xl font-semibold mb-4">Conducting Pitch Rounds</h3>
            <p className="text-gray-600 mb-6">
              Within a sprint, several pitch rounds can be played. Here, the newly revealed pitch card in the center of the table can be won (story, incentive, or team card).
            </p>

            <div className="space-y-6">
              <div className="border-b pb-4">
                <h4 className="font-semibold mb-2">Starting the Pitch</h4>
                <p className="text-gray-600">
                  The first card of the sprint backlog is placed in the center of the table. It is the card being pitched for. To win it, players must reach or exceed its value.
                </p>
                <ul className="list-disc list-inside ml-4 mt-2 text-gray-600">
                  <li>For a story card, it is the depicted victory points.</li>
                  <li>For a team card, <strong>the value is determined by rolling</strong> with the strength (number of dice plus modifiers) as soon as it is placed in the center of the table.</li>
                  <li>For an incentive card, the bonus of the card is also the value to be reached.</li>
                </ul>
              </div>

              <div className="border-b pb-4">
                <h4 className="font-semibold mb-2">Pitch or Pass</h4>
                <p className="text-gray-600">
                  The player with the funniest T-shirt receives the start player card (First Mover) and begins. Each player can either pass, then no cards are played, or pitch with their team cards. To do this, one or more team cards are played face down.
                </p>
                <p className="text-gray-600 mt-4 bg-gray-100 p-4 rounded">
                  <strong>Example:</strong> The next card in the sprint backlog is a blue story card with a value of 13, meaning 13 dice points must be reached. Players now take turns deciding whether to bid (pitch) on this card or pass.
                  Player A places their CTO (strength 3 dice) face down in the center of the table. Player B wants to save their team for later pitch rounds and passes. Player C does not want to let player A win the story card without a fight and also joins in,
                  placing two team cards face down (with strength 3 and 1 dice).
                </p>
              </div>

              <div className="border-b pb-4">
                <h4 className="font-semibold mb-2">Reveal Team Cards</h4>
                <p className="text-gray-600">
                  Once each player has decided whether to pass or pitch, the played team cards of all players are revealed.
                </p>
                <p className="text-gray-600 mt-4 bg-gray-100 p-4 rounded">
                  <strong>Example:</strong> Player A has 3 dice available, as they used their CTO. Player C now has 4 dice available, as they used two cards of corresponding strength.
                </p>
              </div>

              <div className="border-b pb-4">
                <h4 className="font-semibold mb-2">Play Event Cards</h4>
                <p className="text-gray-600">
                  Now, players in the pitch (starting with the start player) can play additional event cards before rolling. The effects are executed immediately. Any number of event cards can be played simultaneously, even on different players.
                  Event cards cannot be played against the pitch card in the center of the table to change it. Whenever a player plays an event card, other players in the pitch can react and play their own cards until all have passed.
                </p>
                <p className="text-gray-600 mt-4 bg-gray-100 p-4 rounded">
                  <strong>Example:</strong> To improve their chances (after all, player C has 4 dice), player A decides to play an event card from their hand. They play "Quick Scrum", allowing them to add another team member from their hand cards to the pitch.
                  They choose their strength 2 developer, putting them ahead in strength. However, player C plays an event card that allows them to use an additional die.
                  Player A wants to prevent this and plays another event card with the wand symbol, canceling the effect of player C's last event card. Player C can now only pitch with 4 dice.
                  Player C could play another event card but has none suitable and passes. Player A could play more event cards but also passes.
                </p>
              </div>

              <div className="border-b pb-4">
                <h4 className="font-semibold mb-2">Rolling Dice</h4>
                <p className="text-gray-600">
                  Each player rolls a number of dice corresponding to the summed strength of their team cards (e.g., CTO 3 dice + noob 1 die = 4 dice).
                </p>
              </div>

              <div className="border-b pb-4">
                <h4 className="font-semibold mb-2">Using Incentives</h4>
                <p className="text-gray-600">
                  Each player (starting with the start player) can use their unused incentive cards to improve their dice result. Any number of incentive cards can be used in turn. However, they are used up until the end of the sprint.
                </p>
                <p className="text-gray-600 mt-4 bg-gray-100 p-4 rounded">
                  <strong>Example:</strong> Both players rolled 13 points. Now, player A must decide first whether to use their unused incentive "free massages", which gives them +3 points for this pitch.
                </p>
              </div>

              <div className="border-b pb-4">
                <h4 className="font-semibold mb-2">Determining the Winner</h4>
                <p className="text-gray-600">
                  Bonus points from incentive and event card effects are applied to the respective dice result. <strong>The player with the highest total wins the card</strong>, provided the minimum value was reached. In case of a tie, a new roll is made (event and incentive effects remain). If the minimum value is not reached, the pitch card goes to the discard pile.
                </p>
                <p className="text-gray-600 mt-4 bg-gray-100 p-4 rounded">
                  <strong>Example:</strong> Now, the dice are rolled. Player A scores 15 with their 5 dice. Player C rolls a 17. Player A must decide first whether to use their unused incentive "free massages", which gives them +3 points for this pitch. Since player C has no incentive card left, player A uses their incentive card and wins this pitch with 18 points.
                </p>
              </div>

              <div className="border-b pb-4">
                <h4 className="font-semibold mb-2">Set Cards Aside</h4>
                <p className="text-gray-600">
                  All used event cards go to the discard pile.
                  Additionally, each player places their used team cards face down in front of them. The winner also places the newly won card there. All discarded or won cards remain face down until the end of the sprint and cannot be used in the following pitch rounds.
                </p>
                <p className="text-gray-600 mt-4 bg-gray-100 p-4 rounded">
                  <strong>Example:</strong> Player A receives the story card, which they place face down with their used team cards until the end of the sprint. These cards are used up for further pitch rounds and cannot be used for now.
                  This also applies to player C's team cards, even though they did not win the pitch card. All played event cards go to the discard pile.
                </p>
              </div>

              <div className="border-b pb-4">
                <h4 className="font-semibold mb-2">Change Start Player</h4>
                <p className="text-gray-600">
                  After each pitch round, the start player changes clockwise, the next pitch card is moved to the center of the table, and the next, previously hidden card in the sprint backlog is revealed. The next pitch follows the above procedure with the remaining hand cards.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-4">End of the Game</h3>
            <p className="text-gray-600">
              The game ends when a player has blue story victory point cards totaling the agreed victory points (or more) at the end of a sprint and thus wins.
            </p>
          </section>
        </div>
      </div>
  );
};