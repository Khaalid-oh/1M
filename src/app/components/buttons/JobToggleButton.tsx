import { useState } from "react";

interface JobToggleButtonProps {
  onToggle: (view: "circle" | "external") => void;
  defaultView?: "circle" | "external";
}

const JobToggleButton = ({
  onToggle,
  defaultView = "circle",
}: JobToggleButtonProps) => {
  const [activeView, setActiveView] = useState<"circle" | "external">(
    defaultView
  );

  const handleToggle = (view: "circle" | "external") => {
    setActiveView(view);
    onToggle(view);
  };

  return (
    <div className="inline-flex rounded-lg p-1 bg-gray-100">
      <button
        onClick={() => handleToggle("circle")}
        className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
          activeView === "circle"
            ? "bg-white text-gray-900 shadow-sm"
            : "text-gray-600 hover:text-gray-900"
        }`}
      >
        Circle Jobs
      </button>
      <button
        onClick={() => handleToggle("external")}
        className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
          activeView === "external"
            ? "bg-white text-gray-900 shadow-sm"
            : "text-gray-600 hover:text-gray-900"
        }`}
      >
        My Jobs
      </button>
    </div>
  );
};

export default JobToggleButton;
