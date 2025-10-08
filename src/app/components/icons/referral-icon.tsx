import * as React from "react";

interface ReferralIconProps extends React.SVGProps<SVGSVGElement> {
  isActive?: boolean;
}

const ReferralIcon = (props: ReferralIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.isActive ? "#0B6CF4" : "#7B8794"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m16 18 2 2 4-4m-10-1H8c-1.864 0-2.796 0-3.53.305a4 4 0 0 0-2.166 2.164C2 18.204 2 19.136 2 21M15.5 3.29a4.001 4.001 0 0 1 0 7.42M13.5 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
    />
  </svg>
);
export default ReferralIcon;
