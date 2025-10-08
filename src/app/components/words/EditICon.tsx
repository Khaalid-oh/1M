import * as React from "react";
const EditICon = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="#667085"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M10.625 2.375a1.768 1.768 0 0 1 2.5 2.5l-8.438 8.438-3.437.937.938-3.437 8.437-8.438Z"
    />
  </svg>
);
export default EditICon;
