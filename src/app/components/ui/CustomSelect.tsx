/* eslint-disable jsx-a11y/role-has-required-aria-props */
import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

interface CustomSelectProps {
  name: string;
  value: string;
  options: Array<{ value: string; label: string }>;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  error?: boolean;
  required?: boolean;
  className?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  name,
  value,
  options,
  onChange,
  onBlur,
  placeholder = "Select an option",
  error = false,
  required = false,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const hiddenSelectRef = useRef<HTMLSelectElement>(null);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (optionValue: string) => {
    if (hiddenSelectRef.current) {
      hiddenSelectRef.current.value = optionValue;

      const changeEvent = new Event("change", { bubbles: true });
      hiddenSelectRef.current.dispatchEvent(changeEvent);

      if (onBlur) {
        const blurEvent = new Event("blur", { bubbles: true });
        hiddenSelectRef.current.dispatchEvent(blurEvent);
      }
    }

    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Find the selected option's label
  const selectedOption = options.find((option) => option.value === value);

  return (
    <div ref={selectRef} className={`relative ${className}`}>
      <select
        ref={hiddenSelectRef}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        className="sr-only"
        aria-hidden="true"
        tabIndex={-1}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <div
        className={`flex items-center justify-between px-3 py-2 w-full rounded-md border ${
          error ? "border-red-500" : "border-gray-300"
        } cursor-pointer bg-white focus:border-blue-500 focus:outline-none focus:ring-1 ${
          error ? "focus:ring-red-500" : "focus:ring-blue-500"
        }`}
        onClick={handleToggleDropdown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        role="combobox"
      >
        <span className={value ? "text-gray-900" : "text-gray-500"}>
          {value ? selectedOption?.label || value : placeholder}
        </span>
        <ChevronDown className="w-5 h-5 text-gray-400" />
      </div>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
          <ul role="listbox" className="py-1">
            {options.map((option) => (
              <li
                key={option.value}
                role="option"
                aria-selected={value === option.value}
                className={`px-3 py-2 cursor-pointer hover:bg-blue-50 ${
                  value === option.value ? "bg-blue-100" : ""
                }`}
                onClick={() => handleSelectOption(option.value)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
