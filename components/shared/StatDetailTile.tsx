import { LucideIcon } from "lucide-react";

export default function StatDetailTile({
  icon: Icon,
  ringColor,
  bg,
  headline,
  label,
  lines,
}: {
  icon: LucideIcon;
  ringColor: string;
  bg: string;
  headline: string;
  label: string;
  lines: string[];
}) {
  return (
    <div className={`flex-1 min-w-[130px] rounded-2xl ${bg} p-3.5`}>
      <div className="flex items-center gap-2">
        <span className={`flex h-8 w-8 items-center justify-center rounded-full border-2 ${ringColor}`}>
          <Icon size={15} className={ringColor.replace("border-", "text-")} strokeWidth={2.4} />
        </span>
        <span className="text-lg font-extrabold text-slate-900">{headline}</span>
      </div>
      <p className="mt-2 text-[13px] font-bold text-slate-900 leading-tight">{label}</p>
      {lines.map((line) => (
        <p key={line} className="text-[11px] text-slate-500 leading-tight mt-0.5">
          {line}
        </p>
      ))}
    </div>
  );
}
