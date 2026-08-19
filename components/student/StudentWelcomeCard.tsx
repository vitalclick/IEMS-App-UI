import { CheckCircle2 } from "lucide-react";
import SchoolCrest from "@/components/shared/SchoolCrest";

export default function StudentWelcomeCard() {
  return (
    <div className="relative -mt-12 px-5">
      <div className="rounded-2xl bg-white shadow-card p-5">
        <div className="flex items-center gap-3">
          <SchoolCrest className="h-14 w-12 shrink-0" />
          <div className="min-w-0">
            <p className="text-[12px] text-slate-500">Good morning,</p>
            <p className="text-[15px] font-extrabold text-slate-900 leading-snug truncate">
              Chidi Okonkwo <span aria-hidden>👋</span>
            </p>
            <p className="text-[12px] text-slate-500 truncate">
              JSS 2B &bull; Al-Kaija Model School
            </p>
          </div>
        </div>

        <div className="mt-4 flex w-fit items-center gap-2 rounded-xl bg-greenaccent-light px-3 py-2.5">
          <CheckCircle2 size={18} className="text-greenaccent shrink-0" strokeWidth={2.4} />
          <div>
            <p className="text-[12px] font-bold text-greenaccent leading-tight whitespace-nowrap">
              You&apos;re online
            </p>
            <p className="text-[11px] text-slate-500 whitespace-nowrap">Last synced just now</p>
          </div>
        </div>
      </div>
    </div>
  );
}
