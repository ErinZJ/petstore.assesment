import type { PetStatus } from "../hooks/useGetPetStatus";

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
          className={`px-4 py-2 rounded border transition-colors ${
            selectedTabs.includes(tab)
              ? "bg-blue-500 text-white border-blue-500"
              : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
          }`}
          onClick={() => onTabChange?.(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};
