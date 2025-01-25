import { useState } from "react";
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { toast } from "sonner";

const diceIcons = [
  <Dice1 className="w-12 h-12" />,
  <Dice2 className="w-12 h-12" />,
  <Dice3 className="w-12 h-12" />,
  <Dice4 className="w-12 h-12" />,
  <Dice5 className="w-12 h-12" />,
  <Dice6 className="w-12 h-12" />,
];

export const DiceRoller = () => {
  const [currentDice, setCurrentDice] = useState(0);
  const [isRolling, setIsRolling] = useState(false);

  const rollDice = () => {
    setIsRolling(true);
    const rolls = 10; // Number of visual rolls before settling
    let currentRoll = 0;

    const rollInterval = setInterval(() => {
      setCurrentDice(Math.floor(Math.random() * 6));
      currentRoll++;

      if (currentRoll >= rolls) {
        clearInterval(rollInterval);
        setIsRolling(false);
        const finalValue = Math.floor(Math.random() * 6) + 1;
        setCurrentDice(finalValue - 1);
        toast(`You rolled a ${finalValue}!`);
      }
    }, 100);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Dice Roller</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        <div className="p-4 bg-accent rounded-lg">
          {diceIcons[currentDice]}
        </div>
        <Button 
          onClick={rollDice} 
          disabled={isRolling}
          className="w-32"
        >
          {isRolling ? "Rolling..." : "Roll Dice"}
        </Button>
      </CardContent>
    </Card>
  );
};