import { ChevronDown, ArrowRight } from "lucide-react";
import DonutChart from "@/components/shared/DonutChart";

const attendance = [
  { label: "Present", value: 1207, percent: "97%", color: "#1F9E6E" },
  { label: "Absent", value: 28, percent: "2%", color: "#E8863C" },
  { label: "Late", value: 10, percent: "1%", color: "#E14E4E" },
];

const topPayers = [
  { label: "JSS 3A", percent: 98 },
  { label: "Primary 6B", percent: 93 },
  { label: "SS 2A", percent: 85 },
];

export default function OverviewCards() {
  return (
    <section className="px-5 mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div className="rounded-2xl bg-white shadow-card p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[14px] font-extrabold text-slate-900">Attendance overview</h3>
          <span className="flex items-center gap-0.5 text-[11px] font-semibold text-slate-500">
            Today <ChevronDown size={12} />
          </span>
        </div>

        <div className="flex items-center gap-4">
          <DonutChart
            segments={attendance.map((a) => ({ value: a.value, color: a.color }))}
            centerValue="97%"
            centerLabel="Present"
            size={112}
            strokeWidth={12}
          />
          <div className="flex flex-col gap-2">
            {attendance.map((a) => (
              <div key={a.label} className="flex items-center gap-1.5 text-[12px]">
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: a.color }} />
                <span className="text-slate-700">{a.label}</span>
                <span className="font-semibold text-slate-900">
                  {a.value} ({a.percent})
                </span>
              </div>
            ))}
          </div>
        </div>

        <button className="mt-4 flex items-center gap-1 text-[12px] font-semibold text-blueaccent">
          View attendance report <ArrowRight size={13} />
        </button>
      </div>

      <div className="rounded-2xl bg-white shadow-card p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[14px] font-extrabold text-slate-900">Fees collection</h3>
          <span className="flex items-center gap-0.5 text-[11px] font-semibold text-slate-500">
            This term <ChevronDown size={12} />
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div>
            <p className="text-[11px] text-slate-500">Collected</p>
            <p className="text-[16px] font-extrabold text-slate-900">₦24,800,000</p>
            <p className="text-[11px] text-slate-500">of ₦32,000,000</p>
          </div>
          <DonutChart
            segments={[{ value: 78, color: "#3B7DD8" }]}
            centerValue="78%"
            centerLabel="of target"
            size={96}
            strokeWidth={10}
          />
        </div>

        <div className="mt-3 h-1.5 w-full rounded-full bg-slate-100">
          <div className="h-1.5 w-[78%] rounded-full bg-blueaccent" />
        </div>

        <p className="mt-4 text-[12px] font-bold text-slate-900">Top payers</p>
        <div className="mt-2 flex flex-col gap-2">
          {topPayers.map((p) => (
            <div key={p.label} className="flex items-center gap-2">
              <span className="w-16 shrink-0 text-[11px] text-slate-600">{p.label}</span>
              <div className="h-1.5 flex-1 rounded-full bg-slate-100">
                <div
                  className="h-1.5 rounded-full bg-greenaccent"
                  style={{ width: `${p.percent}%` }}
                />
              </div>
              <span className="w-8 shrink-0 text-right text-[11px] font-semibold text-slate-900">
                {p.percent}%
              </span>
            </div>
          ))}
        </div>

        <button className="mt-4 flex items-center gap-1 text-[12px] font-semibold text-blueaccent">
          View fees report <ArrowRight size={13} />
        </button>
      </div>
    </section>
  );
}
