"use client";

import { useState } from "react";
import { X, Trophy } from "lucide-react";

export default function MotivationBanner({ name }: { name: string }) {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <section className="px-5 mt-8">
      <div className="relative overflow-hidden rounded-2xl bg-greenaccent-light p-5 pr-2">
        <button
          onClick={() => setVisible(false)}
          aria-label="Dismiss"
          className="absolute right-4 top-4 text-slate-500 hover:text-slate-700"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-4">
          <div className="flex-1 max-w-[65%]">
            <h3 className="font-extrabold text-slate-900 text-[16px]">Keep it up, {name}!</h3>
            <p className="text-[13px] text-slate-600 mt-1 leading-snug">
              You&apos;re doing great this term. Stay focused and keep learning every day!
            </p>
          </div>

          <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white/60">
            <Trophy size={40} className="text-orange" strokeWidth={1.8} fill="#F5C242" />
          </span>
        </div>
      </div>
    </section>
  );
}
