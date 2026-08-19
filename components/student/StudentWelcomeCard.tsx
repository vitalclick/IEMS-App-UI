import { CheckCircle2 } from "lucide-react";

export default function StudentWelcomeCard() {
  return (
    <div className="relative -mt-12 px-5">
      <div className="rounded-2xl bg-white shadow-card p-5">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0 flex-1">
            <p className="text-[12px] text-slate-500 whitespace-nowrap">Good morning,</p>
            <p className="text-[15px] font-extrabold text-slate-900 leading-snug whitespace-nowrap">
              Chidi Okonkwo <span aria-hidden>👋</span>
            </p>
            <p className="text-[12px] text-slate-500 whitespace-nowrap">
              JSS 2B &bull; Al-Kaija Model School
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-2 rounded-xl bg-greenaccent-light px-3 py-2.5">
            <CheckCircle2 size={18} className="text-greenaccent" strokeWidth={2.4} />
            <div>
              <p className="text-[12px] font-bold text-greenaccent leading-tight">
                You&apos;re online
              </p>
              <p className="text-[11px] text-slate-500">Last synced just now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
