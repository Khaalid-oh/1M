import * as React from "react";
const EyeIcon = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      stroke="#0B6CF4"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M1.815 9.535c-.102-.162-.153-.243-.182-.367a.88.88 0 0 1 0-.336c.029-.124.08-.205.182-.367C2.66 7.13 5.172 3.75 9 3.75c3.83 0 6.341 3.379 7.186 4.715.102.162.153.243.181.367a.879.879 0 0 1 0 .336c-.028.124-.08.205-.181.367C15.34 10.87 12.829 14.25 9 14.25c-3.828 0-6.34-3.379-7.185-4.715Z"
    />
    <path
      stroke="#0B6CF4"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
    />
  </svg>
);
export default EyeIcon;
