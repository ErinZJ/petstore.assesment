import { useState } from "react";

interface ToggleProps {
  onTabChange?: (tab: "available" | "pending" | "sold") => void;
  defaultTab?: "available" | "pending" | "sold";
}

export const Toggle = ({
  onTabChange,
  defaultTab = "available",
}: ToggleProps) => {
  const [status, setStatus] = useState<"available" | "pending" | "sold">(
    defaultTab,
  );

  const handleTabClick = (tab: "available" | "pending" | "sold") => {
    setStatus(tab);
    onTabChange?.(tab);
  };

  const tabs: ("available" | "pending" | "sold")[] = [
    "available",
    "pending",
    "sold",
  ];

  return (
    <div className="flex gap-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-4 py-2 rounded border transition-colors ${
            status === tab
              ? "bg-blue-500 text-white border-blue-500"
              : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
          }`}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};
