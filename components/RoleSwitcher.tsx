"use client";

import Link from "next/link";

const links = [
  { key: "login", label: "Sign in", href: "/login" },
  { key: "find-school", label: "Find school", href: "/find-school" },
  { key: "parent", label: "Parent", href: "/" },
  { key: "student", label: "Student", href: "/student" },
  { key: "teacher", label: "Teacher", href: "/teacher" },
  { key: "principal", label: "Principal", href: "/principal" },
] as const;

/**
 * Dev/demo-only floating nav so reviewers can hop between the template's
 * screens. Not part of the Mobile_UI reference designs themselves.
 */
export default function RoleSwitcher({ active }: { active: string }) {
  return (
    <div className="fixed bottom-3 left-1/2 z-50 -translate-x-1/2">
      <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-white/95 px-1.5 py-1.5 shadow-lg backdrop-blur">
        {links.map((link) => (
          <Link
            key={link.key}
            href={link.href}
            className={`rounded-full px-2.5 py-1 text-[11px] font-semibold transition-colors ${
              active === link.key
                ? "bg-slate-900 text-white"
                : "text-slate-500 hover:bg-slate-100"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
