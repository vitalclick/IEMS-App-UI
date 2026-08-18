import ChildCard, { Child } from "./ChildCard";

const children: Child[] = [
  {
    name: "Chidi Okonkwo",
    className: "JSS 2 • JSS 2B",
    present: true,
    fees: "\u20A645,500",
    feesOutstanding: true,
    homeworkDue: 2,
    messagesUnread: 1,
    nextClassTime: "11:00",
  },
  {
    name: "Ngozi Okonkwo",
    className: "Primary 4 • Primary 4A",
    present: true,
    fees: "\u20A60.00",
    feesOutstanding: false,
    homeworkDue: 0,
    messagesUnread: 0,
    nextClassTime: "11:30",
  },
];

export default function MyChildrenSection() {
  return (
    <section className="px-5 mt-8">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-[17px] font-extrabold text-slate-900">My children</h2>
        <button className="text-sm font-semibold text-teal">View all</button>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        {children.map((child) => (
          <ChildCard key={child.name} child={child} />
        ))}
      </div>
    </section>
  );
}
