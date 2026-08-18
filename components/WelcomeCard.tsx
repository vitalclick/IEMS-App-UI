import { Calendar, Wifi, ChevronDown, GraduationCap } from "lucide-react";

export default function WelcomeCard() {
  return (
    <div className="relative -mt-12 px-5">
      <div className="rounded-2xl bg-white shadow-card p-5">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-teal-light">
            <GraduationCap size={28} className="text-teal" strokeWidth={2} />
          </div>
          <div>
            <p className="text-sm text-slate-500">Good morning,</p>
            <p className="text-lg font-extrabold text-slate-900 leading-snug">
              Mrs. Ngozi Okonkwo <span aria-hidden>👋</span>
            </p>
            <p className="text-sm text-slate-500">Al-Kaija Model School</p>
          </div>
        </div>

        <div className="my-4 h-px bg-slate-100" />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar size={18} className="text-teal" />
            <div>
              <p className="text-xs text-slate-500 leading-tight">Session</p>
              <button className="flex items-center gap-1 text-sm font-bold text-slate-900">
                2024/2025
                <ChevronDown size={14} className="text-slate-400" />
              </button>
            </div>
          </div>

          <div className="h-8 w-px bg-slate-100" />

          <div className="flex items-center gap-2">
            <Wifi size={18} className="text-greenaccent" />
            <div>
              <p className="text-sm font-semibold text-slate-900 leading-tight">
                You&apos;re online
              </p>
              <p className="text-xs text-slate-500">Synced just now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
