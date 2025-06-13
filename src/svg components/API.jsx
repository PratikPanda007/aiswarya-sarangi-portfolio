import { ICON_SIZE } from "../assets/constants";
const APIIcon = () => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 212 212"
      fill="none"
      height={ICON_SIZE}
      width={ICON_SIZE}
      style={{fill: 'url(#tech-icon-linear-gradient)'}}
    >
      {/* Central gear */}
      <circle cx="100" cy="100" r="30" stroke="#4A90E2" strokeWidth="4" fill="white" />
      <path
        d="M100 70 L100 55 M100 130 L100 145 
           M130 100 L145 100 M70 100 L55 100 
           M120 80 L130 70 M80 120 L70 130 
           M80 80 L70 70 M120 120 L130 130"
        stroke="#4A90E2"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <text x="100" y="107" textAnchor="middle" fill="#4A90E2" fontSize="16" fontFamily="Arial" fontWeight="bold">
        API
      </text>
      {/* External nodes */}
      <circle cx="100" cy="25" r="8" fill="#4A90E2" />
      <circle cx="100" cy="175" r="8" fill="#4A90E2" />
      <circle cx="25" cy="100" r="8" fill="#4A90E2" />
      <circle cx="175" cy="100" r="8" fill="#4A90E2" />
      <circle cx="35" cy="35" r="8" fill="#4A90E2" />
      <circle cx="165" cy="35" r="8" fill="#4A90E2" />
      <circle cx="35" cy="165" r="8" fill="#4A90E2" />
      <circle cx="165" cy="165" r="8" fill="#4A90E2" />
      {/* Connectors */}
      <line x1="100" y1="70" x2="100" y2="25" stroke="#4A90E2" strokeWidth="2" />
      <line x1="100" y1="130" x2="100" y2="175" stroke="#4A90E2" strokeWidth="2" />
      <line x1="70" y1="100" x2="25" y2="100" stroke="#4A90E2" strokeWidth="2" />
      <line x1="130" y1="100" x2="175" y2="100" stroke="#4A90E2" strokeWidth="2" />
      <line x1="80" y1="80" x2="35" y2="35" stroke="#4A90E2" strokeWidth="2" />
      <line x1="120" y1="80" x2="165" y2="35" stroke="#4A90E2" strokeWidth="2" />
      <line x1="80" y1="120" x2="35" y2="165" stroke="#4A90E2" strokeWidth="2" />
      <line x1="120" y1="120" x2="165" y2="165" stroke="#4A90E2" strokeWidth="2" />
    </svg>

  );
};

export default APIIcon;
