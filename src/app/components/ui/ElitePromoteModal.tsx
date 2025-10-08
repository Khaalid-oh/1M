import React, { useState } from "react";
import { WandSparklesIcon, X } from "lucide-react";
import Button from "../buttons/button";
import Image from "next/image";

interface ElitePromoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ElitePromoteModal: React.FC<ElitePromoteModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [step, setStep] = useState<"initial" | "edit" | "confirmation">(
    "initial"
  );
  const [tagline, setTagline] = useState(
    "Join 1M Elite, a curated network of top-percentile, pre-vetted talent to gain access to exclusive opportunities around the world!"
  );
  const [editedTagline, setEditedTagline] = useState(tagline);

  if (!isOpen) return null;

  const handleEdit = () => {
    setEditedTagline(tagline);
    setStep("edit");
  };

  const handleSave = () => {
    setTagline(editedTagline);
    setStep("initial");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 text-sm">
      <div className="bg-white rounded-lg p-6 w-full max-w-xl">
        {step === "initial" ? (
          <>
            <div className="flex items-start justify-between mb-6">
              <div className="flex flex-col items-center justify-center gap-2 translate-x-1">
                <Image
                  src="/avatar_group.png"
                  alt="Elite"
                  width={107}
                  height={24}
                />
                <h3 className="text-lg font-medium">Promote 1M Elite Talent</h3>
                <p className="text-gray-600 mb-4 text-center">
                  Promote 1M Elite Talent to your circle member to get access to
                  our exclusive jobs
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mb-6">
              <div className="border border-gray-200 p-4 rounded-md flex flex-col items-start gap-4">
                <WandSparklesIcon className="w-5 h-5 text-gray-500" />
                <p className="text-gray-800">{tagline}</p>
              </div>
            </div>

            <div className="flex justify-between gap-4">
              <Button variant="secondary" onClick={handleEdit}>
                Edit
              </Button>
              <Button variant="primary" onClick={() => setStep("confirmation")}>
                Promote Elite
              </Button>
            </div>
          </>
        ) : step === "edit" ? (
          <>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-medium">Edit Promotion Text</h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Promotion Tagline
              </label>
              <textarea
                value={editedTagline}
                onChange={(e) => setEditedTagline(e.target.value)}
                className="w-full h-32 p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your promotion tagline..."
              />
            </div>

            <div className="flex justify-between gap-4">
              <Button variant="secondary" onClick={() => setStep("initial")}>
                Cancel
              </Button>
              <Button
                variant="primary"
                onClick={handleSave}
                disabled={!editedTagline.trim()}
              >
                Save Changes
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col items-center justify-center text-center py-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Promote Elite Talent</h3>
              <p className="text-gray-600 mb-6">
                You have successfully created a tagline to promote Elite
                Candidate to Circle members
              </p>
              <div className="flex gap-4">
                <Button variant="secondary" onClick={onClose}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={onClose}>
                  View
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ElitePromoteModal;
