import React from "react";
import { DiceRoller } from "@/components/DiceRoller";

export const TopBar = () => {
  return (
    <div className="w-full bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 py-4 px-6">
        <div className="flex items-center gap-4">
          <a 
            href="https://agile-unicorn.com/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
              src="/lovable-uploads/8d2cc797-794a-470b-b202-0f321f2beaa5.png" 
              alt="Agile Unicorn Logo" 
              className="h-12 w-auto"
            />
          </a>
        </div>
        <div className="flex items-center gap-4">
          <DiceRoller />
        </div>
      </div>
    </div>
  );
};