import { ICON_SIZE } from "../assets/constants";
const ReactHooks = () => {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      height={ICON_SIZE}
      width={ICON_SIZE}
      style={{fill: 'url(#tech-icon-linear-gradient)'}}
    >
      {/* <rect width="512" height="512" fill="#1A1A1A" /> */}
      <g transform="translate(256, 300)">
        <ellipse rx="110" ry="40" stroke="#61DAFB" strokeWidth="10" fill="none" />
        <ellipse rx="110" ry="40" stroke="#61DAFB" strokeWidth="10" fill="none" transform="rotate(60)" />
        <ellipse rx="110" ry="40" stroke="#61DAFB" strokeWidth="10" fill="none" transform="rotate(120)" />
        <circle r="20" fill="#61DAFB" />
      </g>
      <path
        d="M100 0 V150 C100 200, 200 200, 200 160"
        stroke="white"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
      />
      <polygon points="190,140 200,160 210,140" fill="white" />
    </svg>
  );
};

export default ReactHooks;
