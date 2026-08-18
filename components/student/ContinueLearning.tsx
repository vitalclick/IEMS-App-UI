import { FlaskConical } from "lucide-react";

export default function ContinueLearning() {
  return (
    <section className="px-5 mt-8">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-[17px] font-extrabold text-slate-900">Continue learning</h2>
        <button className="text-sm font-semibold text-greenaccent">Go to library</button>
      </div>

      <div className="rounded-2xl bg-white shadow-card p-4 flex items-center gap-4">
        <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blueaccent-light to-purpleaccent-light">
          <FlaskConical size={26} className="text-blueaccent" strokeWidth={2} />
        </span>

        <div className="flex-1 min-w-0">
          <p className="text-[14px] font-extrabold text-slate-900">Basic Science</p>
          <p className="text-[12px] text-slate-500">Matter and its properties</p>
          <div className="mt-2 h-1.5 w-full rounded-full bg-slate-100">
            <div className="h-1.5 w-[60%] rounded-full bg-greenaccent" />
          </div>
          <p className="mt-1 text-[11px] text-slate-500">60% complete</p>
        </div>

        <div className="flex shrink-0 flex-col items-center gap-1.5">
          <button className="rounded-lg bg-studentteal px-4 py-2 text-[12px] font-bold text-white whitespace-nowrap">
            Continue
          </button>
          <p className="text-[10px] text-slate-500">Lesson 3 &bull; 12 min</p>
        </div>
      </div>
    </section>
  );
}
