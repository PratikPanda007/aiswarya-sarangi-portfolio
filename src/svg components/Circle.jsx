import React from "react";

const Circle = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="12" />
      <path
        d="
        M 100, 100
        m -75, 0
        a 75,75 0 1,0 150,0
        a 75,75 0 1,0 -150,0
    "
        fill="currentColor"
      />
    </svg>
  );
};

export default Circle;
