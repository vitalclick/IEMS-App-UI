"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { key: "login", label: "Sign in", href: "/login" },
  { key: "find-school", label: "Find school", href: "/find-school" },
  { key: "parent", label: "Parent", href: "/" },
  { key: "student", label: "Student", href: "/student" },
  { key: "teacher", label: "Teacher", href: "/teacher" },
  { key: "principal", label: "Principal", href: "/principal" },
] as const;

/**
 * Dev/demo-only toolbar so reviewers can hop between the template's
 * screens. Rendered once in the root layout, above the phone-shell mockup,
 * so it never overlaps in-app UI (like each screen's own bottom nav).
 * Not part of the Mobile_UI reference designs themselves.
 */
export default function RoleSwitcher() {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="flex flex-wrap items-center justify-center gap-1 px-2 py-2">
        {links.map((link) => (
          <Link
            key={link.key}
            href={link.href}
            className={`rounded-full px-2.5 py-1 text-[11px] font-semibold transition-colors ${
              pathname === link.href
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
