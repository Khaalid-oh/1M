import * as React from "react";
interface JobsIconProps extends React.SVGProps<SVGSVGElement> {
  isActive?: boolean;
}
const JobsIcon = (props: JobsIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <path
      stroke={props.isActive ? "#7B8794" : "#0B6CF4"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m12.89 2.382 8 4A2 2 0 0 1 22 8.172v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8v-9.52a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0Z"
      clipRule="evenodd"
    />
    <path
      stroke={props.isActive ? "#7B8794" : "#0B6CF4"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m2.32 7.092 9.68 4.84 9.68-4.84M12 23.692v-11.76M7 4.432l10 5"
    />
  </svg>
);
export default JobsIcon;
