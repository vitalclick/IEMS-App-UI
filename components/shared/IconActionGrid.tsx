import { LucideIcon } from "lucide-react";

export type IconAction = {
  icon: LucideIcon;
  label: string;
  ringColor: string;
  iconColor: string;
  badge?: number;
};

export default function IconActionGrid({
  title,
  actions,
  actionLabel = "Customize",
  columns = "grid-cols-4",
}: {
  title: string;
  actions: IconAction[];
  actionLabel?: string;
  columns?: string;
}) {
  return (
    <section className="px-5 mt-8">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-[17px] font-extrabold text-slate-900">{title}</h2>
        <button className="text-sm font-semibold text-blueaccent">{actionLabel}</button>
      </div>
      <div className={`grid ${columns} gap-y-4 gap-x-2`}>
        {actions.map((action) => (
          <button key={action.label} className="flex flex-col items-center gap-2 text-center">
            <span className={`relative flex h-11 w-11 items-center justify-center rounded-full border-2 ${action.ringColor}`}>
              <action.icon size={19} className={action.iconColor} strokeWidth={2.2} />
              {action.badge ? (
                <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-orange text-[9px] font-bold text-white">
                  {action.badge}
                </span>
              ) : null}
            </span>
            <span className="text-[11px] font-semibold text-slate-700 leading-tight">
              {action.label}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
