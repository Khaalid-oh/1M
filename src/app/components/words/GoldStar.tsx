import * as React from "react";
const GoldStar = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill="#FEC84B"
      d="M8.538.61a.5.5 0 0 1 .924 0l2.066 4.967a.5.5 0 0 0 .421.307l5.363.43a.5.5 0 0 1 .286.878l-4.086 3.5a.5.5 0 0 0-.161.496l1.248 5.233a.5.5 0 0 1-.747.543L9.26 14.159a.5.5 0 0 0-.522 0l-4.59 2.804a.5.5 0 0 1-.748-.542l1.248-5.233a.5.5 0 0 0-.16-.496l-4.087-3.5a.5.5 0 0 1 .286-.878l5.363-.43a.5.5 0 0 0 .421-.307L8.538.61Z"
    />
  </svg>
);
export default GoldStar;
