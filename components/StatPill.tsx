import { LucideIcon } from "lucide-react";

export default function StatPill({
  icon: Icon,
  iconBg,
  iconColor,
  label,
  value,
  valueColor = "text-slate-900",
}: {
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  label: string;
  value: string;
  valueColor?: string;
}) {
  return (
    <div className="flex flex-1 flex-col items-center gap-2 text-center">
      <div
        className={`flex h-9 w-9 items-center justify-center rounded-lg ${iconBg}`}
      >
        <Icon size={17} className={iconColor} strokeWidth={2.2} />
      </div>
      <div>
        <p className={`text-[13px] font-bold leading-tight ${valueColor}`}>
          {value}
        </p>
        <p className="text-[11px] text-slate-500 leading-tight">{label}</p>
      </div>
    </div>
  );
}
