export default function SchoolCrest({
  className = "h-14 w-12",
  ringColor = "#0B4A4A",
}: {
  className?: string;
  ringColor?: string;
}) {
  return (
    <svg viewBox="0 0 64 76" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* laurel wreath */}
      <path
        d="M18 50c-7-3-11-10-11-18 0-6 2-11 5-15"
        stroke="#3E7A4E"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M46 50c7-3 11-10 11-18 0-6-2-11-5-15"
        stroke="#3E7A4E"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {[0, 1, 2, 3].map((i) => (
        <ellipse
          key={`l${i}`}
          cx={16 - i * 1.5}
          cy={40 - i * 8}
          rx="3.2"
          ry="1.8"
          fill="#4F9A63"
          transform={`rotate(${-40 + i * 6} ${16 - i * 1.5} ${40 - i * 8})`}
        />
      ))}
      {[0, 1, 2, 3].map((i) => (
        <ellipse
          key={`r${i}`}
          cx={48 + i * 1.5}
          cy={40 - i * 8}
          rx="3.2"
          ry="1.8"
          fill="#4F9A63"
          transform={`rotate(${40 - i * 6} ${48 + i * 1.5} ${40 - i * 8})`}
        />
      ))}

      {/* shield */}
      <path
        d="M32 6 L50 12 V32 C50 44 42 51 32 55 C22 51 14 44 14 32 V12 Z"
        fill="#F6F3E9"
        stroke={ringColor}
        strokeWidth="2"
      />

      {/* torch / flame above the shield */}
      <path
        d="M32 2c-2 3-3 5-3 7a3 3 0 0 0 6 0c0-2-1-4-3-7z"
        fill="#E8863C"
      />

      {/* open book inside the shield */}
      <path
        d="M32 21v14M20 20.5c3-1.3 8-1.3 12 1v14c-4-2.3-9-2.3-12-1V20.5ZM44 20.5c-3-1.3-8-1.3-12 1v14c4-2.3 9-2.3 12-1V20.5Z"
        stroke={ringColor}
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="#FFFFFF"
      />

      {/* ribbon banner */}
      <path
        d="M10 58h44l-4 6 4 6H10l4-6-4-6Z"
        fill={ringColor}
      />
      <text
        x="32"
        y="63.6"
        textAnchor="middle"
        fontSize="6.4"
        fontWeight="700"
        fill="#FFFFFF"
        style={{ letterSpacing: "0.4px" }}
      >
        AL-KAIJA
      </text>
      <text
        x="32"
        y="69.6"
        textAnchor="middle"
        fontSize="4.6"
        fontWeight="600"
        fill="#CFE3DD"
        style={{ letterSpacing: "0.3px" }}
      >
        MODEL SCHOOL
      </text>
    </svg>
  );
}
