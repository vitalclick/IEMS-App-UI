export type DonutSegment = {
  value: number;
  color: string;
};

export default function DonutChart({
  segments,
  size = 128,
  strokeWidth = 14,
  trackColor = "#EEF0F1",
  centerValue,
  centerLabel,
}: {
  segments: DonutSegment[];
  size?: number;
  strokeWidth?: number;
  trackColor?: string;
  centerValue: string;
  centerLabel: string;
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const total = segments.reduce((sum, s) => sum + s.value, 0) || 1;

  let offset = 0;
  const arcs = segments.map((segment, i) => {
    const fraction = segment.value / total;
    const dash = fraction * circumference;
    const arc = (
      <circle
        key={i}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={segment.color}
        strokeWidth={strokeWidth}
        strokeDasharray={`${dash} ${circumference - dash}`}
        strokeDashoffset={-offset}
        strokeLinecap={segments.length > 1 ? "butt" : "round"}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
    );
    offset += dash;
    return arc;
  });

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={trackColor}
          strokeWidth={strokeWidth}
        />
        {arcs}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="text-xl font-extrabold text-slate-900">{centerValue}</p>
        <p className="text-[11px] font-semibold text-slate-500">{centerLabel}</p>
      </div>
    </div>
  );
}
