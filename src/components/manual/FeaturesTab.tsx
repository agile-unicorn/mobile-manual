export const FeaturesTab = () => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md space-y-6">
      <h2 className="text-2xl font-semibold mb-6">Der Sprint</h2>
      
      <img 
        src="/lovable-uploads/1bc6d452-978e-4c1b-8dba-7a47a93c62ad.png"
        alt="Sprint Übersicht"
        className="w-full mb-8"
      />
      
      <section>
        <h3 className="text-xl font-semibold mb-3">Sprint Ablauf</h3>
        <p className="text-gray-600 mb-2">Der Sprint ist der zentrale Bestandteil des Spiels, in dem die Spieler ihre Teammitglieder einsetzen, um Features zu entwickeln und Punkte zu sammeln.</p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
          <li>Jeder Spieler wählt seine Teammitglieder aus.</li>
          <li>Die Spieler würfeln, um die Stärke ihrer Teammitglieder zu bestimmen.</li>
          <li>Die Spieler setzen ihre Teammitglieder auf die Features, die sie entwickeln möchten.</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-3">Strategien</h3>
        <p className="text-gray-600 mb-2">Um erfolgreich zu sein, sollten die Spieler strategisch entscheiden, welche Teammitglieder sie einsetzen und wann sie Incentives verwenden.</p>
      </section>
    </div>
  );
};
