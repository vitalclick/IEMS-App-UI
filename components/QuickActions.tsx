import { CreditCard, Wallet, FileText, CalendarDays, LucideIcon } from "lucide-react";

type Action = {
  icon: LucideIcon;
  label: string;
  sub: string;
  bg: string;
  iconBg: string;
  iconColor: string;
};

const actions: Action[] = [
  {
    icon: CreditCard,
    label: "Pay fees",
    sub: "Make payment",
    bg: "bg-greenaccent-light",
    iconBg: "bg-greenaccent",
    iconColor: "text-white",
  },
  {
    icon: Wallet,
    label: "Wallet",
    sub: "Top up & spend",
    bg: "bg-orange-light",
    iconBg: "bg-orange",
    iconColor: "text-white",
  },
  {
    icon: FileText,
    label: "Reports",
    sub: "View reports",
    bg: "bg-blueaccent-light",
    iconBg: "bg-blueaccent",
    iconColor: "text-white",
  },
  {
    icon: CalendarDays,
    label: "Calendar",
    sub: "School events",
    bg: "bg-purpleaccent-light",
    iconBg: "bg-purpleaccent",
    iconColor: "text-white",
  },
];

export default function QuickActions() {
  return (
    <section className="px-5 mt-8">
      <h2 className="text-[17px] font-extrabold text-slate-900 mb-3">
        Quick actions
      </h2>
      <div className="grid grid-cols-4 gap-3">
        {actions.map((action) => (
          <button
            key={action.label}
            className={`flex flex-col items-center gap-2 rounded-2xl ${action.bg} px-2 py-4 text-center transition-transform active:scale-95`}
          >
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-full ${action.iconBg}`}
            >
              <action.icon size={19} className={action.iconColor} strokeWidth={2.2} />
            </span>
            <span>
              <p className="text-[13px] font-bold text-slate-900 leading-tight">
                {action.label}
              </p>
              <p className="text-[10px] text-slate-500 leading-tight mt-0.5">
                {action.sub}
              </p>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
