import * as React from "react";

const JoblinkIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#0B6CF4"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.25}
      d="M9.173 17.917H8.004c-2.987 0-4.48 0-5.409-.946-.928-.946-.928-2.469-.928-5.513s0-4.566.928-5.512C3.524 5 5.017 5 8.005 5h3.169c2.987 0 4.481 0 5.41.946.714.727.878 1.796.916 3.637v1.25"
    />
    <path
      stroke="#0B6CF4"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.25}
      d="M15.834 15.417h-2.5m0 2.5a2.5 2.5 0 0 1 0-5m2.5 5a2.5 2.5 0 0 0 0-5M13.334 5l-.083-.258c-.413-1.284-.619-1.925-1.11-2.292-.491-.367-1.143-.367-2.448-.367h-.219c-1.304 0-1.957 0-2.448.367-.491.367-.697 1.008-1.11 2.292L5.834 5"
    />
  </svg>
);

export default JoblinkIcon;
