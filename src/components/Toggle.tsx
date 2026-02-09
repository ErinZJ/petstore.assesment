import { useState } from "react";

interface TagProps {
  onTabChange?: (tab: string) => void;
  defaultTab?: "available" | "pending" | "sold";
}

export const Toggle = ({ onTabChange, defaultTab = "available" }: TagProps) => {
  const [selectedTab, setSelectedTab] = useState<string>(defaultTab);

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
    onTabChange?.(tab);
    console.log(tab);
  };

  const tabs = ["available", "pending", "sold"];

  return (
    <div className="flex gap-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-4 py-2 rounded border transition-colors ${
            selectedTab === tab
              ? "bg-blue-500 text-white border-blue-500"
              : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
          }`}
          onClick={() => {
            handleTabClick(tab);
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};
