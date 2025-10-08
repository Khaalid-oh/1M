import * as React from "react";
const ImageUpload = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={66}
    height={70}
    fill="none"
    {...props}
  >
    <path
      stroke="#9CA3AF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M57.5 57.5a5 5 0 0 1-5 5h-45a5 5 0 0 1-5-5V30a5 5 0 0 1 5-5h10l5-7.5h15l5 7.5h10a5 5 0 0 1 5 5v27.5Z"
      clipRule="evenodd"
    />
    <path
      stroke="#9CA3AF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M30 52.5c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10Z"
      clipRule="evenodd"
    />
    <path
      stroke="#9CA3AF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M54 5v14M47 12h14"
    />
  </svg>
);
export default ImageUpload;
