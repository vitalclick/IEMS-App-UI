import { Search, Building2, Lightbulb, ArrowRight, ShieldCheck } from "lucide-react";
import AuthLogo from "@/components/auth/AuthLogo";
import AuthFooter from "@/components/auth/AuthFooter";

export default function FindSchoolPage() {
  return (
    <main className="min-h-screen auth-backdrop flex justify-center">
      <div className="app-shell relative w-full max-w-[430px] min-h-screen flex flex-col text-white">
        <AuthLogo />

        <div className="px-6 pt-8">
          <div className="rounded-3xl border border-authnavy-border/60 bg-authnavy-card p-6 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-blueaccent/50">
              <Search size={26} className="text-blueaccent" strokeWidth={2} />
            </div>

            <h1 className="mt-4 text-2xl font-extrabold text-white">Find your school</h1>
            <p className="mx-auto mt-2 max-w-[280px] text-sm leading-relaxed text-slate-300">
              Enter your school code provided by your school to get started with IEMS.
            </p>

            <div className="mt-6 text-left">
              <label className="block text-sm font-semibold text-blueaccent">
                School code
              </label>
              <div className="mt-2 flex items-center gap-3 rounded-xl border border-blueaccent/50 bg-authnavy px-4 py-3.5">
                <Building2 size={18} className="text-blueaccent" strokeWidth={2} />
                <input
                  type="text"
                  placeholder="e.g. capetown-primary"
                  className="w-full bg-transparent text-sm text-white placeholder:text-slate-400 focus:outline-none"
                />
              </div>
              <p className="mt-3 flex items-center gap-2 text-[13px] text-slate-300">
                <Lightbulb size={15} className="text-orange" strokeWidth={2} />
                Ask your school administrator if you don&apos;t have the code.
              </p>
            </div>

            <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brandblue to-brandblue-light py-3.5 text-[15px] font-bold text-white shadow-card">
              Continue
              <ArrowRight size={18} strokeWidth={2.4} />
            </button>
          </div>
        </div>

        <div className="px-6 pt-4">
          <div className="flex items-start gap-4 rounded-2xl border border-authnavy-border/60 bg-authnavy-card p-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-blueaccent/50">
              <ShieldCheck size={20} className="text-blueaccent" strokeWidth={2} />
            </span>
            <div>
              <p className="text-[15px] font-bold text-blueaccent">
                Where can I find my school code?
              </p>
              <p className="mt-1 text-sm leading-relaxed text-slate-300">
                You can usually find it on school communications or ask your school
                administrator.
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1" />
        <AuthFooter />
      </div>
    </main>
  );
}
