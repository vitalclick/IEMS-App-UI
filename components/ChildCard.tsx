import { MoreVertical, CreditCard, BookOpen, MessageCircle, CalendarClock } from "lucide-react";
import Avatar from "./Avatar";
import StatPill from "./StatPill";

export type Child = {
  name: string;
  className: string;
  present: boolean;
  fees: string;
  feesOutstanding: boolean;
  homeworkDue: number;
  messagesUnread: number;
  nextClassTime: string;
};

export default function ChildCard({ child }: { child: Child }) {
  return (
    <div className="rounded-2xl bg-white shadow-card p-4 flex-1 min-w-[260px]">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <Avatar name={child.name} online={child.present} />
          <div>
            <p className="font-extrabold text-slate-900 text-[15px] leading-tight">
              {child.name}
            </p>
            <p className="text-xs text-slate-500 mt-0.5">{child.className}</p>
            <span className="mt-1.5 inline-block rounded-full bg-greenaccent-light px-2.5 py-1 text-[11px] font-semibold text-greenaccent">
              Present today
            </span>
          </div>
        </div>
        <button aria-label="More options" className="text-slate-400 hover:text-slate-600">
          <MoreVertical size={18} />
        </button>
      </div>

      <div className="my-4 h-px bg-slate-100" />

      <div className="flex items-start justify-between gap-1">
        <StatPill
          icon={CreditCard}
          iconBg="bg-brandred-light"
          iconColor="text-brandred"
          value={child.fees}
          label={child.feesOutstanding ? "Outstanding" : "Outstanding"}
          valueColor={child.feesOutstanding ? "text-brandred" : "text-slate-900"}
        />
        <StatPill
          icon={BookOpen}
          iconBg="bg-teal-light"
          iconColor="text-teal"
          value={String(child.homeworkDue)}
          label="Due"
        />
        <StatPill
          icon={MessageCircle}
          iconBg="bg-blueaccent-light"
          iconColor="text-blueaccent"
          value={String(child.messagesUnread)}
          label="Unread"
        />
        <StatPill
          icon={CalendarClock}
          iconBg="bg-orange-light"
          iconColor="text-orange"
          value="Today"
          label={`Next: ${child.nextClassTime}`}
        />
      </div>
    </div>
  );
}
