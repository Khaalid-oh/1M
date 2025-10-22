"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import Button from "../buttons/button";
import Image from "next/image";

interface InviteTalentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNext: (inviteType: "job" | "tech1m") => void;
}

const InviteTalentModal: React.FC<InviteTalentModalProps> = ({
  isOpen,
  onClose,
  onNext,
}) => {
  const [selectedOption, setSelectedOption] = useState<"job" | "tech1m">("job");

  if (!isOpen) return null;

  const handleNext = () => {
    onNext(selectedOption);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Invite a Talent</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            title="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Header Graphic */}
          <div className="relative mb-8">
            <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-lg h-24 flex items-center justify-center relative overflow-hidden">
              {/* Profile Images */}
              <Image
                src="/images/avatars.png"
                alt="Invite Talent"
                width={160}
                height={160}
                quality={100}
                className="mt-4"
              />
            </div>
          </div>

          {/* Radio Options */}
          <div className="space-y-4">
            {/* Option 1: Invite talent to a job */}
            <label className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <input
                type="radio"
                name="inviteType"
                value="job"
                checked={selectedOption === "job"}
                onChange={(e) =>
                  setSelectedOption(e.target.value as "job" | "tech1m")
                }
                className="mt-1 w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <div className="flex-1">
                <div className="font-medium text-gray-900 mb-1">
                  Invite talent to a job
                </div>
                <div className="text-sm text-gray-600">
                  I'm inviting talent to a job on the circle job board.
                </div>
              </div>
            </label>

            {/* Option 2: Invite talent to Tech1m */}
            <label className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <input
                type="radio"
                name="inviteType"
                value="tech1m"
                checked={selectedOption === "tech1m"}
                onChange={(e) =>
                  setSelectedOption(e.target.value as "job" | "tech1m")
                }
                className="mt-1 w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <div className="flex-1">
                <div className="font-medium text-gray-900 mb-1">
                  Invite talent to Tech1m
                </div>
                <div className="text-sm text-gray-600">
                  I'm inviting a talent to register with Tech1m.
                </div>
              </div>
            </label>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-4 p-6 border-t border-gray-200">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleNext}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InviteTalentModal;
