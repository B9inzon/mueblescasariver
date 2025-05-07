import React from "react";

export const MenuIcon = ({ width = 24, height = 24, color = "#eeece9" }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 512 512"
        fill={color}
        stroke={color}
        strokeWidth="2"
        className="w-9 h-9"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z"
        ></path>
      </svg>
    </>
  );
};
