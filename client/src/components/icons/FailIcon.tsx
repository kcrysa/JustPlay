import { CSSProperties, FC } from "react";

interface IconProps {
  iconStyle?: CSSProperties | undefined;
}

export const FailIcon: FC<IconProps> = ({ iconStyle }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="48px"
      height="48px"
      viewBox="0 0 48 48"
      version="1.1"
      style={{ ...iconStyle }}
    >
      <defs>
        <linearGradient
          id="linear0"
          gradientUnits="userSpaceOnUse"
          x1="39.48"
          y1="152.52"
          x2="152.52"
          y2="39.48"
        >
          <stop
            offset="0"
            style={{ stopColor: "rgb(55.686275%,0%,0%)", stopOpacity: 1 }}
          />
          <stop
            offset="1"
            style={{ stopColor: "rgb(95.294118%,0%,0%)", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      <g id="surface1">
        <path
          style={{
            fill: "none",
            strokeWidth: 8,
            strokeLinecap: "round",
            strokeLinejoin: "miter",
            stroke: "url(#linear0)",
            strokeMiterlimit: 10,
          }}
          d="M 60.3125 131.6875 L 131.6875 60.3125 M 131.6875 131.6875 L 60.3125 60.3125 M 96 171.9375 C 137.9375 171.9375 171.9375 137.9375 171.9375 96 C 171.9375 54.0625 137.9375 20.0625 96 20.0625 C 54.0625 20.0625 20.0625 54.0625 20.0625 96 C 20.078125 137.9375 54.0625 171.921875 96 171.9375 Z M 96 171.9375 "
          transform="matrix(0.25,0,0,0.25,0,0)"
        />
      </g>
    </svg>
  );
};
