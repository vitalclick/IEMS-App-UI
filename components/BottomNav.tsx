"use client";

import { useState } from "react";
import { Home, CreditCard, Wallet, MessageCircle, User } from "lucide-react";

const tabs = [
  { key: "home", label: "Home", icon: Home },
  { key: "fees", label: "Fees", icon: CreditCard },
  { key: "wallet", label: "Wallet", icon: Wallet },
  { key: "messages", label: "Messages", icon: MessageCircle, badge: 1 },
  { key: "profile", label: "Profile", icon: User },
] as const;

export default function BottomNav() {
  const [active, setActive] = useState<string>("home");

  return (
    <nav className="sticky bottom-0 left-0 right-0 mt-8 border-t border-slate-100 bg-white/95 backdrop-blur px-2 pt-2 pb-safe">
      <div className="flex items-stretch justify-between">
        {tabs.map((tab) => {
          const isActive = active === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className="relative flex flex-1 flex-col items-center gap-1 py-2"
            >
              {isActive && (
                <span className="absolute -top-2 h-[3px] w-8 rounded-full bg-orange" />
              )}
              <span className="relative">
                <tab.icon
                  size={22}
                  strokeWidth={2.2}
                  className={isActive ? "text-teal" : "text-slate-400"}
                />
                {"badge" in tab && tab.badge && (
                  <span className="absolute -top-1.5 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-orange text-[9px] font-bold text-white">
                    {tab.badge}
                  </span>
                )}
              </span>
              <span
                className={`text-[11px] font-semibold ${
                  isActive ? "text-teal" : "text-slate-400"
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
      <div className="mx-auto mt-2 h-1 w-32 rounded-full bg-slate-900/80" />
    </nav>
  );
}
