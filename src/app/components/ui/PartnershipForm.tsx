import React from "react";
import { Handshake } from "lucide-react";
import CustomSelect from "./CustomSelect";
import MultiSelect from "./MultiSelect";

interface PartnershipFormProps {
  details: {
    partnershipGoals: string[];
    expectedBenefits: string;
    seeJobs: string;
    additionalNotes?: string;
  };
  setDetails: React.Dispatch<React.SetStateAction<any>>;
  onValidationChange: (isValid: boolean) => void;
}

function PartnershipForm({
  details,
  setDetails,
  onValidationChange,
}: PartnershipFormProps) {
  const [errors, setErrors] = React.useState<Record<string, boolean>>({});
  const [touched, setTouched] = React.useState<Record<string, boolean>>({});

  // Format options for components - at the top to avoid reference errors
  const partnershipBenefitOptions = [
    { value: "network expansion".toLowerCase(), label: "Network Expansion" },
    {
      value: "contractor placement".toLowerCase(),
      label: "Contractor placement",
    },
    { value: "brand visibility".toLowerCase(), label: "Brand Visibility" },
    { value: "revenue sharing".toLowerCase(), label: "Revenue Sharing" },
    { value: "market access".toLowerCase(), label: "Market Access" },
    { value: "knowledge exchange".toLowerCase(), label: "Knowledge Exchange" },
  ];

  const jobOptions = [
    { value: "yes".toLowerCase(), label: "Yes" },
    { value: "no".toLowerCase(), label: "No" },
    { value: "maybe".toLowerCase(), label: "Maybe" },
  ];

  const validateField = (name: string, value: any): boolean => {
    if (Array.isArray(value)) {
      const isValid = value.length > 0;
      setErrors((prev) => ({ ...prev, [name]: !isValid }));
      return isValid;
    }

    if (name === "additionalNotes") return true;

    const isValid = value && value.trim() !== "";
    setErrors((prev) => ({ ...prev, [name]: !isValid }));
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setDetails((prev: any) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
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

  React.useEffect(() => {
    const requiredFields = ["partnershipGoals", "seeJobs"];

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
          <Handshake className="w-5 h-5 text-blue-600" />
        </div>
        <h2 className="font-medium">Partnership details</h2>
      </div>

      <div>
        <MultiSelect
          label="How would being a Circle Partner benefit your company?"
          name="partnershipGoals"
          options={partnershipBenefitOptions}
          selectedValues={details.partnershipGoals}
          onChange={(values) =>
            handleMultiSelectChange("partnershipGoals", values)
          }
          onBlur={() => handleMultiSelectBlur("partnershipGoals")}
          error={errors.partnershipGoals && touched.partnershipGoals}
          errorMessage="Please select at least one benefit"
          required
          placeholder="Select benefits"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Would you like to see jobs available for contractor?{" "}
          <span className="text-red-500">*</span>
        </label>
        <CustomSelect
          name="seeJobs"
          value={details.seeJobs}
          onChange={handleChange}
          onBlur={handleBlur}
          options={jobOptions}
          placeholder="Select an option"
          error={errors.seeJobs && touched.seeJobs}
          required
        />
        <ErrorMessage fieldName="seeJobs" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Additional Notes
        </label>
        <textarea
          name="additionalNotes"
          value={details.additionalNotes}
          onChange={handleChange}
          rows={4}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Any additional information you'd like to share..."
        />
      </div>
    </div>
  );
}

export default PartnershipForm;
