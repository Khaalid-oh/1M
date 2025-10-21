import * as React from "react";
const ClickIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#10B981"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.289 3.5V2m-3.94 3.06L4.29 4m1.06 9-1.06 1.06m9-9L14.349 4M3.79 9h-1.5m6.5-.5 4.11 12.778 2.89-2.89L19.399 22l2.89-2.889-3.612-3.611 2.89-2.889L8.788 8.5Z"
    />
  </svg>
);
export default ClickIcon;
