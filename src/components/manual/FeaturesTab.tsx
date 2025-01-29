import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ManualCard } from "../ManualCard";

export const FeaturesTab = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer">
          <ManualCard
            title="Der Sprint"
            description="Lerne alles über den Sprint-Ablauf im Spiel"
          >
            <div className="text-sm text-gray-500">Klicken zum Öffnen</div>
          </ManualCard>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Der Sprint</DialogTitle>
        </DialogHeader>
        
        <div className="bg-white rounded-lg space-y-6">
          <img 
            src="/lovable-uploads/1bc6d452-978e-4c1b-8dba-7a47a93c62ad.png"
            alt="Sprint Übersicht"
            className="w-full mb-8"
          />
          
          <p className="text-gray-600 mb-6">
            Das Spiel läuft über mehrere Sprint-Runden. Während eines Sprints versuchen die Spieler durch Ausspielen ihrer Team- und Event-Karten die Mitspieler in mehreren Duellen (Pitch) zu übertreffen, um möglichst wertvolle neue Karten für das eigene Startup zu gewinnen.
          </p>

          <section>
            <h3 className="text-xl font-semibold mb-3">Der Sprint</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Sprint-Start</h4>
                <p className="text-gray-600">
                  Alle Spieler verfügen über ihr komplettes Team sowie mindestens zwei Eventkarten. Der erste Pitch beginnt, wenn der Startspieler die oberste Karte vom Stapel in die Mitte des Tisches legt. Es folgen dann mehrere Pitches (siehe unten).
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Sprint-Ende</h4>
                <p className="text-gray-600">
                  Der Sprint ist beendet, sobald alle Spieler alle Teamkarten ausgespielt haben oder alle Spieler gepasst haben. Besitzt nur noch ein Spieler ungenutzte Teamkarten auf der Hand, kann er einen (den nächsten) Pitch noch alleine durchführen. Sollte er jedoch passen, ist der Sprint beendet.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Neuer Sprint</h4>
                <p className="text-gray-600">
                  Sämtliche Teamkarten werden wieder aufgenommen, gewonnene Feature- und Incentive-Karten werden offen ausgelegt. Jeder Spieler zieht zwei neue Event-Karten, ungenutzte bleiben auf der Hand und der nächste Startspieler beginnt den neuen Sprint (siehe Punkt 1).
                </p>
              </div>
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
};