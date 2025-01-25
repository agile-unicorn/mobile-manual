import { SearchBar } from "@/components/SearchBar";
import { DiceRoller } from "@/components/DiceRoller";
import { TopBar } from "./TopBar";

export const ManualHeader = () => {
  return (
    <>
      <TopBar />
      <div className="text-center mb-12">
        <div className="flex flex-col items-center gap-4">
          <SearchBar />
          <DiceRoller />
        </div>
      </div>
    </>
  );
};