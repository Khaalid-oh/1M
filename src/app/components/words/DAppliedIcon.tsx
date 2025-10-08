import * as React from "react";
const DAppliedIcon = (
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
      stroke="#7E2410"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.333}
      d="m3 16.998 26.6-12.6-12.6 26.6-2.8-11.2-11.2-2.8Z"
      clipRule="evenodd"
    />
  </svg>
);
export default DAppliedIcon;
