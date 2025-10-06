import * as React from "react";

interface DashboardIconProps extends React.SVGProps<SVGSVGElement> {
  isActive?: boolean;
}

const DashboardIcon = (props: DashboardIconProps) => (
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
      d="m3 9.932 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-11Z"
      clipRule="evenodd"
    />
    <path
      stroke={props.isActive ? "#7B8794" : "#0B6CF4"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 22.932v-10h6v10"
    />
  </svg>
);
export default DashboardIcon;
