import Image from "next/image";
import { Menu, Bell, ChevronDown } from "lucide-react";

export default function CrestHeader({
  bgClass,
  badgeCount,
  initials,
  roundedClass = "rounded-b-[32px]",
  paddingBottom = "pb-16",
}: {
  bgClass: string;
  badgeCount: number;
  initials: string;
  roundedClass?: string;
  paddingBottom?: string;
}) {
  return (
    <header className={`relative ${bgClass} px-5 pt-4 ${paddingBottom} ${roundedClass}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button aria-label="Open menu" className="text-white/90 hover:text-white transition-colors">
            <Menu size={26} strokeWidth={2.2} />
          </button>

          <Image src="/logo-light1.png" alt="IEMS" width={800} height={246} className="h-9 w-auto" />
        </div>

        <div className="flex items-center gap-3">
          <button aria-label="Notifications" className="relative text-white/90 hover:text-white transition-colors">
            <Bell size={24} strokeWidth={2.2} />
            {badgeCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-orange text-[10px] font-bold text-white">
                {badgeCount}
              </span>
            )}
          </button>

          <button className="flex items-center gap-1" aria-label="Profile menu">
            <span className="h-9 w-9 overflow-hidden rounded-full ring-2 ring-white/40 bg-gradient-to-br from-blueaccent-light to-blueaccent flex items-center justify-center text-xs font-bold text-white">
              {initials}
            </span>
            <ChevronDown size={16} className="text-white/80" />
          </button>
        </div>
      </div>
    </header>
  );
}
