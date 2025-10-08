import * as React from "react";
const SortDesc = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#344054"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.67}
      d="M2.5 3.333h10.833M2.5 6.667H10M2.5 10H10m4.167-3.333v10m0 0-3.334-3.334m3.334 3.334 3.333-3.334"
    />
  </svg>
);
export default SortDesc;
