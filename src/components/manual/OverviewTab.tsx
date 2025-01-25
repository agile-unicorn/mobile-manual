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
                className="float-left mr-4 mb-4 w-64 h-auto object-contain"
              />
              <p className="text-gray-600">
                Du bist CEO eines aufstrebenden IT-Startups und versuchst schneller als die Konkurrenz den ganz großen Wurf zu landen. Um deine Mitspieler auszustechen, muss es gelingen, das Potenzial deines Entwicklerteams im Duell um neue Features und die besten Köpfe optimal einzusetzen. Doch leider läuft selten alles so wie geplant, denn auch die anderen Spieler werden zu allen Mitteln greifen, um die besten Features für sich zu gewinnen. 
              </p>
              <p className="text-gray-600 mt-4">
                Sieger ist, wer zuerst die vereinbarte Anzahl an Siegpunkten erreicht hat.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-4xl font-bold text-primary mb-8">Die Karten</h2>
      <p>
        Es gibt vier verschiedene Arten von Karten. Sie unterscheiden sich durch ihre Kartenfarbe. Für die Regeln sind die Kartentexte nicht relevant, wichtig sind die Zahlen und Symbole oben links.
      </p>
        
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ManualCard
          title="Feature-Karten liefern die Siegpunkte"
          description="Features liefern 3 bis 20 Siegpunkte, die der Zahl oben links auf der Karte entsprechen. Ob ein Feature erfolgreich umgesetzt werden kann, wird durch Würfeln gegen den Wert bestimmt. Bei Erfolg erhält der Spieler mit dem höchsten Würfelergebnis die Feature-Karte und legt diese offen neben den anderen gewonnenen Feature-Karten vor sich aus. "
          className="relative"
        >
          <img 
            src="/lovable-uploads/940f3730-58d6-4602-bc18-31c9c7114d59.png"
            alt="Feature card example"
            className="absolute top-2 right-2 w-24 h-auto"
          />
        </ManualCard>
        <ManualCard
          title="Teammitglieder"
          description="45-60 Minuten"
        />
        <ManualCard
          title="Spielaufbau"
          description="Vorbereitung und Materialien"
        />
        <ManualCard
          title="Pitches"
          description="Präsentation und Bewertung"
        />
      </div>
    </>
  );
};