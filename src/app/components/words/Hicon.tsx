import * as React from "react";
const Hicon = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        stroke="#2D264B"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M10 9.167v5M18.333 10a8.333 8.333 0 1 1-16.666 0 8.333 8.333 0 0 1 16.666 0Z"
      />
      <path
        fill="#2D264B"
        d="M10.833 6.667a.833.833 0 1 1-1.666 0 .833.833 0 0 1 1.666 0Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Hicon;
