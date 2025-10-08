import * as React from "react";
const GlobeIcon = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <rect width={24} height={24} fill="#F4EBFF" rx={12} />
    <g clipPath="url(#a)">
      <path
        stroke="#2563EB"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 7a7.65 7.65 0 0 1 2 5 7.65 7.65 0 0 1-2 5m0-10a7.65 7.65 0 0 0-2 5 7.65 7.65 0 0 0 2 5m0-10a5 5 0 0 0 0 10m0-10a5 5 0 0 1 0 10m-4.75-6.5h9.5m-9.5 3h9.5"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M6 6h12v12H6z" />
      </clipPath>
    </defs>
  </svg>
);
export default GlobeIcon;
