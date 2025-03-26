export const Pitchen = () => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md space-y-6">
      <h2 className="text-2xl font-semibold mb-6">Die Pitches</h2>
      
      <img 
        src="/lovable-uploads/pitch.png"
        alt="Pitch Runde Übersicht"
        className="w-full mb-8"
      />
      
      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-semibold mb-4">Pitch-Runden durchführen</h3>
          <p className="text-gray-600 mb-6">
            Innerhalb eines Sprints können mehrere Pitch-Runden gespielt werden. Hierbei kann die neu aufgedeckte Pitch-Karte in der Tischmitte gewonnen werden (Story, Incentive oder Teamkarte).
          </p>

          <div className="space-y-6">
            <div className="border-b pb-4">
              <h4 className="font-semibold mb-2">Pitch starten</h4>
              <p className="text-gray-600">
                Die erste Karte des Sprint-Backlogs wird in die Tischmitte gelegt. Sie ist die Karte, um die gekämpft (gepitcht) wird. Um sie zu gewinnen, müssen die Spieler ihren Wert erreichen oder übertreffen.
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 text-gray-600">
                <li>Bei einer Story-Karte sind es die abgebildeten Siegpunkte.</li>
                <li>Bei einer Teamkarte wird <strong>der Wert durch Würfeln</strong> mit der Stärke (Anzahl der Würfel samt Modifier) ermittelt, sobald sie in die Tischmitte gelegt wird.</li>
                <li>Bei einer Incentive-Karte ist der Bonus der Karte gleichzeitig der zu erreichende Wert.</li>
              </ul>
            </div>

            <div className="border-b pb-4">
              <h4 className="font-semibold mb-2">Pitchen oder Passen</h4>
              <p className="text-gray-600">
                Der Spieler mit dem lustigsten T-Shirt erhält die Startspieler-Karte (First Mover) und beginnt. Reihum kann jeder Spieler entweder passen, dann werden keine Karten ausgelegt, oder mit seinen Teamkarten pitchen. Dazu werden eine oder mehrere Teamkarten von der Hand verdeckt ausgelegt.
              </p>
              <p className="text-gray-600 mt-4 bg-gray-100 p-4 rounded">
                <strong>Beispiel:</strong> Die nächste Karte im Sprint-Backlog ist eine blaue Story-Karte mit dem Wert 13, was bedeutet, dass man 13 Würfelpunkte erreichen muss. Die Spieler überlegen nun reihum, ob sie auf diese Karte bieten (pitchen) oder passen.
                Spieler A legt seinen CTO (Stärke 3 Würfel) verdeckt in die Tischmitte. Spieler B will sein Team für spätere Pitch-Runden zusammenhalten und passt daher. Spieler C will Spieler A die Story-Karte nicht kampflos überlassen und steigt daher ebenfalls ein,
                indem er verdeckt zwei Teamkarten legt (mit Stärke 3 und 1 Würfel).
              </p>
            </div>

            <div className="border-b pb-4">
              <h4 className="font-semibold mb-2">Teamkarten aufdecken</h4>
              <p className="text-gray-600">
                Sobald jeder Spieler entschieden hat, ob er passt oder pitcht, werden die ausgelegten Teamkarten aller Spieler aufgedeckt.
              </p>
              <p className="text-gray-600 mt-4 bg-gray-100 p-4 rounded">
               <strong>Beispiel:</strong> Spieler A stehen 3 Würfel zur Verfügung, da er seinen CTO eingesetzt hat. Spieler C stehen nun 4 Würfel zur Verfügung, da er zwei Karten entsprechender Stärke eingesetzt hat.
              </p>
            </div>

            <div className="border-b pb-4">
              <h4 className="font-semibold mb-2">Event-Karten spielen</h4>
              <p className="text-gray-600">
                Nun können die Spieler im Pitch (ausgehend vom Startspieler), vor dem Würfeln zusätzliche Event-Karten ausspielen. Die Effekte werden sofort ausgeführt. Es dürfen beliebig viele Event-Karten gleichzeitig gelegt werden, auch auf unterschiedliche Spieler. 
                Event-Karten können nicht gegen die Pitch-Karte in der Tischmitte gespielt werden, um diese zu verändern. Immer wenn ein Spieler eine Event-Karte gespielt hat, können die anderen Spieler im Pitch reagieren und ihrerseits weitere Karten ausspielen, bis alle gepasst haben.  
              </p>
              <p className="text-gray-600 mt-4 bg-gray-100 p-4 rounded">
               <strong>Beispiel:</strong> Um seine Chancen zu verbessern (immerhin hat Spieler C 4 Würfel), entschließt sich Spieler A dazu, eine Event-Karte von seiner Hand auszuspielen. Er legt "Schnellscrum", wodurch er ein weiteres Teammitglied von seinen Handkarten dem Pitch hinzufügen darf.
                Er wählt seinen Stärke 2 Entwickler , so dass er im Kräfteverhältnis vorne liegt. Doch auch Spieler C legt eine Event-Karte, welche ihm die Verwendung eines zusätzlichen Würfels ermöglicht.
                Spieler A will dies unbedingt verhindern und spielt eine weitere Event-Karte mit dem Zauberstab-Symbol aus. Dadurch hebt er den Effekt der letzten Event-Karte von Spieler C auf. Dieser darf also weiterhin nur mit 4 Würfeln pitchen.
                Spieler C könnte nun seinerseits wieder eine Event-Karte spielen, hat jedoch keine geeignete und passt daher. Spieler A könnte noch weitere Event-Karten legen, passt aber ebenfalls.
              </p>
            </div>

            <div className="border-b pb-4">
              <h4 className="font-semibold mb-2">Würfeln</h4>
              <p className="text-gray-600">
                Jeder Spieler würfelt mit einer Anzahl an Würfeln entsprechend der aufsummierten Stärke seiner Teamkarten (z.B. CTO 3 Würfel + Noob 1 Würfel = 4 Würfel).
              </p>
            </div>

            <div className="border-b pb-4">
              <h4 className="font-semibold mb-2">Incentives einsetzen</h4>
              <p className="text-gray-600">
                Jeder Spieler (ausgehend vom Startspieler) kann seine unverbrauchten Incentive-Karten einsetzen, um sein Würfelergebnis zu verbessern.
                Es dürfen reihum beliebig viele Incentive-Karten genutzt werden. Diese sind jedoch danach bis zum Ende des Sprints verbraucht.
              </p>
              <p className="text-gray-600 mt-4 bg-gray-100 p-4 rounded">
                <strong>Beispiel:</strong> Beide Spieler haben 13 Punkte gewürfelt. Nun muss Spieler A als erster entscheiden, ob er sein ungenutztes Incentive "freie Massagen" einsetzt, welches ihm für diesen Pitch +3 Punkte einbringt.
              </p>
            </div>

            <div className="border-b pb-4">
              <h4 className="font-semibold mb-2">Gewinner ermitteln</h4>
              <p className="text-gray-600">
                Auf das jeweilige Würfelergebnis werden Bonuspunkte aus Incentive- und Event-Karten-Effekte angewendet. <strong>Der Spieler mit der höchsten Gesamtaugenzahl gewinnt die Karte</strong>, sofern deren Mindestwert erreicht wurde. Bei Gleichstand wird neu gewürfelt (Ereignis- und Incentive-Effekte bleiben erhalten). Wurde der Mindestwert nicht erreicht, kommt die Pitch-Karte auf den Ablagestapel. 
              </p>
              <p className="text-gray-600 mt-4 bg-gray-100 p-4 rounded">
               <strong>Beispiel:</strong> Nun wird gewürfelt. Spieler A erzielt mit seinen 5 Würfeln ein Ergebnis von 15. Spieler C erwürfelt eine 17. Spieler A muss als erster entscheiden, ob er sein ungenutztes Incentive "freie Massagen" einsetzt, welches ihm für diesen Pitch +3 Punkte einbringt. Da Spieler C leider keine Incentive-Karte mehr hat, nutzt Spieler A seine Incentive-Karte und hat mit 18 Punkten diesen Pitch gewonnen.
              </p>
            </div>

            <div className="border-b pb-4">
              <h4 className="font-semibold mb-2">Karten zur Seite legen</h4>
              <p className="text-gray-600">
                Alle eingesetzten Event-Karten kommen auf den Ablagestapel.
                Außerdem legt jeder Spieler seine eingesetzten Teamkarten verdeckt vor sich ab. Der Gewinner legt die neu gewonnene Karte ebenfalls dazu. Alle abgelegten oder gewonnenen Karten bleiben bis zum Sprint-Ende verdeckt liegen und können erst im nächsten Sprint, nicht aber in den direkt folgenden Pitch-Runden verwendet werden.
              </p>
              <p className="text-gray-600 mt-4 bg-gray-100 p-4 rounded">
                <strong>Beispiel:</strong> Spieler A erhält die Story-Karte, welche er zusammen mit seinen eingesetzten Teamkarten bis zum Sprint-Ende verdeckt vor sich ablegt. Diese Karten sind für weitere Pitch-Runden verbraucht und können vorerst nicht mehr eingesetzt werden.
                Dies gilt auch für die Teamkarten von Spieler C, obwohl er die Pitch-Karte nicht gewonnen hat. Alle gespielten Event-Karten kommen auf den Ablagestapel.
              </p>
            </div>

            <div className="border-b pb-4">
              <h4 className="font-semibold mb-2">Startspieler wechseln</h4>
              <p className="text-gray-600">
                Nach jeder Pitch-Runde wechselt der Startspieler im Uhrzeigersinn, die nächste Pitch-Karte wird in die Tischmitte verschoben und die nächste, bislang verdeckte Karte im Sprint-Backlog wird aufgedeckt. Es folgt der nächste Pitch nach obigem Ablauf mit den übrigen Handkarten.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4">Ende des Spiels</h3>
          <p className="text-gray-600">
            Das Spiel endet, sobald ein Spieler am Sprint-Ende blaue Story-Siegpunktkarten im Gesamtwert der vereinbarten Siegpunkte (oder mehr) besitzt und damit gewonnen hat.
          </p>
        </section>
      </div>
    </div>
  );
};
