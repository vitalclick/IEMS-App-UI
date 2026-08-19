import {
  ClipboardCheck,
  UserPlus,
  UserCog,
  Wallet,
  ShieldCheck,
} from "lucide-react";
import PrincipalHeader from "@/components/principal/PrincipalHeader";
import PrincipalStats from "@/components/principal/PrincipalStats";
import IconActionGrid, { IconAction } from "@/components/shared/IconActionGrid";
import OverviewCards from "@/components/principal/OverviewCards";
import SchoolNotices from "@/components/SchoolNotices";
import BottomNav from "@/components/BottomNav";
import RoleSwitcher from "@/components/RoleSwitcher";

const actions: IconAction[] = [
  { icon: ClipboardCheck, label: "Approvals", ringColor: "border-blueaccent", iconColor: "text-blueaccent", badge: 6 },
  { icon: UserPlus, label: "Add staff", ringColor: "border-greenaccent", iconColor: "text-greenaccent" },
  { icon: UserCog, label: "Admit learner", ringColor: "border-purpleaccent", iconColor: "text-purpleaccent" },
  { icon: Wallet, label: "Collect fees", ringColor: "border-orange", iconColor: "text-orange" },
  { icon: ShieldCheck, label: "Attendance", ringColor: "border-greenaccent", iconColor: "text-greenaccent" },
];

export default function PrincipalDashboardPage() {
  return (
    <main className="min-h-screen bg-surface flex justify-center">
      <div className="app-shell relative w-full max-w-[430px] min-h-screen bg-surface flex flex-col">
        <PrincipalHeader />
        <PrincipalStats />

        <IconActionGrid title="Quick actions" actions={actions} columns="grid-cols-5" />
        <div className="flex justify-center gap-1.5 -mt-4">
          <span className="h-1.5 w-4 rounded-full bg-blueaccent" />
          <span className="h-1.5 w-1.5 rounded-full bg-slate-200" />
        </div>

        <OverviewCards />
        <SchoolNotices title="Announcements" linkColor="text-blueaccent" />

        <div className="flex-1" />
        <BottomNav role="principal" />
      </div>
      <RoleSwitcher active="principal" />
    </main>
  );
}
