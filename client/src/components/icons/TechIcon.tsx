import { CSSProperties, FC } from "react";

interface IconProps {
  iconStyle?: CSSProperties | undefined;
}

export const TechIcon: FC<IconProps> = ({ iconStyle }) => {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ ...iconStyle }}
    >
      <path
        d="M7 8L3 12L7 16"
        stroke="#000000"
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 8L21 12L17 16"
        stroke="#000000"
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 4L9.8589 19.4548"
        stroke="#000000"
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
