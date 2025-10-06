import * as React from "react";
const Building01 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#0B6CF4"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 11H5.1c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C3.5 11.76 3.5 12.04 3.5 12.6V21M17 11h2.9c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437c.109.214.109.494.109 1.054V21M17 21V6.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C15.48 3 14.92 3 13.8 3h-2.6c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C8 4.52 8 5.08 8 6.2V21m14.5 0h-20m9-14h2m-2 4h2m-2 4h2"
    />
  </svg>
);
export default Building01;
