import { useState, createContext, useContext } from "react";
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { toast } from "sonner";
import { Slider } from "./ui/slider";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const diceIcons = [
  <Dice1 className="w-12 h-12" />,
  <Dice2 className="w-12 h-12" />,
  <Dice3 className="w-12 h-12" />,
  <Dice4 className="w-12 h-12" />,
  <Dice5 className="w-12 h-12" />,
  <Dice6 className="w-12 h-12" />,
];

type DiceRollerContextType = {
  openModal: () => void;
};

const DiceRollerContext = createContext<DiceRollerContextType | undefined>(undefined);

export const DiceRollerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);

  return (
    <DiceRollerContext.Provider value={{ openModal }}>
      <DiceRoller open={open} onOpenChange={setOpen} />
      {children}
    </DiceRollerContext.Provider>
  );
};

export const useRollDiceModal = () => {
  const context = useContext(DiceRollerContext);
  if (!context) {
    throw new Error("useRollDiceModal must be used within a DiceRollerProvider");
  }
  return context;
};

interface DiceRollerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const DiceRoller = ({ open, onOpenChange }: DiceRollerProps) => {
  const [currentDice, setCurrentDice] = useState<number[]>([0]);
  const [isRolling, setIsRolling] = useState(false);
  const [numberOfDice, setNumberOfDice] = useState(1);

  const rollDice = () => {
    setIsRolling(true);
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
        const total = finalValues.map(v => v + 1).reduce((a, b) => a + b, 0);
        toast(`You rolled a total of ${total}!`);
      }
    }, 100);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Dice Roller</DialogTitle>
        </DialogHeader>
        <Card className="w-full border-0 shadow-none">
          <CardContent className="flex flex-col items-center gap-4">
            <div className="w-full px-4">
              <p className="text-sm text-gray-500 mb-2">Number of dice: {numberOfDice}</p>
              <Slider
                value={[numberOfDice]}
                onValueChange={(value) => setNumberOfDice(value[0])}
                min={1}
                max={5}
                step={1}
                className="mb-6"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-4 p-4 bg-accent rounded-lg">
              {currentDice.map((dice, index) => (
                <div key={index}>
                  {diceIcons[dice]}
                </div>
              ))}
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
      </DialogContent>
    </Dialog>
  );
};