import { Calendar, Wifi, ChevronDown } from "lucide-react";
import SchoolCrest from "@/components/shared/SchoolCrest";

export default function TeacherWelcomeCard() {
  return (
    <div className="relative -mt-12 px-5">
      <div className="rounded-2xl bg-white shadow-card p-4">
        <div className="flex items-center gap-3">
          <div className="flex flex-1 items-center gap-3 min-w-0">
            <SchoolCrest className="h-14 w-12 shrink-0" />
            <div className="min-w-0">
              <p className="text-[12px] text-slate-500 whitespace-nowrap">Good morning,</p>
              <p className="text-[14px] font-extrabold text-slate-900 leading-snug whitespace-nowrap">
                Mr. Tunde Adeyemi <span aria-hidden>👋</span>
              </p>
              <p className="text-[11px] text-slate-500 whitespace-nowrap">Teacher &bull; Mathematics</p>
              <p className="text-[11px] font-medium text-slate-600 whitespace-nowrap">
                Al-Kaija Model School
              </p>
            </div>
          </div>

          <div className="flex shrink-0 flex-col gap-2 border-l border-slate-100 pl-3">
            <div className="flex items-center gap-1.5">
              <Calendar size={14} className="text-teacherteal shrink-0" />
              <div>
                <p className="text-[10px] text-slate-500 leading-tight">Session</p>
                <button className="flex items-center gap-1 text-[12px] font-bold text-slate-900 whitespace-nowrap">
                  2024/2025
                  <ChevronDown size={12} className="text-slate-400" />
                </button>
              </div>
            </div>
            <div className="h-px bg-slate-100" />
            <div className="flex items-center gap-1.5">
              <Wifi size={14} className="text-greenaccent shrink-0" />
              <div>
                <p className="flex items-center gap-1 text-[11px] font-semibold text-slate-900 leading-tight whitespace-nowrap">
                  You&apos;re online
                  <ChevronDown size={11} className="text-slate-400" />
                </p>
                <p className="text-[10px] text-slate-500 whitespace-nowrap">Synced just now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
