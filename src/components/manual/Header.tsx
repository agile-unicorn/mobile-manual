import { SearchBar } from "@/components/SearchBar";
import { DiceRoller } from "@/components/DiceRoller";

export const ManualHeader = () => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold mb-8">Agile Unicorn</h1>
      <div className="flex flex-col items-center gap-4">
        <SearchBar />
        <DiceRoller />
      </div>
    </div>
  );
};