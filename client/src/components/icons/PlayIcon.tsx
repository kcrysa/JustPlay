import { CSSProperties, FC } from "react";

interface IconProps {
  iconStyle?: CSSProperties | undefined;
}

export const PlayIcon: FC<IconProps> = ({ iconStyle }) => {
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
          x1="28.1"
          y1="139.87"
          x2="115.82"
          y2="52.16"
        >
          <stop
            offset="0"
            style={{ stopColor: "rgb(51.764706%,0%,0%)", stopOpacity: 1 }}
          />
          <stop
            offset="1"
            style={{ stopColor: "rgb(91.372549%,0%,0%)", stopOpacity: 1 }}
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
          d="M 52 37.703125 L 52 153.796875 C 51.921875 159.1875 56.109375 163.6875 61.515625 164 C 63.78125 164.078125 66.015625 163.375 67.8125 162 C 68.015625 161.84375 69.203125 161 69.203125 161 L 143.46875 105.796875 L 145.65625 104.15625 C 148.375 102.359375 150.015625 99.296875 150 96.03125 C 149.984375 92.765625 148.328125 89.734375 145.578125 87.953125 L 143.46875 86.375 L 69.46875 31.3125 C 66.390625 28.796875 62.5625 26.9375 58.09375 28.90625 C 54.359375 30.6875 52.015625 34.484375 52.09375 38.625 L 52.09375 39.40625 "
          transform="matrix(0.25,0,0,0.25,0,0)"
        />
      </g>
    </svg>
  );
};
