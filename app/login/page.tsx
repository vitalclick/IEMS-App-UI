import { Mail, Lock, Eye, ArrowRight, Link2, Building2, ChevronRight } from "lucide-react";
import AuthLogo from "@/components/auth/AuthLogo";
import AuthFooter from "@/components/auth/AuthFooter";
import RoleSwitcher from "@/components/RoleSwitcher";

export default function SignInPage() {
  return (
    <main className="min-h-screen auth-backdrop flex justify-center">
      <div className="app-shell relative w-full max-w-[430px] min-h-screen flex flex-col text-white">
        <AuthLogo />

        <div className="px-6 pt-8 text-center">
          <h1 className="text-2xl font-extrabold text-white">Welcome back</h1>
          <p className="mt-1.5 text-sm text-slate-300">
            Sign in to continue to your school
          </p>
        </div>

        <div className="px-6 pt-8">
          <div className="rounded-3xl border border-authnavy-border/60 bg-authnavy-card p-5">
            <label className="block text-sm font-semibold text-blueaccent">
              Email address
            </label>
            <div className="mt-2 flex items-center gap-3 rounded-xl border border-blueaccent/50 bg-authnavy px-4 py-3.5">
              <Mail size={18} className="text-blueaccent" strokeWidth={2} />
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-transparent text-sm text-white placeholder:text-slate-400 focus:outline-none"
              />
            </div>

            <label className="mt-5 block text-sm font-semibold text-blueaccent">
              Password
            </label>
            <div className="mt-2 flex items-center gap-3 rounded-xl border border-slate-600/60 bg-authnavy px-4 py-3.5">
              <Lock size={18} className="text-slate-400" strokeWidth={2} />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full bg-transparent text-sm text-white placeholder:text-slate-400 focus:outline-none"
              />
              <button aria-label="Show password" className="text-slate-400 hover:text-slate-200">
                <Eye size={18} strokeWidth={2} />
              </button>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-slate-300">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-500 bg-transparent accent-blueaccent"
                />
                Remember me
              </label>
              <button className="text-sm font-semibold text-greenaccent">
                Forgot password?
              </button>
            </div>

            <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brandblue to-brandblue-light py-3.5 text-[15px] font-bold text-white shadow-card">
              Sign in
              <ArrowRight size={18} strokeWidth={2.4} />
            </button>

            <div className="my-5 flex items-center gap-3">
              <div className="h-px flex-1 bg-slate-700" />
              <span className="text-xs font-semibold text-slate-400">OR</span>
              <div className="h-px flex-1 bg-slate-700" />
            </div>

            <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-greenaccent/60 py-3.5 text-[14px] font-bold text-white">
              <Link2 size={17} strokeWidth={2.2} className="text-greenaccent" />
              Email me a sign-in link instead
            </button>
          </div>
        </div>

        <div className="px-6 pt-4">
          <a
            href="/find-school"
            className="flex items-center gap-4 rounded-2xl border border-authnavy-border/60 bg-authnavy-card p-4"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-blueaccent/50">
              <Building2 size={20} className="text-blueaccent" strokeWidth={2} />
            </span>
            <span className="flex-1">
              <p className="text-[15px] font-bold text-white">Using a different school?</p>
              <p className="text-sm font-semibold text-greenaccent">Choose a different school</p>
            </span>
            <ChevronRight size={20} className="text-slate-400" />
          </a>
        </div>

        <div className="flex-1" />
        <AuthFooter />
      </div>
      <RoleSwitcher active="login" />
    </main>
  );
}
