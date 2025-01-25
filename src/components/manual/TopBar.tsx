import React from "react";
import { SearchBar } from "@/components/SearchBar";

export const TopBar = () => {
  return (
    <div className="w-full bg-primary text-primary-foreground py-4 px-6 mb-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-4xl font-bold">Agile Unicorn</h1>
        <SearchBar />
      </div>
    </div>
  );
};