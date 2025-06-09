import {useState} from "react";
import {Dice1, Dice2, Dice3, Dice4, Dice5, Dice6, Dices, Minus, Plus} from "lucide-react";
import {Button} from "./ui/button";
import {Card, CardContent} from "./ui/card";
import {Slider} from "./ui/slider";
import {Input} from "./ui/input";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger,} from "./ui/dialog";

const diceIcons = [
  <Dice1 className="w-12 h-12" />,
  <Dice2 className="w-12 h-12" />,
  <Dice3 className="w-12 h-12" />,
  <Dice4 className="w-12 h-12" />,
  <Dice5 className="w-12 h-12" />,
  <Dice6 className="w-12 h-12" />,
];

export const DiceRoller = () => {
  const [currentDice, setCurrentDice] = useState<number[]>([0]);
  const [isRolling, setIsRolling] = useState(false);
  const [numberOfDice, setNumberOfDice] = useState(1);
  const [modifier, setModifier] = useState(0);
  const [rollResult, setRollResult] = useState<string>("");

  const rollDice = () => {
    setIsRolling(true);
    setRollResult("");
    const rolls = 10;
    let currentRoll = 0;

    const rollInterval = setInterval(() => {
      setCurrentDice(Array(numberOfDice).fill(0).map(() => Math.floor(Math.random() * 6)));
      currentRoll++;

      if (currentRoll >= rolls) {
        clearInterval(rollInterval);
        setIsRolling(false);
        const finalValues = Array(numberOfDice).fill(0).map(() => Math.floor(Math.random() * 6));
        setCurrentDice(finalValues);
        const diceTotal = finalValues.map(v => v + 1).reduce((a, b) => a + b, 0);
        const totalWithModifier = diceTotal + modifier;
        setRollResult(`Du hast ${diceTotal}${modifier !== 0 ? ` ${modifier > 0 ? '+' : ''}${modifier} = ${totalWithModifier}` : ''} gewürfelt!`);
      }
    }, 100);
  };

  const handleSliderChange = (value: number[]) => {
    const newNumberOfDice = value[0];
    setNumberOfDice(newNumberOfDice);
    setCurrentDice(Array(newNumberOfDice).fill(0).map(() => Math.floor(Math.random() * 6)));
  };

  const handleModifierChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value === '' ? 0 : parseInt(event.target.value);
    setModifier(value);
  };

  const incrementModifier = () => {
    setModifier(prev => prev + 1);
  };

  const decrementModifier = () => {
    setModifier(prev => prev - 1);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="text-black" title="Dice Roller / Würfelsimulator">
          <Dices className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Würfelsimulator</DialogTitle>
        </DialogHeader>
        <Card className="w-full border-0 shadow-none">
          <CardContent className="flex flex-col items-center gap-4">
            <div className="w-full px-4">
              <p className="text-sm text-gray-500 mb-2">Anzahl: {numberOfDice}</p>
              <Slider
                value={[numberOfDice]}
                onValueChange={handleSliderChange}
                min={1}
                max={20}
                step={1}
                className="mb-6"
              />
            </div>
            <div className="w-full px-4">
              <p className="text-sm text-gray-500 mb-2">Modifikator</p>
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={decrementModifier}
                  className="h-10 w-10"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <Input
                  type="number"
                  value={modifier}
                  onChange={handleModifierChange}
                  className="w-full"
                  placeholder="Gib einen Modifikator ein"
                />
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={incrementModifier}
                  className="h-10 w-10"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4 p-4 bg-accent rounded-lg">
              {currentDice.map((dice, index) => (
                <div key={index}>
                  {diceIcons[dice]}
                </div>
              ))}
            </div>
            {rollResult && (
              <div className="text-center font-medium text-lg">
                {rollResult}
              </div>
            )}
            <Button 
              onClick={rollDice} 
              disabled={isRolling}
              className="w-32"
            >
              {isRolling ? "Rolling..." : "würfeln"}
            </Button>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};