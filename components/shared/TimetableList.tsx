import { ReactNode } from "react";

export type TimetableItem = {
  time: string;
  endTime: string;
  title: string;
  subtitle: string;
  dotColor: string;
  right: ReactNode;
};

export default function TimetableList({
  title,
  linkLabel,
  items,
  footnote,
}: {
  title: string;
  linkLabel: string;
  items: TimetableItem[];
  footnote?: string;
}) {
  return (
    <section className="px-5 mt-8">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-[17px] font-extrabold text-slate-900">{title}</h2>
        <button className="text-sm font-semibold text-greenaccent">{linkLabel}</button>
      </div>

      <div className="rounded-2xl bg-white shadow-card p-4">
        {items.map((item, i) => (
          <div key={item.title + item.time} className="flex gap-3">
            <div className="flex w-14 shrink-0 flex-col items-start">
              <span className="text-[13px] font-bold text-slate-900">{item.time}</span>
              <span className="text-[11px] text-slate-400">&ndash; {item.endTime}</span>
            </div>

            <div className="flex flex-col items-center">
              <span className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${item.dotColor}`} />
              {i < items.length - 1 && <span className="w-px flex-1 bg-slate-200" />}
            </div>

            <div className={`flex-1 flex items-start justify-between gap-2 ${i < items.length - 1 ? "pb-5" : ""}`}>
              <div>
                <p className="text-[14px] font-bold text-slate-900 leading-tight">{item.title}</p>
                <p className="text-[12px] text-slate-500 mt-0.5">{item.subtitle}</p>
              </div>
              <div className="shrink-0">{item.right}</div>
            </div>
          </div>
        ))}

        {footnote && (
          <p className="mt-1 text-[11px] text-slate-400">{footnote}</p>
        )}
      </div>
    </section>
  );
}
