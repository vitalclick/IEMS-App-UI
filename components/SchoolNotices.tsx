import { Megaphone, Users } from "lucide-react";

type Notice = {
  icon: typeof Megaphone;
  iconBg: string;
  iconColor: string;
  title: string;
  body: string;
  time: string;
  unread: boolean;
};

const notices: Notice[] = [
  {
    icon: Megaphone,
    iconBg: "bg-teal-light",
    iconColor: "text-teal",
    title: "Mid-term break dates",
    body: "Please note the school closes on Friday 12 September and reopens on Monday 22 September.",
    time: "2h ago",
    unread: true,
  },
  {
    icon: Users,
    iconBg: "bg-orange-light",
    iconColor: "text-orange",
    title: "PTA meeting — Saturday",
    body: "All parents are invited to the termly PTA meeting in the hall at 10:00 AM.",
    time: "1d ago",
    unread: true,
  },
];

export default function SchoolNotices() {
  return (
    <section className="px-5 mt-8">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-[17px] font-extrabold text-slate-900">School notices</h2>
        <button className="text-sm font-semibold text-teal">View all</button>
      </div>

      <div className="rounded-2xl bg-white shadow-card divide-y divide-slate-100">
        {notices.map((notice) => (
          <div key={notice.title} className="flex gap-3 p-4">
            <span
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${notice.iconBg}`}
            >
              <notice.icon size={18} className={notice.iconColor} strokeWidth={2.2} />
            </span>
            <div className="flex-1">
              <div className="flex items-start justify-between gap-2">
                <p className="font-bold text-slate-900 text-[14px] leading-snug">
                  {notice.title}
                </p>
                <span className="shrink-0 text-[11px] text-slate-400">{notice.time}</span>
              </div>
              <p className="text-[13px] text-slate-500 leading-snug mt-1">
                {notice.body}
              </p>
            </div>
            {notice.unread && (
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-greenaccent" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
