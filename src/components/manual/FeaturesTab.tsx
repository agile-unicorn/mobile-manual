import { Timer, Users } from "lucide-react";

export const FeaturesTab = () => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md space-y-6">
      <h2 className="text-2xl font-semibold mb-6">Der Sprint</h2>
      
      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-semibold mb-3">Spielablauf</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-2">Entwicklungsphase</h4>
              <p className="text-gray-600">Karten ausspielen und Produkt entwickeln</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-2">Ereignisphase</h4>
              <p className="text-gray-600">Ereigniskarte ziehen und ausführen</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-2">Aktionsphase</h4>
              <p className="text-gray-600">Spezialfähigkeiten einsetzen</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-2">Investorenphase</h4>
              <p className="text-gray-600">Investoren überzeugen und Kapital sammeln</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-3">Spielregeln</h3>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <Timer className="w-5 h-5 text-blue-500 mt-1" />
              <div>
                <h4 className="font-semibold">Rundenablauf</h4>
                <p className="text-gray-600">Jeder Spieler führt nacheinander seine Aktionen aus</p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <Users className="w-5 h-5 text-blue-500 mt-1" />
              <div>
                <h4 className="font-semibold">Interaktion</h4>
                <p className="text-gray-600">Spieler können miteinander handeln und kooperieren</p>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};