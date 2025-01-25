import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function SearchBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative w-full max-w-xl transition-all duration-300 ease-in-out">
      <Search 
        className={`absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 transition-all duration-300 ${
          isExpanded ? 'opacity-100' : 'opacity-70'
        }`} 
      />
      <Input
        type="search"
        placeholder={isExpanded ? "Search manual..." : "Search..."}
        className={`pl-10 pr-4 transition-all duration-300 ease-in-out ${
          isExpanded ? 'w-full' : 'w-10'
        }`}
        onFocus={() => setIsExpanded(true)}
        onBlur={() => setIsExpanded(false)}
      />
    </div>
  );
}