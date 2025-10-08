import * as React from "react";
const AbegIcon = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={30}
    height={29}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      d="M0 0h28.475v28.475H0z"
      transform="translate(.763 .263)"
    />
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#b" transform="scale(.01754)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="b"
        width={57}
        height={57}
      />
    </defs>
  </svg>
);
export default AbegIcon;
