import * as React from "react";
const FiltersICon = (
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
      d="M5 10h10M2.5 5h15m-10 10h5"
    />
  </svg>
);
export default FiltersICon;
