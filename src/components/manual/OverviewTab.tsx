import { ManualCard } from "@/components/ManualCard";
import { BookOpen, Users, Timer, Presentation } from "lucide-react";

export const OverviewTab = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-primary mb-8">Agile Unicorn</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ManualCard
          title="Spieler"
          description="3-6 Spieler, ab 16 Jahren"
          icon={Users}
        />
        <ManualCard
          title="Spieldauer"
          description="45-60 Minuten"
          icon={Timer}
        />
        <ManualCard
          title="Spielaufbau"
          description="Vorbereitung und Materialien"
          icon={BookOpen}
        />
        <ManualCard
          title="Pitches"
          description="Präsentation und Bewertung"
          icon={Presentation}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Spielziel</h2>
          <p className="text-gray-600">
            In Agile Unicorn schlüpfen die Spieler in die Rolle von Startup-Gründern. 
            Jeder Spieler entwickelt ein innovatives Produkt und präsentiert es den anderen Spielern. 
            Durch geschicktes Taktieren und kreative Ideen gilt es, das beste Startup zu entwickeln 
            und die meisten Investoren zu überzeugen.
          </p>
        </div>
      </div>
    </>
  );
};