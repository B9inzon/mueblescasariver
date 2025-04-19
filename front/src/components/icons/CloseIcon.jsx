import React from "react";

export const CloseIcon = ({ width = 24, height = 24, color = "#3c3a36" }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill={color}
        stroke={color}
        strokeWidth="0"
        className="w-9 h-9"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
      </svg>
    </>
  );
};
