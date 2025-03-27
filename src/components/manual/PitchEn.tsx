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
            <h3 className="text-xl font-semibold mb-4">Conduct Pitch Rounds</h3>
            <p className="text-gray-600 mb-6">
              Within a sprint, several pitch rounds can be played. In these rounds the newly revealed pitch card in the center can be won (story, incentive or team card).
            </p>

            <div className="space-y-6">
              <div className="border-b pb-4">
                <h4 className="font-semibold mb-2">Start Pitch</h4>
                <p className="text-gray-600">
                  The first card of the sprint backlog is placed in the center of the table. This is the card that is pitched for. To win it, players must reach or exceed its value.
                </p>
                <ul className="list-disc list-inside ml-4 mt-2 text-gray-600">
                  <li>For a story card, the depicted victory points are used.</li>
                  <li>
                    For a team card, its value is determined by rolling according to its strength (number of dice including modifiers) when it is placed in the center.
                  </li>
                  <li>For an incentive card, the bonus of the card is simultaneously the target value.</li>
                </ul>
              </div>

              <div className="border-b pb-4">
                <h4 className="font-semibold mb-2">Pitch or Pass</h4>
                <p className="text-gray-600">
                  The player with the funniest t-shirt receives the starting player card (First Mover) and begins. In turn, each player can either pass, in which case no cards are played, or pitch using their team cards by placing one or more team cards from their hand face down.
                </p>
                <p className="text-gray-600 mt-4 bg-gray-100 p-4 rounded">
                  <strong>Example:</strong> The next card in the sprint backlog is a blue story card with a value of 13, meaning that 13 dice points must be reached. Players then decide in turn whether to bid (pitch) on this card or pass.
                  Player A places his CTO (strength 3 dice) face down in the center. Player B, wanting to save his team for later rounds, passes. Player C does not want to let Player A win the story card without a fight and also pitches by placing two team cards face down (with strengths of 3 and 1 die).
                </p>
              </div>

              <div className="border-b pb-4">
                <h4 className="font-semibold mb-2">Reveal Team Cards</h4>
                <p className="text-gray-600">
                  Once each player has decided whether to pass or pitch, all played team cards are revealed.
                </p>
                <p className="text-gray-600 mt-4 bg-gray-100 p-4 rounded">
                  <strong>Example:</strong> Player A has 3 dice available because he used his CTO. Player C now has 4 dice available as he played two cards with the corresponding strengths.
                </p>
              </div>

              <div className="border-b pb-4">
                <h4 className="font-semibold mb-2">Play Event Cards</h4>
                <p className="text-gray-600">
                  Now, starting with the starting player, players in the pitch may play additional event cards before rolling their dice. The effects take place immediately. Any number of event cards may be played at the same time, even targeting different players.
                  Event cards cannot be used to modify the pitch card in the center. Whenever a player plays an event card, the other players in the pitch may react and play additional cards until everyone has passed.
                </p>
                <p className="text-gray-600 mt-4 bg-gray-100 p-4 rounded">
                  <strong>Example:</strong> To improve his chances (since Player C has 4 dice), Player A decides to play an event card from his hand. He plays "Quick Scrum", which allows him to add another team member from his hand to the pitch.
                  He selects his strength 2 developer to gain an advantage. However, Player C also plays an event card that grants him an extra die. Player A then uses another event card with a magic wand symbol to cancel the effect of Player C&apos;s card. As a result, Player C continues pitching with only 4 dice.
                  Player C might play an event card in response but has none suitable and passes. Eventually, Player A also passes.
                </p>
              </div>

              <div className="border-b pb-4">
                <h4 className="font-semibold mb-2">Roll Dice</h4>
                <p className="text-gray-600">
                  Each player rolls a number of dice corresponding to the total strength of his team cards (e.g., CTO 3 dice + Noob 1 die = 4 dice).
                </p>
              </div>

              <div className="border-b pb-4">
                <h4 className="font-semibold mb-2">Use Incentives and Determine Winner</h4>
                <p className="text-gray-600">
                  Each player, starting with the starting player, may use their unused incentive cards to improve their dice result. Any number of incentive cards may be used. Whenever a player plays an incentive card, the other players may respond by playing additional cards until everyone has passed. These cards, however, are then considered used for the remainder of the sprint.
                </p>
                <p className="text-gray-600 mt-4">
                  Bonuses from incentive and event card effects are applied to the dice result. <strong>The player with the highest total wins the card</strong> provided the target value is reached. In case of a tie, dice are rolled again (while event and incentive effects remain). If the target value is not reached, the pitch card is moved to the discard pile.
                </p>
                <p className="text-gray-600 mt-4 bg-gray-100 p-4 rounded">
                  <strong>Example:</strong> Dice are rolled. Player A scores a total of 15 with his 5 dice.
                  Player C rolls a 17. Player A must decide first whether to use his unused incentive "Free Massages," which provides an additional 3 points for this pitch.
                  Since Player C has no incentive cards left, Player A uses his incentive card and wins the pitch with 18 points.
                </p>
              </div>

              <div className="border-b pb-4">
                <h4 className="font-semibold mb-2">Set Aside Cards</h4>
                <p className="text-gray-600">
                  All played event cards are set aside in a separate pile.
                  Additionally, each player places the team cards they used face down in front of themselves. The winner also adds the newly won card to their pile.
                  All set aside or won cards remain face down until the end of the sprint and cannot be used again until the next sprint, and not in the immediately following pitch rounds.
                </p>
                <p className="text-gray-600 mt-4 bg-gray-100 p-4 rounded">
                  <strong>Example:</strong> Player A receives the story card, which he places face down along with his played team cards until the sprint ends.
                  These cards are considered used for the current sprint. This also applies to Player C&apos;s team cards even though he did not win the pitch card. All played event cards go to the discard pile.
                </p>
              </div>

              <div className="border-b pb-4">
                <h4 className="font-semibold mb-2">Change Starting Player</h4>
                <p className="text-gray-600">
                  After each pitch round, the starting player rotates clockwise, the next pitch card is moved to the center, and the next, previously face-down card in the sprint backlog is revealed.
                  The next pitch round then follows according to the above procedure using the remaining hand cards.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-4">End of the Game</h3>
            <p className="text-gray-600">
              The game ends as soon as a player possesses blue story victory point cards totaling the agreed victory points (or more) at the end of a sprint, thereby winning the game.
            </p>
          </section>
        </div>
      </div>
  );
};