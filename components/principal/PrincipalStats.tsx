import { Users, GraduationCap, Clock, Briefcase, LucideIcon } from "lucide-react";

type Metric = {
  icon: LucideIcon;
  iconColor: string;
  value: string;
  label: string;
  trend: string;
  trendColor: string;
};

const metrics: Metric[] = [
  {
    icon: Users,
    iconColor: "text-blueaccent",
    value: "1,245",
    label: "Total learners",
    trend: "↑ 3% vs last term",
    trendColor: "text-greenaccent",
  },
  {
    icon: GraduationCap,
    iconColor: "text-greenaccent",
    value: "98",
    label: "Staff",
    trend: "↑ 2% vs last term",
    trendColor: "text-greenaccent",
  },
  {
    icon: Clock,
    iconColor: "text-purpleaccent",
    value: "25",
    label: "Pending approvals",
    trend: "6 urgent",
    trendColor: "text-purpleaccent",
  },
  {
    icon: Briefcase,
    iconColor: "text-orange",
    value: "₦24.8M",
    label: "Fees collected",
    trend: "78% of target",
    trendColor: "text-orange",
  },
];

export default function PrincipalStats() {
  return (
    <div className="relative -mt-14 px-5">
      <div className="rounded-2xl bg-white shadow-card p-4 grid grid-cols-2 gap-y-4">
        {metrics.map((m) => (
          <div key={m.label} className="flex flex-col gap-1">
            <m.icon size={18} className={m.iconColor} strokeWidth={2.2} />
            <p className="text-[17px] font-extrabold text-slate-900 leading-tight">{m.value}</p>
            <p className="text-[12px] text-slate-500 leading-tight">{m.label}</p>
            <p className={`text-[11px] font-semibold ${m.trendColor}`}>{m.trend}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
