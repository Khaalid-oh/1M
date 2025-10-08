import * as React from "react";
const DPlusUserIcon = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={34}
    fill="none"
    {...props}
  >
    <path
      stroke="#25677D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M22.6 29.598v-2.8a5.6 5.6 0 0 0-5.6-5.6H7.2a5.6 5.6 0 0 0-5.6 5.6v2.8"
    />
    <path
      stroke="#25677D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12.1 15.598a5.6 5.6 0 1 0 0-11.2 5.6 5.6 0 0 0 0 11.2Z"
      clipRule="evenodd"
    />
    <path
      stroke="#25677D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M28.2 11.398v8.4M32.4 15.598H24"
    />
  </svg>
);
export default DPlusUserIcon;
