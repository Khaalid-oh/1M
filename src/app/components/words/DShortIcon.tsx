import * as React from "react";
const DShortIcon = (
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
      stroke="#10B981"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M24 29.598v-2.8a5.6 5.6 0 0 0-5.6-5.6H7.2a5.6 5.6 0 0 0-5.6 5.6v2.8"
    />
    <path
      stroke="#10B981"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12.8 15.598a5.6 5.6 0 1 0 0-11.2 5.6 5.6 0 0 0 0 11.2Z"
      clipRule="evenodd"
    />
    <path
      stroke="#10B981"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M32.4 29.598v-2.8a5.6 5.6 0 0 0-4.2-5.418M22.6 4.58a5.6 5.6 0 0 1 0 10.85"
    />
  </svg>
);
export default DShortIcon;
