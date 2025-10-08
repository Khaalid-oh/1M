import * as React from "react";
const DeleteIconT = (
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
      d="M1.875 4.25h1.25m0 0h10m-10 0V13a1.25 1.25 0 0 0 1.25 1.25h6.25a1.25 1.25 0 0 0 1.25-1.25V4.25h-8.75ZM5 4.25V3a1.25 1.25 0 0 1 1.25-1.25h2.5A1.25 1.25 0 0 1 10 3v1.25M6.25 7.375v3.75m2.5-3.75v3.75"
    />
  </svg>
);
export default DeleteIconT;
