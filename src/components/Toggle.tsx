import type { PetStatus } from "../types/petStatus";

type ToggleProps = {
  selectedTabs: PetStatus[];
  onTabChange?: (tab: PetStatus) => void;
};

export const Toggle = ({ selectedTabs, onTabChange }: ToggleProps) => {
  const tabs: PetStatus[] = ["available", "pending", "sold"];

  return (
    <div className="flex gap-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-4 py-2 rounded-xl border transition-colors ${
            selectedTabs.includes(tab)
              ? "bg-amber-500 text-white border-amber-200"
              : "bg-gray-200 text-gray-600 border-gray-300 hover:bg-amber-50 hover:border-amber-300"
          }`}
          onClick={() => onTabChange?.(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};
