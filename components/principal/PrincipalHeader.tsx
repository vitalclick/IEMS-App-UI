import Image from "next/image";
import { Menu, Bell, ChevronDown, Calendar, Wifi } from "lucide-react";
import SchoolCrest from "@/components/shared/SchoolCrest";

export default function PrincipalHeader() {
  return (
    <header className="relative bg-principalnavy px-5 pt-4 pb-20 rounded-b-[32px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button aria-label="Open menu" className="text-white/90 hover:text-white transition-colors">
            <Menu size={26} strokeWidth={2.2} />
          </button>
          <Image src="/logo44.png" alt="IEMS" width={477} height={142} className="h-8 w-auto" />
        </div>

        <div className="flex items-center gap-3">
          <button aria-label="Notifications" className="relative text-white/90 hover:text-white transition-colors">
            <Bell size={24} strokeWidth={2.2} />
            <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-orange text-[10px] font-bold text-white">
              8
            </span>
          </button>
          <button className="flex items-center gap-1" aria-label="Profile menu">
            <span className="h-9 w-9 overflow-hidden rounded-full ring-2 ring-white/40 bg-gradient-to-br from-blueaccent-light to-blueaccent flex items-center justify-center text-xs font-bold text-white">
              AO
            </span>
            <ChevronDown size={16} className="text-white/80" />
          </button>
        </div>
      </div>

      <div className="mt-6 flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <SchoolCrest className="h-12 w-12 shrink-0" />
          <div>
            <p className="text-[13px] text-slate-300">Good morning,</p>
            <p className="text-[17px] font-extrabold text-white leading-tight">
              Mrs. Adaeze Okafor
            </p>
            <p className="text-[13px] text-slate-300">Principal &bull; Al-Kaija Model School</p>
          </div>
        </div>

        <div className="flex shrink-0 flex-col items-end gap-2">
          <button className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-[12px] font-semibold text-white whitespace-nowrap">
            <Calendar size={13} />
            2024/2025 Session
            <ChevronDown size={12} />
          </button>
          <p className="flex items-center gap-1.5 text-[12px] text-greenaccent">
            <Wifi size={13} />
            You&apos;re online
          </p>
          <p className="text-[11px] text-slate-400 -mt-1.5">Last synced just now</p>
        </div>
      </div>
    </header>
  );
}
