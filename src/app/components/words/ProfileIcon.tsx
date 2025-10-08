import * as React from "react";
const SvgComponent = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#344054"
      d="M15 6a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5h-2Zm-3 3a3 3 0 0 1-3-3H7a5 5 0 0 0 5 5V9ZM9 6a3 3 0 0 1 3-3V1a5 5 0 0 0-5 5h2Zm3-3a3 3 0 0 1 3 3h2a5 5 0 0 0-5-5v2ZM9 14h6v-2H9v2Zm6 6H9v2h6v-2Zm-6 0a3 3 0 0 1-3-3H4a5 5 0 0 0 5 5v-2Zm9-3a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5h-2Zm-3-3a3 3 0 0 1 3 3h2a5 5 0 0 0-5-5v2Zm-6-2a5 5 0 0 0-5 5h2a3 3 0 0 1 3-3v-2Z"
    />
  </svg>
);
export default SvgComponent;
