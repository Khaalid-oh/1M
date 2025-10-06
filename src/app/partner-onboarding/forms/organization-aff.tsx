import React from "react";
import { ContactDetails } from "@/app/partner-onboarding/page";
import CustomSelect from "@/app/components/chunks/custom-select";
import Building01 from "@/app/components/icons/building-01";

interface OrganizationAffliationFormProps {
  details: ContactDetails;
  setDetails: React.Dispatch<React.SetStateAction<ContactDetails>>;
  onValidationChange: (isValid: boolean) => void;
}

function OrganizationAffliationForm({
  details,
  setDetails,
  onValidationChange,
}: OrganizationAffliationFormProps) {
  const [errors, setErrors] = React.useState<Record<string, boolean>>({});
  const [touched, setTouched] = React.useState<Record<string, boolean>>({});

  const validateField = (name: string, value: string) => {
    if (value.trim() === "") {
      setErrors((prev) => ({ ...prev, [name]: true }));
      return false;
    }

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setErrors((prev) => ({ ...prev, [name]: true }));
        return false;
      }
    }

    if (name === "phoneNumber") {
      const phoneRegex = /^\+\d{1,4}[-\s]?\d{1,4}[-\s]?\d{1,4}[-\s]?\d{1,4}$/;
      if (!phoneRegex.test(value)) {
        setErrors((prev) => ({ ...prev, [name]: true }));
        return false;
      }
    }

    setErrors((prev) => ({ ...prev, [name]: false }));
    return true;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setDetails((prev: ContactDetails) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, value);
  };

  React.useEffect(() => {
    const requiredFields = [
      "contactPerson",
      "organizationName",
      "companyType",
      "role",
      "email",
      "phoneNumber",
    ];

    if (details.companyType === "others - type below") {
      requiredFields.push("companyTypeOther");
    }

    if (details.role === "other") {
      requiredFields.push("roleOther");
    }

    const isValid = requiredFields.every(
      (field) => details[field as keyof ContactDetails]?.trim() !== ""
    );
    onValidationChange(isValid);
  }, [details, onValidationChange]);

  const companyTypes = [
    "Umbrella Company",
    "Accounting Firm",
    "Payroll Services",
    "Professional Network",
    "Support Network",
    "Others - Type below",
  ];

  const roles = [
    "Payroll Administrator",
    "Account Manager",
    "Business Development",
    "Operations Manager",
    "Other",
  ];

  const getErrorMessage = (fieldName: string): string => {
    switch (fieldName) {
      case "email":
        return "Please enter a valid email address";
      case "phoneNumber":
        return "Please enter a valid phone number";
      default:
        return "This field is required";
    }
  };

  const ErrorMessage = ({
    show,
    message,
  }: {
    show: boolean;
    message: string;
  }) => {
    if (!show) return null;
    return <p className="mt-1 text-sm text-red-600">{message}</p>;
  };

  return (
    <div className="text-sm space-y-6">
      <div className="flex items-center mb-6">
        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-3">
          <Building01 />
        </div>
        <h2 className="font-medium">Organization Affiliation</h2>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Name of Contact Person
        </label>
        <input
          type="text"
          name="contactPerson"
          value={details.contactPerson}
          onChange={handleChange}
          onBlur={handleBlur}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          required
          placeholder="James Brown"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Organization Name
        </label>
        <input
          type="text"
          name="organizationName"
          value={details.organizationName}
          onChange={handleChange}
          onBlur={handleBlur}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          required
          placeholder="PayView"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Organization Type
        </label>
        <CustomSelect
          name="companyType"
          value={details.companyType}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Select company type"
          options={companyTypes.map((type) => ({
            value: type.toLowerCase(),
            label: type,
          }))}
          error={!!(errors.companyType && touched.companyType)}
          required
        />
        <ErrorMessage
          show={!!(errors.companyType && touched.companyType)}
          message={getErrorMessage("companyType")}
        />
      </div>

      {details.companyType === "others - type below" && (
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Specify Organization Type
          </label>
          <input
            type="text"
            name="companyTypeOther"
            value={details.companyTypeOther}
            onChange={handleChange}
            onBlur={handleBlur}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
            placeholder="Please specify your organization type"
          />
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Role/Position of Contact Person{" "}
        </label>
        <CustomSelect
          name="role"
          value={details.role}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Select your role as a contact person"
          options={roles.map((role) => ({
            value: role.toLowerCase(),
            label: role,
          }))}
          error={!!(errors.role && touched.role)}
          required
        />
        <ErrorMessage
          show={!!(errors.role && touched.role)}
          message={getErrorMessage("role")}
        />
      </div>

      {details.role === "other" && (
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Specify Role of Contact Person{" "}
          </label>
          <input
            type="text"
            name="roleOther"
            value={details.roleOther}
            onChange={handleChange}
            onBlur={handleBlur}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
            placeholder="Please specify your role as a contact person"
          />
        </div>
      )}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          value={details.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`mt-1 block w-full rounded-md border ${
            errors.email && touched.email ? "border-red-500" : "border-gray-300"
          } px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 ${
            errors.email && touched.email
              ? "focus:ring-red-500"
              : "focus:ring-blue-500"
          }`}
          required
          placeholder="james@payview.co.uk"
        />
        <ErrorMessage
          show={!!(errors.email && touched.email)}
          message={getErrorMessage("email")}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="tel"
          name="phoneNumber"
          value={details.phoneNumber}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`mt-1 block w-full rounded-md border ${
            errors.phoneNumber && touched.phoneNumber
              ? "border-red-500"
              : "border-gray-300"
          } px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 ${
            errors.phoneNumber && touched.phoneNumber
              ? "focus:ring-red-500"
              : "focus:ring-blue-500"
          }`}
          required
          placeholder="+44 123 456 7890"
        />
        <ErrorMessage
          show={!!(errors.phoneNumber && touched.phoneNumber)}
          message={getErrorMessage("phoneNumber")}
        />
      </div>
    </div>
  );
}

export default OrganizationAffliationForm;
