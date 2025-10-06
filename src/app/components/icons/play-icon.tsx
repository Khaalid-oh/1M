import * as React from "react";
const PlayIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <g
      stroke="#344054"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      clipPath="url(#a)"
    >
      <path d="M10 18.333a8.333 8.333 0 1 0 0-16.666 8.333 8.333 0 0 0 0 16.666Z" />
      <path d="M7.917 7.471c0-.398 0-.596.083-.708a.417.417 0 0 1 .304-.165c.138-.01.305.097.64.312l3.934 2.53c.29.186.435.28.485.398a.416.416 0 0 1 0 .324c-.05.119-.195.212-.485.399L8.944 13.09c-.335.215-.502.322-.64.312A.416.416 0 0 1 8 13.237c-.083-.111-.083-.31-.083-.708V7.47Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default PlayIcon;
