import * as React from "react";
interface CandidatesIconProps extends React.SVGProps<SVGSVGElement> {
  isActive?: boolean;
}

const CandidatesIcon = (props: CandidatesIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <path
      stroke={props.isActive ? "#0B6CF4" : "#7B8794"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 21.932v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2m22 0v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75m-3-3.88a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
    />
  </svg>
);
export default CandidatesIcon;
