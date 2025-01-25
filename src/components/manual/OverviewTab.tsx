import { ManualCard } from "@/components/ManualCard";

export const OverviewTab = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-primary mb-8">Agile Unicorn Regelwerk</h1>
      
      <div className="w-full mt-6">
        <div className="bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Spielziel</h2>
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex-1">
              <img 
                src="/lovable-uploads/74cf2d65-fe10-4f21-af77-58e52824a08c.png" 
                alt="CEO presenting chart" 
                className="float-right ml-4 mb-4 w-64 h-auto object-contain"
              />
              <p className="text-gray-600">
                Du bist CEO eines aufstrebenden IT-Startups und versuchst schneller als die Konkurrenz den ganz großen Wurf zu landen. Um deine Mitspieler auszustechen, muss es gelingen, das Potenzial deines Entwicklerteams im Duell um neue Features und die besten Köpfe optimal einzusetzen. Doch leider läuft selten alles so wie geplant, denn auch die anderen Spieler werden zu allen Mitteln greifen, um die besten Features für sich zu gewinnen. 
              </p>
              <p className="text-gray-600 mt-4 font-bold">
                Sieger ist, wer zuerst die vereinbarte Anzahl an Siegpunkten erreicht hat.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-4xl font-bold text-primary mt-16 mb-6">Die Karten</h2>
      <p className="text-gray-600 mb-8">
        Es gibt vier verschiedene Arten von Karten. Sie unterscheiden sich durch ihre Kartenfarbe. Für die Regeln sind die Kartentexte nicht relevant, wichtig sind die Zahlen und Symbole oben links.
      </p>
        
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ManualCard
          title="Features"
          description="Feature-Karten liefern die Siegpunkte."
          className="relative">
            <div className="relative">
              <img 
                src="/lovable-uploads/940f3730-58d6-4602-bc18-31c9c7114d59.png"
                alt="Feature card example"
                className="float-right ml-6 mb-2 w-24 h-auto"
              />
              Features liefern 3 bis 20 Siegpunkte, die der Zahl oben links auf der Karte entsprechen. Ob ein Feature erfolgreich umgesetzt werden kann, wird durch Würfeln gegen den Wert bestimmt. Bei Erfolg erhält der Spieler mit dem höchsten Würfelergebnis die Feature-Karte und legt diese offen neben den anderen gewonnenen Feature-Karten vor sich aus.
            </div>
          </ManualCard>
        <ManualCard
          title="Teammitglieder"
          description="Nur mit deinen Teammitgliedern kannst du die notwendigen Siegpunkte erringen, indem du sie auf Features ansetzt."
          className="relative"
        >
          <img 
            src="/lovable-uploads/2a69e587-9129-40c7-b233-245d01f1ac7d.png"
            alt="Der Hammer card"
            className="float-right ml-2 mb-2 w-24 h-auto"
          />
          <p>Die Teammitglieder bleiben nicht sichtbar für andere auf der Hand, bis sie eingesetzt werden. Die Stärke wird oben links durch eine Anzahl der Würfel und eventuelle Modifikatoren angezeigt.  Mit diesen Würfeln und den Modifikatoren (Bonus oder Malus)  kann um neue Feature-Karten gewürfelt werden. </p>

          <p>Dein Team  darf maximal aus 5 Mitgliedern bestehen, um effektiv arbeiten zu können. Wenn ein 6. Mitglied gewonnen wird, muss der Spieler ein anderes Mitglied seiner Wahl feuern (unter den Kartenstapel legen).</p>
        </ManualCard>

        <ManualCard
          title="Incentives"
          description="Incentives können nach dem Würfeln eingesetzt werden, um das Ergebnis zu verbessern."
        >
          <img 
            src="/lovable-uploads/b75da821-ce58-4b2e-9be4-a4b871e66267.png"
            alt="Tischkicker und Mate"
            className="float-right ml-2 mb-2 w-24 h-auto"
          />
          Die Attraktivität deines Startups wird durch Annehmlichkeiten gesteigert, mit denen die Teammitglieder zu Höchstleistungen motiviert werden sollen. Sie können einmal pro Sprint nach dem Würfeln eingesetzt werden, um das Würfelergebnis zu verbessern. Incentive-Karten werden nach Erhalt immer offen ausgelegt und nach der Nutzung bis zum Sprintende umgedreht.
        </ManualCard>
        
        <ManualCard
          title="Ereignisse"
          description="Ereigniskarten haben einen einmaligen Effekt vor dem Würfeln und können nur von Spielern gegen andere Spieler ausgespielt werden."
        >
          <img 
            src="/lovable-uploads/6099a104-34b4-4501-bee6-c3dad95a8784.png"
            alt="Serverausfall Ereigniskarte"
            className="float-right ml-2 mb-2 w-24 h-auto"
          />
          Es gibt kein Limit von Event-Karten auf der Hand und sie können über mehrere Runden gesammelt werden. Nach dem Ausspielen sind sie verbraucht und werden auf einem Stapel abgelegt. 

          Wer passt, kann keine Ereignisse einsetzen. Jede Karte kann gegen jeden Spieler im Pitch (die nicht gepasst haben) gespielt werden, inklusive sich selbst. Sie können nicht gegen die Pitch-Karte (s.u.)  in der Tischmitte gespielt werden, um diese zu verändern.
        </ManualCard>
      </div>
    </>
  );
};