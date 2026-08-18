import { Calendar, Wifi, ChevronDown } from "lucide-react";
import SchoolCrest from "@/components/shared/SchoolCrest";

export default function TeacherWelcomeCard() {
  return (
    <div className="relative -mt-12 px-5">
      <div className="rounded-2xl bg-white shadow-card p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-4">
            <SchoolCrest className="h-14 w-14 shrink-0" />
            <div>
              <p className="text-sm text-slate-500">Good morning,</p>
              <p className="text-lg font-extrabold text-slate-900 leading-snug">
                Mr. Tunde Adeyemi <span aria-hidden>👋</span>
              </p>
              <p className="text-sm text-slate-500">Teacher &bull; Mathematics</p>
              <p className="text-sm text-slate-500">Al-Kaija Model School</p>
            </div>
          </div>

          <div className="flex shrink-0 flex-col items-end gap-2 border-l border-slate-100 pl-3">
            <div className="flex items-center gap-1.5">
              <Calendar size={15} className="text-teacherteal" />
              <button className="flex items-center gap-1 text-[13px] font-bold text-slate-900 whitespace-nowrap">
                2024/2025
                <ChevronDown size={13} className="text-slate-400" />
              </button>
            </div>
            <div className="flex items-center gap-1.5">
              <Wifi size={15} className="text-greenaccent" />
              <div className="text-right">
                <p className="text-[12px] font-semibold text-slate-900 leading-tight">
                  You&apos;re online
                </p>
                <p className="text-[11px] text-slate-500">Synced just now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
