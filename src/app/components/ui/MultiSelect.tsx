/* eslint-disable jsx-a11y/role-has-required-aria-props */

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, X } from "lucide-react";

interface MultiSelectProps {
  label: string;
  options: { value: string; label: string }[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
  onBlur?: () => void;
  error?: boolean;
  errorMessage?: string;
  required?: boolean;
  placeholder?: string;
  name: string;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  label,
  options,
  selectedValues,
  onChange,
  onBlur,
  error,
  errorMessage,
  required = false,
  placeholder = "Select options",
  name,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const filteredOptions = options.filter(
    (option) =>
      option.label.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !selectedValues.includes(option.value)
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        if (onBlur) onBlur();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onBlur]);

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
    setSearchTerm("");
  };

  const handleSelectOption = (value: string) => {
    onChange([...selectedValues, value]);
    setSearchTerm("");
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  const handleRemoveOption = (value: string) => {
    onChange(selectedValues.filter((val) => val !== value));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
      if (onBlur) onBlur();
    }
  };

  const getLabelForValue = (value: string) => {
    const option = options.find((option) => option.value === value);
    return option ? option.label : value;
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <div className="flex flex-wrap gap-2 mb-2">
        {selectedValues.map((value) => (
          <div
            key={value}
            className="flex items-center gap-1 bg-blue-500 text-white text-xs px-3 py-1 rounded-md"
          >
            <span>{getLabelForValue(value)}</span>
            <button
              type="button"
              onClick={() => handleRemoveOption(value)}
              className="focus:outline-none"
              aria-label={`Remove ${getLabelForValue(value)}`}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      <div
        className={`flex items-center justify-between px-4 py-2 w-full rounded-md border ${
          error ? "border-red-500" : "border-gray-300"
        } cursor-pointer bg-white`}
        onClick={handleToggleDropdown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        role="combobox"
      >
        <span className="text-gray-500">
          {selectedValues.length > 0
            ? `${selectedValues.length} selected`
            : placeholder}
        </span>
        <ChevronDown className="w-5 h-5 text-gray-400" />
      </div>

      {error && errorMessage && (
        <p className="mt-1 text-sm text-red-600">{errorMessage}</p>
      )}

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg max-h-60 overflow-auto border border-gray-200">
          <div className="p-2 border-b sticky top-0 bg-white">
            <input
              ref={searchInputRef}
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Search..."
              aria-controls="options-list"
            />
          </div>

          <ul
            id="options-list"
            role="listbox"
            aria-multiselectable="true"
            className="py-1"
          >
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <li
                  key={option.value}
                  role="option"
                  aria-selected={selectedValues.includes(option.value)}
                  className="px-4 py-2 text-sm cursor-pointer hover:bg-blue-50 hover:text-blue-700"
                  onClick={() => handleSelectOption(option.value)}
                >
                  {option.label}
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-sm text-gray-500">
                {searchTerm ? "No matching options" : "No options available"}
              </li>
            )}
          </ul>
        </div>
      )}

      <input type="hidden" name={name} value={selectedValues.join(",")} />
    </div>
  );
};

export default MultiSelect;
