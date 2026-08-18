"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function StayConnectedBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <section className="px-5 mt-8">
      <div className="relative overflow-hidden rounded-2xl bg-teal-light p-5 pr-2">
        <button
          onClick={() => setVisible(false)}
          aria-label="Dismiss"
          className="absolute right-4 top-4 text-slate-500 hover:text-slate-700"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-4">
          <div className="flex-1 max-w-[62%]">
            <h3 className="font-extrabold text-slate-900 text-[16px]">
              Stay connected
            </h3>
            <p className="text-[13px] text-slate-600 mt-1 leading-snug">
              Enable notifications to never miss important updates.
            </p>
            <button className="mt-4 rounded-lg bg-teal px-4 py-2.5 text-[13px] font-bold text-white">
              Enable notifications
            </button>
          </div>

          <SchoolIllustration className="w-28 h-28 shrink-0" />
        </div>
      </div>
    </section>
  );
}

function SchoolIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <ellipse cx="80" cy="128" rx="72" ry="8" fill="#DCE9E1" />
      <rect x="34" y="46" width="76" height="72" rx="4" fill="#F4E3C1" />
      <rect x="34" y="46" width="76" height="10" fill="#0B4A4A" />
      <polygon points="30,46 80,18 114,46" fill="#8B5E3C" />
      <rect x="76" y="10" width="6" height="12" fill="#8B5E3C" />
      <polygon points="82,10 96,14 82,18" fill="#E8863C" />
      <circle cx="80" cy="60" r="8" fill="#fff" stroke="#0B4A4A" strokeWidth="2" />
      <path d="M80 55v5l3 3" stroke="#0B4A4A" strokeWidth="1.6" strokeLinecap="round" />
      <rect x="44" y="70" width="14" height="14" rx="2" fill="#BFE0DB" stroke="#0B4A4A" strokeWidth="1.5" />
      <rect x="66" y="70" width="14" height="14" rx="2" fill="#BFE0DB" stroke="#0B4A4A" strokeWidth="1.5" />
      <rect x="88" y="70" width="14" height="14" rx="2" fill="#BFE0DB" stroke="#0B4A4A" strokeWidth="1.5" />
      <rect x="66" y="94" width="18" height="24" rx="2" fill="#0B4A4A" />
      <circle cx="80" cy="106" r="1.6" fill="#fff" />
      <circle cx="24" cy="108" r="14" fill="#4C8C63" />
      <rect x="21" y="112" width="6" height="16" fill="#7A5233" />
      <circle cx="132" cy="112" r="16" fill="#4C8C63" />
      <rect x="129" y="116" width="6" height="14" fill="#7A5233" />
    </svg>
  );
}
