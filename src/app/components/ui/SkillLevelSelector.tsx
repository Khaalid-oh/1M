import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, X, Plus } from "lucide-react";

interface SkillLevel {
  skillId: string;
  levelId: string;
  skillName: string;
  levelName: string;
}

interface SkillLevelSelectorProps {
  skills: { value: string; label: string }[];
  levels: { value: string; label: string }[];
  selectedItems: SkillLevel[];
  onChange: (items: SkillLevel[]) => void;
  onBlur?: () => void;
  error?: boolean;
  errorMessage?: string;
  required?: boolean;
  skillLabel?: string;
  levelLabel?: string;
  addButtonLabel?: string;
}

const SkillLevelSelector: React.FC<SkillLevelSelectorProps> = ({
  skills,
  levels,
  selectedItems,
  onChange,
  onBlur,
  error = false,
  errorMessage = "Please add at least one skill with experience level",
  required = false,
  skillLabel = "What skill-sets do the talents in your community possess?",
  levelLabel = "Select the experience level within your audience",
  addButtonLabel = "Add Another Skill Set",
}) => {
  const [isSkillOpen, setIsSkillOpen] = useState(false);
  const [isLevelOpen, setIsLevelOpen] = useState(false);
  const [currentSkill, setCurrentSkill] = useState<{
    value: string;
    label: string;
  } | null>(null);
  const [currentLevel, setCurrentLevel] = useState<{
    value: string;
    label: string;
  } | null>(null);
  const [touched, setTouched] = useState(false);

  const skillDropdownRef = useRef<HTMLDivElement>(null);
  const levelDropdownRef = useRef<HTMLDivElement>(null);

  // Handle outside clicks for skill dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        skillDropdownRef.current &&
        !skillDropdownRef.current.contains(event.target as Node)
      ) {
        setIsSkillOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle outside clicks for level dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        levelDropdownRef.current &&
        !levelDropdownRef.current.contains(event.target as Node)
      ) {
        setIsLevelOpen(false);
        if (onBlur) onBlur();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onBlur]);

  const handleToggleSkillDropdown = () => {
    setIsSkillOpen(!isSkillOpen);
    setIsLevelOpen(false);
  };

  const handleToggleLevelDropdown = () => {
    setIsLevelOpen(!isLevelOpen);
    setIsSkillOpen(false);
  };

  const handleSelectSkill = (skill: { value: string; label: string }) => {
    setCurrentSkill(skill);
    setIsSkillOpen(false);
    // Automatically focus on level selection
    setTimeout(() => setIsLevelOpen(true), 100);
  };

  const handleSelectLevel = (level: { value: string; label: string }) => {
    setCurrentLevel(level);
    setIsLevelOpen(false);
    setTouched(true);
  };

  const handleAddSkillLevel = () => {
    if (currentSkill && currentLevel) {
      const newItem: SkillLevel = {
        skillId: currentSkill.value,
        levelId: currentLevel.value,
        skillName: currentSkill.label,
        levelName: currentLevel.label,
      };

      onChange([...selectedItems, newItem]);
      setCurrentSkill(null);
      setCurrentLevel(null);
      setTouched(true);
    }
  };

  const handleRemoveItem = (index: number) => {
    const newItems = [...selectedItems];
    newItems.splice(index, 1);
    onChange(newItems);
  };

  const handleAddAnother = () => {
    setCurrentSkill(null);
    setCurrentLevel(null);
    setIsSkillOpen(true);
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {skillLabel} {required && <span className="text-red-500">*</span>}
        </label>

        {/* Display selected items */}
        {selectedItems.length > 0 && (
          <div className="mb-4 space-y-2">
            {selectedItems.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="flex-1 p-2 bg-gray-50 border border-gray-200 rounded-md">
                  <div className="font-medium">{item.skillName}</div>
                  <div className="text-sm text-gray-500">
                    Level: {item.levelName}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleRemoveItem(index)}
                  className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                  aria-label={`Remove ${item.skillName}`}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Skill selection */}
        {!currentSkill ? (
          <div ref={skillDropdownRef} className="relative">
            <div
              className={`flex items-center justify-between px-3 py-2 w-full rounded-md border ${
                error && touched ? "border-red-500" : "border-gray-300"
              } cursor-pointer bg-white`}
              onClick={handleToggleSkillDropdown}
              aria-haspopup="listbox"
              aria-expanded={isSkillOpen}
              role="combobox"
            >
              <span className="text-gray-500">Select a skill</span>
              <ChevronDown className="w-5 h-5 text-gray-400" />
            </div>

            {isSkillOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                <ul role="listbox" className="py-1">
                  {skills.map((skill) => (
                    <li
                      key={skill.value}
                      role="option"
                      className="px-3 py-2 hover:bg-blue-50 cursor-pointer"
                      onClick={() => handleSelectSkill(skill)}
                    >
                      {skill.label}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          <>
            {/* Selected skill display */}
            <div className="mb-3 p-3 bg-blue-50 border border-blue-200 rounded-md">
              <div className="font-medium">{currentSkill.label}</div>

              {/* Level selection */}
              <div className="mt-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {levelLabel} <span className="text-red-500">*</span>
                </label>

                <div ref={levelDropdownRef} className="relative">
                  <div
                    className={`flex items-center justify-between px-3 py-2 w-full rounded-md border ${
                      error && touched ? "border-red-500" : "border-gray-300"
                    } cursor-pointer bg-white`}
                    onClick={handleToggleLevelDropdown}
                    aria-haspopup="listbox"
                    aria-expanded={isLevelOpen}
                    role="combobox"
                  >
                    <span
                      className={
                        currentLevel ? "text-gray-900" : "text-gray-500"
                      }
                    >
                      {currentLevel
                        ? currentLevel.label
                        : "Select experience level"}
                    </span>
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </div>

                  {isLevelOpen && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                      <ul role="listbox" className="py-1">
                        {levels.map((level) => (
                          <li
                            key={level.value}
                            role="option"
                            className="px-3 py-2 hover:bg-blue-50 cursor-pointer"
                            onClick={() => handleSelectLevel(level)}
                          >
                            {level.label}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Add button */}
              <div className="mt-3 flex justify-end">
                <button
                  type="button"
                  onClick={handleAddSkillLevel}
                  disabled={!currentLevel}
                  className={`px-3 py-1 rounded-md ${
                    currentLevel
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : "bg-gray-200 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Add
                </button>
              </div>
            </div>
          </>
        )}

        {/* Add another button */}
        {(!currentSkill || selectedItems.length > 0) && (
          <div className="mt-4">
            <p className="text-sm text-gray-600 mb-2">
              Do your talents possess diverse skills?
            </p>
            <button
              type="button"
              onClick={handleAddAnother}
              className="text-blue-500 hover:text-blue-700 flex items-center"
            >
              <Plus className="w-4 h-4 mr-1" />
              {addButtonLabel}
            </button>
          </div>
        )}

        {error && touched && selectedItems.length === 0 && (
          <p className="mt-1 text-sm text-red-600">{errorMessage}</p>
        )}
      </div>
    </div>
  );
};

export default SkillLevelSelector;
