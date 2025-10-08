import React from "react";
import { Lightbulb, Users } from "lucide-react";
import CustomSelect from "./CustomSelect";
import MultiSelect from "./MultiSelect";
import SkillLevelSelector from "./SkillLevelSelector";

interface AudienceFormProps {
  details: {
    targetAudience: string[];
    audienceSize: string;
    engagementRate: string;
    communicationChannel: string[];
    skillSets: string[];
    experienceLevel: string;
  };
  setDetails: React.Dispatch<React.SetStateAction<any>>;
  onValidationChange: (isValid: boolean) => void;
}

interface SkillLevel {
  skillId: string;
  levelId: string;
  skillName: string;
  levelName: string;
}

function AudienceForm({
  details,
  setDetails,
  onValidationChange,
}: AudienceFormProps) {
  const [errors, setErrors] = React.useState<Record<string, boolean>>({});
  const [touched, setTouched] = React.useState<Record<string, boolean>>({});

  // Format options for CustomSelect and MultiSelect - MOVED UP
  const audienceSizeOptions = [
    { value: "1 - 10 members".toLowerCase(), label: "1 - 10 members" },
    { value: "11 - 50 members".toLowerCase(), label: "11 - 50 members" },
    { value: "51 - 200 members".toLowerCase(), label: "51 - 200 members" },
    { value: "201 - 1000 members".toLowerCase(), label: "201 - 1000 members" },
    { value: "1000+ members".toLowerCase(), label: "1000+ members" },
  ];

  const locationOptions = [
    { value: "africa".toLowerCase(), label: "Africa" },
    { value: "asia".toLowerCase(), label: "Asia" },
    { value: "europe".toLowerCase(), label: "Europe" },
    { value: "north america".toLowerCase(), label: "North America" },
    { value: "south america".toLowerCase(), label: "South America" },
    { value: "australia".toLowerCase(), label: "Australia" },
  ];

  const communicationChannelOptions = [
    { value: "linkedin".toLowerCase(), label: "LinkedIn" },
    { value: "email".toLowerCase(), label: "Email" },
    { value: "slack".toLowerCase(), label: "Slack" },
    { value: "discord".toLowerCase(), label: "Discord" },
    { value: "whatsapp".toLowerCase(), label: "WhatsApp" },
    { value: "telegram".toLowerCase(), label: "Telegram" },
  ];

  const skillSetOptions = [
    { value: "web development".toLowerCase(), label: "Web Development" },
    { value: "mobile development".toLowerCase(), label: "Mobile Development" },
    { value: "data science".toLowerCase(), label: "Data Science" },
    { value: "ui/ux design".toLowerCase(), label: "UI/UX Design" },
    { value: "devops".toLowerCase(), label: "DevOps" },
    { value: "cloud computing".toLowerCase(), label: "Cloud Computing" },
  ];

  const experienceLevelOptions = [
    {
      value: "entry level (less than 1 year)".toLowerCase(),
      label: "Entry level (less than 1 year)",
    },
    { value: "junior (1-3 years)".toLowerCase(), label: "Junior (1-3 years)" },
    {
      value: "mid-level (3-5 years)".toLowerCase(),
      label: "Mid-level (3-5 years)",
    },
    { value: "senior (5+ years)".toLowerCase(), label: "Senior (5+ years)" },
    {
      value: "lead/expert (8+ years)".toLowerCase(),
      label: "Lead/Expert (8+ years)",
    },
  ];

  const validateField = (name: string, value: any): boolean => {
    if (Array.isArray(value)) {
      const isValid = value.length > 0;
      setErrors((prev) => ({ ...prev, [name]: !isValid }));
      return isValid;
    }

    const isValid = value && value.trim() !== "";
    setErrors((prev) => ({ ...prev, [name]: !isValid }));
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setDetails((prev: any) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, value);
  };

  const handleMultiSelectChange = (name: string, values: string[]) => {
    setDetails((prev: any) => ({ ...prev, [name]: values }));
    validateField(name, values);
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleMultiSelectBlur = (name: string) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, details[name as keyof typeof details]);
  };

  const handleSkillLevelChange = (items: SkillLevel[]) => {
    const skillSets = items.map((item) => item.skillId);
    const experienceLevels = items.map((item) => item.levelId);

    setDetails((prev: any) => ({
      ...prev,
      skillSets: skillSets,
      experienceLevel: experienceLevels.length > 0 ? experienceLevels[0] : "",
    }));

    validateField("skillSets", skillSets);
    validateField(
      "experienceLevel",
      experienceLevels.length > 0 ? experienceLevels[0] : ""
    );

    setTouched((prev) => ({
      ...prev,
      skillSets: true,
      experienceLevel: true,
    }));
  };

  const currentSkillLevels = details.skillSets.map(
    (skillId: string, index: number) => {
      const skill = skillSetOptions.find((s) => s.value === skillId);
      const level = experienceLevelOptions.find(
        (l) => l.value === details.experienceLevel
      );

      return {
        skillId,
        levelId: details.experienceLevel,
        skillName: skill?.label || skillId,
        levelName: level?.label || details.experienceLevel,
      };
    }
  );

  React.useEffect(() => {
    const requiredFields = [
      "audienceSize",
      "targetAudience",
      "communicationChannel",
      "skillSets",
      "experienceLevel",
    ];

    const isValid = requiredFields.every((field) => {
      const value = details[field as keyof typeof details];
      if (Array.isArray(value)) {
        return value.length > 0;
      }
      return value && value.trim() !== "";
    });

    onValidationChange(isValid);
  }, [details, onValidationChange]);

  const ErrorMessage = ({ fieldName }: { fieldName: string }) => {
    if (!errors[fieldName] || !touched[fieldName]) return null;
    return (
      <p className="mt-1 text-sm text-red-600">
        {Array.isArray(details[fieldName as keyof typeof details])
          ? `Please select at least one option`
          : "This field is required"}
      </p>
    );
  };

  return (
    <div className="text-sm space-y-6">
      <div className="flex items-center mb-6">
        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-3">
          <Users className="w-5 h-5 text-blue-600" />
        </div>
        <h2 className="font-medium">Tell us about your audience</h2>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          What is the estimated size of your audience?{" "}
          <span className="text-red-500">*</span>
        </label>
        <CustomSelect
          name="audienceSize"
          value={details.audienceSize}
          onChange={handleChange}
          onBlur={handleBlur}
          options={audienceSizeOptions}
          placeholder="Select audience size"
          error={errors.audienceSize && touched.audienceSize}
          required
        />
        <ErrorMessage fieldName="audienceSize" />
      </div>

      <div>
        <MultiSelect
          label="What part of the world are your audience based from?"
          name="targetAudience"
          options={locationOptions}
          selectedValues={details.targetAudience}
          onChange={(values) =>
            handleMultiSelectChange("targetAudience", values)
          }
          onBlur={() => handleMultiSelectBlur("targetAudience")}
          error={errors.targetAudience && touched.targetAudience}
          errorMessage="Please select at least one location"
          required
          placeholder="Select locations"
        />
      </div>

      <div>
        <MultiSelect
          label="How do you communicate with your audience?"
          name="communicationChannel"
          options={communicationChannelOptions}
          selectedValues={details.communicationChannel}
          onChange={(values) =>
            handleMultiSelectChange("communicationChannel", values)
          }
          onBlur={() => handleMultiSelectBlur("communicationChannel")}
          error={errors.communicationChannel && touched.communicationChannel}
          errorMessage="Please select at least one communication channel"
          required
          placeholder="Select communication channels"
        />
      </div>

      <div className="border-t border-gray-200 pt-6">
        <div className="flex items-center mb-6">
          <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-3">
            <Lightbulb className="w-5 h-5 text-blue-600" />
          </div>
          <h2 className="font-medium">Tell us about your talents skill</h2>
        </div>

        <div>
          <SkillLevelSelector
            skills={skillSetOptions}
            levels={experienceLevelOptions}
            selectedItems={currentSkillLevels}
            onChange={handleSkillLevelChange}
            onBlur={() => {
              handleMultiSelectBlur("skillSets");
              handleMultiSelectBlur("experienceLevel");
            }}
            error={
              (errors.skillSets && touched.skillSets) ||
              (errors.experienceLevel && touched.experienceLevel)
            }
            required
          />
        </div>
      </div>
    </div>
  );
}

export default AudienceForm;
