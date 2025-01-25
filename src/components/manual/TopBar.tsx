import React from "react";
import { SearchBar } from "@/components/SearchBar";
import { DiceRoller } from "@/components/DiceRoller";

export const TopBar = () => {
  return (
    <div className="w-full bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 py-4 px-6">
        <h1 className="text-4xl font-bold">Agile Unicorn</h1>
        <div className="flex items-center gap-4">
          <DiceRoller />
          <SearchBar />
        </div>
      </div>
    </div>
  );
};