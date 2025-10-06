import React from "react";
import CustomSelect from "@/app/components/chunks/custom-select";
import MultiSelect from "@/app/components/chunks/mutiselect";
import HandShake from "@/app/components/icons/hand-shake";

interface FinalDetailsFormProps {
  details: {
    partnershipGoals: string[];
    expectedBenefits: string;
    seeJobs: string;
    additionalNotes?: string;
    agreeToTerms: boolean;
  };
  setDetails: React.Dispatch<React.SetStateAction<any>>;
  onValidationChange: (isValid: boolean) => void;
}

function FinalDetailsForm({
  details,
  setDetails,
  onValidationChange,
}: FinalDetailsFormProps) {
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

    if (name === "agreeToTerms") {
      const isValid = value === true;
      setErrors((prev) => ({ ...prev, [name]: !isValid }));
      return isValid;
    }

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

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setDetails((prev: any) => ({ ...prev, [name]: checked }));
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, checked);
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
    const requiredFields = ["partnershipGoals", "seeJobs", "agreeToTerms"];

    const isValid = requiredFields.every((field) => {
      const value = details[field as keyof typeof details];
      if (Array.isArray(value)) {
        return value.length > 0;
      }
      if (field === "agreeToTerms") {
        return value === true;
      }
      return typeof value === "string" && value.trim() !== "";
    });

    onValidationChange(isValid);
  }, [details, onValidationChange]);

  const ErrorMessage = ({ fieldName }: { fieldName: string }) => {
    if (!errors[fieldName] || !touched[fieldName]) return null;
    return (
      <p className="mt-1 text-sm text-red-600">
        {Array.isArray(details[fieldName as keyof typeof details])
          ? `Please select at least one option`
          : fieldName === "agreeToTerms"
          ? "You must agree to the terms of service to continue"
          : "This field is required"}
      </p>
    );
  };

  return (
    <div className="text-sm space-y-6">
      <div className="flex items-center mb-6">
        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-3">
          <HandShake />
        </div>
        <h2 className="font-medium">Final details</h2>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          How did you hear about 1MCircle?
        </label>
        <CustomSelect
          name="hearAbout"
          value={details.expectedBenefits}
          onChange={handleChange}
          onBlur={handleBlur}
          options={[
            { value: "linkedin", label: "LinkedIn" },
            { value: "twitter", label: "Twitter" },
            { value: "facebook", label: "Facebook" },
            { value: "referral", label: "Referral" },
            { value: "google", label: "Google Search" },
            { value: "other", label: "Other" },
          ]}
          placeholder="Select source"
        />
      </div>

      <div>
        <MultiSelect
          label="How would being a Circle Partner benefit your company?"
          name="partnershipGoals"
          options={partnershipBenefitOptions}
          selectedValues={details.partnershipGoals}
          onChange={(values: string[]) =>
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
        <label className="block text-sm font-medium text-gray-700 mb-2">
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

      {/* Terms of Service Section */}
      <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
        <h3 className="text-lg font-bold text-gray-900 mb-4">
          Terms of Service
        </h3>

        <div className="text-sm text-gray-700 space-y-3 mb-4">
          <p>
            This term of service reflects the way in which Tech1M works, the
            laws that apply to our company and all users that interact with our
            product. As a result, this agreement would help define our
            relationship with you as you interact with our services. By agreeing
            to our terms of service, you have certified that,{" "}
            <a
              href="mailto:support@1MCircle"
              className="text-blue-600 hover:underline"
            >
              support@1MCircle
            </a>
          </p>

          <p>
            Clicking on the I agree with terms button establishes that you have
            read through our terms of service and is satisfied with the
            requirement
          </p>
        </div>

        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="agreeToTerms"
            name="agreeToTerms"
            checked={details.agreeToTerms || false}
            onChange={handleCheckboxChange}
            className={`mt-0.5 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer ${
              errors.agreeToTerms && touched.agreeToTerms
                ? "border-red-500"
                : ""
            }`}
          />
          <label
            htmlFor="agreeToTerms"
            className="text-sm text-gray-700 cursor-pointer"
          >
            I agree with the{" "}
            <a
              href="/terms-of-service"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              terms of service and conditions
            </a>
          </label>
        </div>
        <ErrorMessage fieldName="agreeToTerms" />
      </div>
    </div>
  );
}

export default FinalDetailsForm;
