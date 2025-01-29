export const TroubleshootingTab = () => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md space-y-6">
      <h2 className="text-2xl font-semibold mb-6 pl-4">Die Pitches</h2>
      
      <img 
        src="/lovable-uploads/4ff67390-89ef-495a-9f61-a68c580a21e9.png"
        alt="Pitch Runde Übersicht"
        className="w-full mb-8"
      />
      
      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-semibold mb-4 pl-4">Pitch-Runden durchführen</h3>
          <p className="text-gray-600 mb-6">
            Innerhalb eines Sprints können mehrere Pitch-Runden gespielt werden. Hierbei kann die neu aufgedeckte Pitch-Karte in der Tischmitte gewonnen werden (Feature, Incentive oder Teamkarte).
          </p>

          <div className="space-y-6">
            <div className="border-b pb-4">
              <h4 className="font-semibold mb-2">Pitch starten</h4>
              <p className="text-gray-600">
                Die oberste Karte vom Stapel wird aufgedeckt. Den Wert der Karten müssen die Spieler erreichen, um sie zu gewinnen:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 text-gray-600">
                <li>Bei einer Feature-Karte sind es die abgebildeten Siegpunkte.</li>
                <li>Bei einer Teamkarte wird der Wert direkt nach dem Aufdecken durch Würfeln mit der Stärke (Anzahl der Würfel samt Bonus) ermittelt.</li>
                <li>Bei einer Incentive-Karte ist der Bonus der Karte gleichzeitig der zu erreichende Wert.</li>
              </ul>
            </div>

            <div className="border-b pb-4">
              <h4 className="font-semibold mb-2">Pitchen oder Passen</h4>
              <p className="text-gray-600">
                Der Spieler mit dem lustigsten T-Shirt erhält die Startspieler-Karte (First Mover) und muss als erster entscheiden, ob. Reihum kann jeder Spieler entweder passen oder mit seinen Teamkarten pitchen, um die ausliegende Karte für sich zu gewinnen. Dazu werden eine oder mehrere Teamkarten von der Hand verdeckt ausgelegt.
              </p>
              <p className="text-gray-600 mt-4 bg-gray-50 p-4 rounded">
                <strong>Beispiel:</strong> Vom Nachziehstapel wird eine blaue Feature-Karte mit dem Wert 13 aufgedeckt, was bedeutet, dass man 13 Würfelpunkte erreichen muss. Die Spieler überlegen nun reihum, ob sie auf diese Karte bieten (pitchen) oder passen.
                Spieler A legt seinen CTO mit Skill-Level-3 verdeckt in die Tischmitte. Spieler B will sein Team für spätere Pitch-Runden zusammenhalten und passt daher. Spieler C will Spieler A die Feature-Karte nicht kampflos überlassen und steigt daher ebenfalls ein, indem er verdeckt zwei Teamkarten mit Skill-Level-3 und 1 legt.
              </p>
            </div>

            <div className="border-b pb-4">
              <h4 className="font-semibold mb-2">Teamkarten aufdecken</h4>
              <p className="text-gray-600">
                Sobald jeder Spieler seine Wahl getroffen hat (passen oder pitchen) werden die ausgelegten Teamkarten aller Spieler im Pitch aufgedeckt.
              </p>
              <p className="text-gray-600">
               <strong>Beispiel:</strong> Nachdem nun jeder Spieler seine Wahl getroffen hat (passen oder pitchen), werden die ausgelegten Teamkarten aufgedeckt. Spieler A stehen 3 Würfel zur Verfügung.
              </p>
            </div>

            <div className="border-b pb-4">
              <h4 className="font-semibold mb-2">Ereigniskarten spielen</h4>
              <p className="text-gray-600">
                Nun können die Spieler im Pitch die Event-Karten von (ausgehend vom Startspieler) vor dem Würfeln gespielt werden. Die Effekte werden sofort ausgeführt. Es dürfen reihum beliebig viele Event-Karten gelegt werden. Event-Karten können nicht gegen die Pitch-Karte in der Tischmitte gespielt werden, um diese zu verändern.
              </p>
              <p className="text-gray-600 mt-4 bg-gray-50 p-4 rounded">
               <strong>Beispiel:</strong> Um seine Chancen zu verbessern (immerhin hat Spieler C 4 Würfel), entschließt sich Spieler A dazu, eine Event-Karte von seiner Hand auszuspielen. Er legt "Guter Rat", wodurch er ein weiteres Teammitglied von seinen Handkarten dem Pitch hinzufügen darf. Er wählt seinen Skill-Level-2 Entwickler, so dass er im Kräfteverhältnis vorne liegt. Doch auch Spieler C legt eine Event-Karte, welche ihm die Verwendung eines zusätzlichen Würfels ermöglicht.
                Spieler A will dies unbedingt verhindern und spielt eine weitere Event-Karte mit dem Zauberstab-Symbol aus. Dadurch hebt er den Effekt der letzten Event-Karte von Spieler C auf. Dieser darf also weiterhin nur mit 4 Würfeln pitchen.
                Spieler C könnte nun seinerseits wieder eine Event-Karte spielen, hat jedoch keine geeignete und passt daher. Spieler A könnte noch weitere Event-Karten legen, passt aber ebenfalls.
              </p>
            </div>

            <div className="border-b pb-4">
              <h4 className="font-semibold mb-2">Würfeln</h4>
              <p className="text-gray-600">
                Jeder Spieler würfelt mit einer Anzahl an Würfeln gemäß dem aufsummierten Skill-Level seiner Teamkarten (z.B. CTO 3 Würfel + Noob 1 Würfel = 4 Würfel).
              </p>
            </div>

            <div className="border-b pb-4">
              <h4 className="font-semibold mb-2">Incentives einsetzen</h4>
              <p className="text-gray-600">
                Jeder Spieler kann seine unverbrauchten Incentive-Karten einsetzen, um sein Würfelergebnis zu verbessern. Es dürfen reihum beliebig viele Incentive-Karten gelegt werden.
              </p>
              <p className="text-gray-600 mt-4 bg-gray-50 p-4 rounded">
                <strong>Beispiel:</strong> Ein Spieler würfelt mit 3 Würfeln seiner Teamkarte und erzielt 3+4+6 = 13 Punkte. Ein Mitspieler würfelt ebenfalls 13 Punkte. Nun setzt der Spieler sein Incentive "freie Massagen" ein, das ihm zusätzlich für diesen Pitch 3 Punkte einbringt und er gewinnt. Für den Rest des Sprints ist das Incentive nicht mehr nutzbar.
              </p>
            </div>

            <div className="border-b pb-4">
              <h4 className="font-semibold mb-2">Gewinner ermitteln</h4>
              <p className="text-gray-600">
                Auf das jeweilige Würfelergebnis werden Bonuspunkte aus Incentive- und Event-Karten angewendet. Der Spieler mit der höchsten Gesamtaugenzahl gewinnt die Karte, sofern deren Mindestwert erreicht wurde. Bei Gleichstand wird neu geworfen (Ereignis- und Incentive-Effekte bleiben erhalten).
              </p>
              <p className="text-gray-600 mt-4 bg-gray-50 p-4 rounded">
               <strong>Beispiel:</strong> Nun wird geworfen. Spieler A erzielt mit seinen 5 Würfeln ein Ergebnis von 18 und addiert den Wert seiner Incentive-Karte von 2 = 20 Gesamtpunkte. Spieler C erwürfelt nur eine 10 und addiert ebenfalls zwei Incentive-Bonuspunkte = 12 Gesamtpunkte. Spieler A hat somit diesen Pitch gewonnen und erhält die neue Feature-Karte.
              </p>
            </div>

            <div className="border-b pb-4">
              <h4 className="font-semibold mb-2">Karten zur Seite legen</h4>
              <p className="text-gray-600">
                Alle eingesetzten Event-Karten kommen auf den Ablagestapel.
                Außerdem legt jeder Spieler seine eingesetzten Teamkarten verdeckt vor sich ab. Der Gewinner legt die neu gewonnene Karte ebenfalls dazu. Alle abgelegten oder gewonnenen Karten bleiben bis zum Sprint-Ende verdeckt liegen und können erst im nächsten Sprint, nicht aber in den direkt folgenden Pitch-Runden verwendet werden.
              </p>
              <p className="text-gray-600 mt-4 bg-gray-50 p-4 rounded">
                <strong>Beispiel:</strong> Spieler A welche er zusammen mit seinen eingesetzten Teamkarten bis zum Sprint-Ende verdeckt vor sich ablegt. Diese Karten sind für weitere Pitch-Runden verbraucht und können vorerst nicht mehr eingesetzt werden.
                Dies gilt auch für die Teamkarten von Spieler C, obwohl er die Pitch-Karte nicht gewonnen hat. Alle gespielten Event-Karten kommen auf den Ablagestapel.
              </p>
            </div>

            <div className="border-b pb-4">
              <h4 className="font-semibold mb-2">Startspieler wechseln</h4>
              <p className="text-gray-600">
                Nach jeder Pitch-Runde wechselt der Startspieler im Uhrzeigersinn und eine neue Karte vom Nachziehstapel wird aufgedeckt. Es folgt der nächste Pitch nach obigem Ablauf mit den übrigen Handkarten.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 pl-4">Ende des Spiels</h3>
          <p className="text-gray-600">
            Das Spiel endet, sobald ein Spieler blaue Feature-Karten im Gesamtwert der vereinbarten Siegpunkte (oder mehr) besitzt und damit gewonnen hat.
          </p>
        </section>
      </div>
    </div>
  );
};
