"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  CreditCard,
  Wallet,
  MessageCircle,
  User,
  CalendarDays,
  BookOpen,
  Library,
  UserCheck,
  FileEdit,
  Grid2x2,
  LayoutDashboard,
  ClipboardCheck,
  Users,
  LucideIcon,
} from "lucide-react";

export type Role = "parent" | "student" | "teacher" | "principal";

type TabConfig = {
  key: string;
  label: string;
  icon: LucideIcon;
  href: string;
  badge?: number;
};

const TABS_BY_ROLE: Record<Role, TabConfig[]> = {
  parent: [
    { key: "home", label: "Home", icon: Home, href: "/" },
    { key: "fees", label: "Fees", icon: CreditCard, href: "#" },
    { key: "wallet", label: "Wallet", icon: Wallet, href: "#" },
    { key: "messages", label: "Messages", icon: MessageCircle, href: "#", badge: 1 },
    { key: "profile", label: "Profile", icon: User, href: "#" },
  ],
  student: [
    { key: "today", label: "Today", icon: CalendarDays, href: "/student" },
    { key: "learn", label: "Learn", icon: BookOpen, href: "#" },
    { key: "library", label: "Library", icon: Library, href: "#" },
    { key: "messages", label: "Messages", icon: MessageCircle, href: "#", badge: 2 },
  ],
  teacher: [
    { key: "home", label: "Home", icon: Home, href: "/teacher" },
    { key: "register", label: "Register", icon: UserCheck, href: "#" },
    { key: "marks", label: "Marks", icon: FileEdit, href: "#" },
    { key: "messages", label: "Messages", icon: MessageCircle, href: "#", badge: 2 },
    { key: "more", label: "More", icon: Grid2x2, href: "#" },
  ],
  principal: [
    { key: "dashboard", label: "Dashboard", icon: LayoutDashboard, href: "/principal" },
    { key: "approvals", label: "Approvals", icon: ClipboardCheck, href: "#", badge: 6 },
    { key: "people", label: "People", icon: Users, href: "#" },
    { key: "messages", label: "Messages", icon: MessageCircle, href: "#", badge: 3 },
    { key: "more", label: "More", icon: Grid2x2, href: "#" },
  ],
};

const ACCENT_BY_ROLE: Record<Role, string> = {
  parent: "text-teal",
  student: "text-studentteal",
  teacher: "text-teacherteal",
  principal: "text-blueaccent",
};

export default function BottomNav({ role }: { role: Role }) {
  const pathname = usePathname();
  const tabs = TABS_BY_ROLE[role];
  const accentColor = ACCENT_BY_ROLE[role];

  return (
    <nav className="sticky bottom-0 left-0 right-0 mt-8 border-t border-slate-100 bg-white/95 backdrop-blur px-2 pt-2 pb-safe">
      <div className="flex items-stretch justify-between">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;
          return (
            <Link
              key={tab.key}
              href={tab.href}
              className="relative flex flex-1 flex-col items-center gap-1 py-2"
            >
              {isActive && (
                <span className="absolute -top-2 h-[3px] w-8 rounded-full bg-orange" />
              )}
              <span className="relative">
                <tab.icon
                  size={22}
                  strokeWidth={2.2}
                  className={isActive ? accentColor : "text-slate-400"}
                />
                {tab.badge ? (
                  <span className="absolute -top-1.5 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-orange text-[9px] font-bold text-white">
                    {tab.badge}
                  </span>
                ) : null}
              </span>
              <span
                className={`text-[11px] font-semibold ${
                  isActive ? accentColor : "text-slate-400"
                }`}
              >
                {tab.label}
              </span>
            </Link>
          );
        })}
      </div>
      <div className="mx-auto mt-2 h-1 w-32 rounded-full bg-slate-900/80" />
    </nav>
  );
}
