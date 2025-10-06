import React, { useState } from "react";
import MultiSelect from "@/app/components/chunks/mutiselect";
import CustomSelect from "@/app/components/chunks/custom-select";
import Building01 from "@/app/components/icons/building-01";

interface AboutOrganizationFormProps {
  details: {
    description: string;
    websiteLink: string;
    organizationSize: string;
    organizationType: string[];
    organizationLocation: string[];
    primaryIndustry: string;
  };
  setDetails: React.Dispatch<React.SetStateAction<any>>;
  onValidationChange: (isValid: boolean) => void;
}

function AboutOrganizationForm({
  details,
  setDetails,
  onValidationChange,
}: AboutOrganizationFormProps) {
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = (name: string, value: any): boolean => {
    if (name === "websiteLink") {
      const urlRegex =
        /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
      const isValid = urlRegex.test(value);
      setErrors((prev) => ({ ...prev, [name]: !isValid }));
      return isValid;
    }

    if (name === "organizationType" || name === "organizationLocation") {
      const isValid = value.length > 0;
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

  const handleMultiSelectChange = (name: string, values: string[]) => {
    setDetails((prev: AboutOrganizationFormProps["details"]) => ({
      ...prev,
      [name]: values,
    }));
    validateField(name, values);
  };

  const handleBlur = (name: string) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, details[name as keyof typeof details]);
  };

  React.useEffect(() => {
    const requiredFields = [
      "description",
      "websiteLink",
      "organizationType",
      "organizationLocation",
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

  const organizationTypes = [
    { value: "professional", label: "Professional" },
    { value: "social", label: "Social" },
    { value: "industry-specific", label: "Industry-specific" },
    { value: "educational", label: "Educational" },
    { value: "community", label: "Community" },
  ];

  const locations = [
    { value: "united kingdom", label: "United Kingdom" },
    { value: "united states", label: "United States" },
    { value: "europe", label: "Europe" },
    { value: "asia", label: "Asia" },
    { value: "africa", label: "Africa" },
    { value: "australia", label: "Australia" },
  ];

  const industries = [
    { value: "technology", label: "Technology" },
    { value: "finance", label: "Finance" },
    { value: "healthcare", label: "Healthcare" },
    { value: "education", label: "Education" },
    { value: "manufacturing", label: "Manufacturing" },
    { value: "retail", label: "Retail" },
    { value: "other", label: "Other" },
  ];

  // Format organization size options for CustomSelect
  const organizationSizeOptions = [
    { value: "0-10", label: "1-10 members" },
    { value: "11-50", label: "11-50 members" },
    { value: "51-100", label: "51-100 members" },
    { value: "101+", label: "101+ members" },
  ];

  return (
    <div className="text-sm space-y-6">
      <div className="flex items-center mb-6">
        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-3">
          <Building01 />
        </div>
        <h2 className="font-medium">Tell us about your organization</h2>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Brief description of your organization{" "}
        </label>
        <textarea
          name="description"
          value={details.description}
          onChange={handleChange}
          onBlur={(e) => handleBlur(e.target.name)}
          rows={4}
          className={`mt-1 block w-full rounded-md border ${
            errors.description && touched.description
              ? "border-red-500"
              : "border-gray-300"
          } px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500`}
          placeholder="Describe this organization, tell us what you do."
          required
        />
        {errors.description && touched.description && (
          <p className="mt-1 text-sm text-red-600">This field is required</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Organization Website Link
        </label>
        <input
          type="url"
          name="websiteLink"
          value={details.websiteLink}
          onChange={handleChange}
          onBlur={(e) => handleBlur(e.target.name)}
          className={`mt-1 block w-full rounded-md border ${
            errors.websiteLink && touched.websiteLink
              ? "border-red-500"
              : "border-gray-300"
          } px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500`}
          placeholder="https://example.com"
          required
        />
        {errors.websiteLink && touched.websiteLink && (
          <p className="mt-1 text-sm text-red-600">
            Please enter a valid organization website URL
          </p>
        )}
      </div>

      {/* <div>
        <label className="block text-sm font-medium text-gray-700">
          Organization Size
        </label>
        <CustomSelect
          name="organizationSize"
          value={details.organizationSize}
          onChange={handleChange}
          onBlur={(e) => handleBlur(e.target.name)}
          options={organizationSizeOptions}
          placeholder="Select organization size"
          error={errors.organizationSize && touched.organizationSize}
          required
        />
        {errors.organizationSize && touched.organizationSize && (
          <p className="mt-1 text-sm text-red-600">This field is required</p>
        )}
      </div> */}

      <div>
        <MultiSelect
          label="Organization Type"
          name="organizationType"
          options={organizationTypes}
          selectedValues={details.organizationType}
          onChange={(values) =>
            handleMultiSelectChange("organizationType", values)
          }
          onBlur={() => handleBlur("organizationType")}
          error={errors.organizationType && touched.organizationType}
          errorMessage="Please select at least one type"
          required
          placeholder="Select organization types"
        />
      </div>

      <div>
        <MultiSelect
          label="Organization Location"
          name="organizationLocation"
          options={locations}
          selectedValues={details.organizationLocation}
          onChange={(values) =>
            handleMultiSelectChange("organizationLocation", values)
          }
          onBlur={() => handleBlur("organizationLocation")}
          error={errors.organizationLocation && touched.organizationLocation}
          errorMessage="Please select at least one location"
          required
          placeholder="Select organization locations"
        />
      </div>

      {/* <div>
        <label className="block text-sm font-medium text-gray-700">
          Primary Industry
        </label>
        <CustomSelect
          name="primaryIndustry"
          value={details.primaryIndustry}
          onChange={handleChange}
          onBlur={(e) => handleBlur(e.target.name)}
          options={industries}
          placeholder="Select primary industry"
          error={errors.primaryIndustry && touched.primaryIndustry}
          required
        />
        {errors.primaryIndustry && touched.primaryIndustry && (
          <p className="mt-1 text-sm text-red-600">This field is required</p>
        )}
      </div> */}
    </div>
  );
}

export default AboutOrganizationForm;
