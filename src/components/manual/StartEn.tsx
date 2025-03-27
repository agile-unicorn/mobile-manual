import { ManualCard } from "@/components/ManualCard";

export const StartEn = () => {
  return (
      <>
        <h1 className="text-4xl font-bold text-primary mb-8">Agile Unicorn Rulebook</h1>

        <div className="w-full mt-6">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Game Objective</h2>
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-1">
                <img
                    src="/lovable-uploads/74cf2d65-fe10-4f21-af77-58e52824a08c.png"
                    alt="Lumberjack character"
                    className="float-right ml-4 mb-4 w-64 h-auto hidden"
                />
                <p className="text-gray-600">
                  <strong>Survive the IT chaos with your startup and be the first to win the most victory points.</strong>
                </p>
                <p className="text-gray-600">
                  To beat your opponents, you must effectively use the potential of your development team in duels for new stories and the best minds. Unfortunately, things rarely go as planned, as the other players will use all means to secure the best stories for themselves.
                </p>
                <p className="text-gray-600 mt-4 font-bold">
                  The winner is the player who first reaches the agreed number of victory points.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-6 mt-4">
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-4">Game Process</h2>
                <p className="text-gray-600 mb-6">
                  The game consists of several rounds (sprints): A sprint consists of up to 5 duel rounds (pitches). During a sprint, players try to outperform each other by playing their team and event cards to win the most valuable new cards for their startup.
                </p>
              </div>
            </div>
            <p className="text-gray-600 bg-gray-200 p-4 rounded">
              <strong>TLDR:</strong> Team members are secretly assigned to cards that grant victory points. The team members have different strengths (dice). Effects can be played before and after rolling to gain an advantage. The team with the highest dice result wins the story victory point card.
            </p>
          </div>
        </div>

        <h2 className="text-4xl font-bold text-primary mt-16 mb-6 pl-4">The Cards</h2>
        <p className="text-gray-600 mb-8 pl-4">
          There are four different types of cards. They are differentiated by their card color. For the rules, the card texts are not important; only the numbers and symbols in the top left matter.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ManualCard
              title="Stories (Victory Points)"
              description="Stories provide 3 to 20 victory points corresponding to the number in the top left of the card."
              className="relative"
          >
            <div className="relative">
              <img
                  src="/lovable-uploads/940f3730-58d6-4602-bc18-31c9c7114d59.png"
                  alt="Story card example"
                  className="float-right ml-6 mb-2 w-1/3 h-auto"
              />
              Whether a story can be successfully executed is determined by rolling against its value. On success, the player with the highest dice result wins the story card and displays it face up at the end of the sprint along with their other won story cards.
            </div>
          </ManualCard>
          <ManualCard
              title="Team Members"
              description="You can only win cards with team members. Their strength is indicated by dice and possibly a bonus or penalty in the top left."
              className="relative"
          >
            <img
                src="/lovable-uploads/2a69e587-9129-40c7-b233-245d01f1ac7d.png"
                alt="The Hammer card"
                className="float-right ml-2 mb-2 w-1/3 h-auto"
            />
            <p>Your team can consist of a maximum of 5 members. If a 6th member is won, the player must dismiss one of their choice and place it in the draw pile.</p>
            <p>The team members remain in hand until used (once per sprint).</p>
          </ManualCard>

          <ManualCard
              title="Incentives"
              description="Incentives can be used after rolling to improve the result."
          >
            <img
                src="/lovable-uploads/b75da821-ce58-4b2e-9be4-a4b871e66267.png"
                alt="Table football and stimulant"
                className="float-right ml-2 mb-2 w-1/3 h-auto"
            />
            <p>
              The attractiveness of your startup is enhanced by perks that motivate your team members to perform at their best.<br/>
              Each card can be used once per sprint after rolling to improve the dice result, starting with the starting player.
              After being used, they are turned face down until the end of the sprint.
            </p>
          </ManualCard>

          <ManualCard
              title="Events"
              description="Event cards have a one-time effect before rolling and can only be played by players against other players."
          >
            <img
                src="/lovable-uploads/6099a104-34b4-4501-bee6-c3dad95a8784.png"
                alt="Server outage event card"
                className="float-right ml-2 mb-2 w-1/3 h-auto"
            />
            Event cards have no hand limit and can be collected over several rounds.
            Once played, they are consumed and placed in the event card pile.
            A player who passes cannot use event cards. Each card can be played against any player in the pitch (who has not passed), including against oneself.
            They cannot be used to modify the pitch card in the center.
          </ManualCard>
        </div>

        <h2 className="text-4xl font-bold text-primary mt-16 mb-6 pl-4">Symbols</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <ManualCard
              title="Point Value"
              description=""
              className="bg-white"
          >
            <img
                src="/lovable-uploads/df031a76-2250-4d8c-a810-f9e021ad6682.png"
                alt="Plus one symbol"
                className="float-left mr-2 w-1/3 h-auto"
            />
            Bonus or penalty to the rolled result.
          </ManualCard>

          <ManualCard
              title="Skip"
              description=""
              className="bg-white"
          >
            <img
                src="/lovable-uploads/5786521a-1242-4e08-a8ff-7575299baf61.png"
                alt="Skip symbol"
                className="float-left mr-2 w-1/3 h-auto"
            />
            The player must immediately return all played team cards to their hand. The team cards can be used in the next pitch, but the played event cards are lost.
          </ManualCard>

          <ManualCard
              title="Magic Wand"
              description=""
              className="bg-white"
          >
            <img
                src="/lovable-uploads/b464c24b-351d-4585-9dc8-e7fb0de7ef89.png"
                alt="Magic wand symbol"
                className="float-left mr-2 w-1/3 h-auto"
            />
            Negates the effect of another event card once. This card can be played at any time, even against other magic wand cards.
          </ManualCard>

          <ManualCard
              title="Dice"
              description="plus (more) or minus (less)"
              className="bg-white"
          >
            <img
                src="/lovable-uploads/4cf6a244-f16f-41b2-8b9a-6b961d705512.png"
                alt="Dice symbol"
                className="float-left mr-2 w-1/3 h-auto"
            />
            Temporarily adds or subtracts the shown dice during the pitch.
          </ManualCard>

          <ManualCard
              title="Add Team Member"
              description="Draw one team member"
              className="bg-white"
          >
            <img
                src="/lovable-uploads/83fa8356-7b6d-4a9e-80f3-62fce83f081b.png"
                alt="Add team member symbol"
                className="float-left mr-2 w-1/3 h-auto"
            />
            With a plus, the targeted player must play an additional team card from their hand.
          </ManualCard>

          <ManualCard
              title="Remove Team Member"
              description="Remove one team member"
              className="bg-white"
          >
            <img
                src="/lovable-uploads/b72ac29e-2735-436c-8840-a6354f4a0f87.png"
                alt="Remove team member symbol"
                className="float-left mr-2 w-1/3 h-auto"
            />
            With a minus, one team card of the targeted player must be removed. This team card is lost and cannot be used again until the next sprint.
          </ManualCard>
        </div>

        <div className="mt-16 text-center text-gray-600 border-t pt-8">
          Made with &#x2764; in Bonn and Hamburg. Copyright Agile Unicorn Spieleverlag 2025
          <div className="mt-2">
            <a
                href="https://agile-unicorn.com/impressum/"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
            >
              Imprint
            </a>
          </div>
        </div>
      </>
  );
};