"use client";
import React, { useState } from "react";
// import OrganizationForm from "../../components/ui/OrganizationForm";
// import AudienceForm from "../../components/ui/AudienceForm";
// import PartnershipForm from "../../components/ui/PartnershipForm";
import { ArrowRight, ChevronLeft, ChevronRight, UserIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import OrganizationAffliationForm from "./forms/organization-aff";
import Navbar from "../components/navbar/navbar";
import AboutOrganizationForm from "./forms/about-organization";
import FinalDetailsForm from "./forms/final-details";

interface FormStep {
  id: number;
  title: string;
  isCompleted: boolean;
}

export interface ContactDetails {
  contactPerson: string;
  organizationName: string;
  email: string;
  phoneNumber: string;
  companyType: string;
  companyTypeOther: string;
  role: string;
  roleOther: string;
}

interface OrganizationDetails {
  description: string;
  websiteLink: string;
  organizationSize: string;
  organizationType: string[];
  organizationLocation: string[];
  primaryIndustry: string;
}

interface AudienceDetails {
  targetAudience: string[];
  audienceSize: string;
  engagementRate: string;
  communicationChannel: string[];
  skillSets: string[];
  experienceLevel: string;
}

interface PartnershipDetails {
  partnershipGoals: string[];
  expectedBenefits: string;
  seeJobs: string;
  additionalNotes?: string;
  agreeToTerms: boolean;
}

const PartnerApplicationForm = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [contactDetails, setContactDetails] = useState<ContactDetails>({
    contactPerson: "",
    organizationName: "",
    email: "",
    phoneNumber: "",
    companyType: "",
    companyTypeOther: "",
    role: "",
    roleOther: "",
  });

  const [organizationDetails, setOrganizationDetails] =
    useState<OrganizationDetails>({
      description: "",
      websiteLink: "",
      organizationSize: "",
      organizationType: [],
      organizationLocation: [],
      primaryIndustry: "",
    });

  const [audienceDetails, setAudienceDetails] = useState<AudienceDetails>({
    targetAudience: [],
    audienceSize: "",
    engagementRate: "",
    communicationChannel: [],
    skillSets: [],
    experienceLevel: "",
  });

  const [partnershipDetails, setPartnershipDetails] =
    useState<PartnershipDetails>({
      partnershipGoals: [],
      expectedBenefits: "",
      seeJobs: "",
      additionalNotes: "",
      agreeToTerms: false,
    });

  const [isFormValid, setIsFormValid] = useState(false);

  const [stepValidation, setStepValidation] = useState({
    1: false, // Contact Form
    2: false, // Organization Form
    3: false, // Final Details Form
  });

  const [submitError, setSubmitError] = useState<string | null>(null);

  const steps: FormStep[] = [
    { id: 1, title: "Organization Affiliation", isCompleted: false },
    { id: 2, title: "Organization Details", isCompleted: false },
    { id: 3, title: "Final Details", isCompleted: false },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    const isAllStepsValid = Object.values(stepValidation).every(
      (isValid) => isValid
    );

    if (!isAllStepsValid) {
      setSubmitError("Please complete all required fields before submitting.");
      return;
    }
    router.push("/thank-you");
  };

  const handleStepClick = (stepId: number) => {
    if (stepId <= currentStep + 1) {
      setCurrentStep(stepId);
    }
  };

  const handleContinue = () => {
    if (
      currentStep < steps.length &&
      stepValidation[currentStep as keyof typeof stepValidation]
    ) {
      setCurrentStep(currentStep + 1);
    }
  };

  const progressPercentage = (currentStep / steps.length) * 100;

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <OrganizationAffliationForm
            details={contactDetails}
            setDetails={setContactDetails}
            onValidationChange={(isValid: boolean) => {
              setStepValidation((prev) => {
                if (prev[1] === isValid) return prev;
                return { ...prev, 1: isValid };
              });
            }}
          />
        );
      case 2:
        return (
          <AboutOrganizationForm
            details={organizationDetails}
            setDetails={setOrganizationDetails}
            onValidationChange={(isValid: boolean) => {
              setStepValidation((prev) => {
                if (prev[2] === isValid) return prev;
                return { ...prev, 2: isValid };
              });
            }}
          />
        );
      case 3:
        return (
          <FinalDetailsForm
            details={partnershipDetails}
            setDetails={setPartnershipDetails}
            onValidationChange={(isValid: boolean) => {
              setStepValidation((prev) => {
                if (prev[3] === isValid) return prev;
                return { ...prev, 3: isValid };
              });
            }}
          />
        );
      //   case 4:
      //     return (
      //       <PartnershipForm
      //         details={partnershipDetails}
      //         setDetails={setPartnershipDetails}
      //         onValidationChange={(isValid: boolean) => {
      //           setStepValidation((prev) => {
      //             if (prev[4] === isValid) return prev;
      //             return { ...prev, 4: isValid };
      //           });
      //         }}
      //       />
      //     );
      default:
        return null;
    }
  };

  return (
    <div className="bg-bg-white h-screen text-sm mx-auto">
      <Navbar />
      <div className="flex items-start justify-between my-6 px-14">
        <button
          onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Back</span>
        </button>
        <div className="flex flex-col gap-2 -translate-x-48 items-start">
          <h1 className="text-2xl font-semibold text-center flex-1">
            Organization Partner Onboarding
          </h1>
          <p className="text-gray-600 font-light">
            Please fill in the relevant details to become a organization partner
          </p>
        </div>
        {currentStep === steps.length ? (
          <button
            onClick={handleSubmit}
            type="submit"
            form="partner-form"
            className="flex items-center gap-2 px-8 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
            <ArrowRight className="w-5 h-5" />
          </button>
        ) : (
          <button
            onClick={handleContinue}
            disabled={
              !stepValidation[currentStep as keyof typeof stepValidation]
            }
            className={`flex items-center gap-2 px-8 py-2 ${
              !stepValidation[currentStep as keyof typeof stepValidation]
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            } text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
          >
            Continue
            <ArrowRight className="w-5 h-5" />
          </button>
        )}
      </div>

      <div className="max-w-4xl mx-auto flex items-center justify-between mb-8">
        {steps.map((step) => (
          <React.Fragment key={step.id}>
            <div
              className="flex items-center cursor-pointer"
              onClick={() => handleStepClick(step.id)}
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  currentStep === step.id
                    ? "bg-blue-600 text-white text-sm"
                    : currentStep > step.id &&
                      stepValidation[step.id as keyof typeof stepValidation]
                    ? "bg-green-500 text-white text-sm"
                    : step.id === currentStep + 1 &&
                      stepValidation[currentStep as keyof typeof stepValidation]
                    ? "bg-gray-300 text-sm"
                    : "bg-gray-200 text-sm cursor-not-allowed"
                }`}
              >
                {step.id}
              </div>
              <span className="ml-2 text-sm text-gray-600">{step.title}</span>
            </div>
            {step.id !== steps.length && (
              <ChevronRight className="text-gray-400 mx-6 w-5 h-5" />
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="max-w-4xl mx-auto w-full bg-gray-200 h-2 mb-6">
        <div
          className="h-full bg-green-600 transition-all duration-300 ease-in-out"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-12 px-16 border border-gray-200">
        <form id="partner-form" onSubmit={handleSubmit}>
          {renderStepContent()}
          {submitError && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
              <p className="text-sm text-red-600">{submitError}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default PartnerApplicationForm;
