import { Users } from "lucide-react";

type ClassInfo = {
  name: string;
  learners: number;
  subject: string;
  progress: number;
};

const classes: ClassInfo[] = [
  { name: "JSS 2B", learners: 32, subject: "Mathematics", progress: 78 },
  { name: "JSS 3A", learners: 28, subject: "Mathematics", progress: 65 },
  { name: "Primary 4A", learners: 31, subject: "Mathematics", progress: 84 },
  { name: "Primary 4B", learners: 29, subject: "Mathematics", progress: 70 },
];

export default function MyClasses() {
  return (
    <section className="px-5 mt-8">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-[17px] font-extrabold text-slate-900">My classes</h2>
        <button className="text-sm font-semibold text-greenaccent">View all</button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {classes.map((c) => (
          <div key={c.name} className="rounded-2xl bg-white shadow-card p-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teacherteal/10">
              <Users size={17} className="text-teacherteal" strokeWidth={2.2} />
            </span>
            <p className="mt-2.5 text-[14px] font-extrabold text-slate-900">{c.name}</p>
            <p className="text-[12px] text-slate-500">{c.learners} learners</p>
            <div className="mt-2.5 h-1.5 w-full rounded-full bg-slate-100">
              <div
                className="h-1.5 rounded-full bg-greenaccent"
                style={{ width: `${c.progress}%` }}
              />
            </div>
            <p className="mt-1.5 text-[11px] text-slate-500">{c.subject}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
