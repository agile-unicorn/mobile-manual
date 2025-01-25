import { SearchBar } from "@/components/SearchBar";
import { DiceRoller } from "@/components/DiceRoller";

export const ManualHeader = () => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold mb-4">Agile Unicorn</h1>
      <p className="text-lg text-gray-600 mb-8">Everything you need to know about your device</p>
      <div className="flex flex-col items-center gap-4">
        <SearchBar />
        <DiceRoller />
      </div>
    </div>
  );
};