import Header from "@/components/Header";
import WelcomeCard from "@/components/WelcomeCard";
import MyChildrenSection from "@/components/MyChildrenSection";
import QuickActions from "@/components/QuickActions";
import SchoolNotices from "@/components/SchoolNotices";
import StayConnectedBanner from "@/components/StayConnectedBanner";
import BottomNav from "@/components/BottomNav";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-canvas flex justify-center">
      <div className="app-shell relative w-full max-w-[430px] min-h-screen bg-canvas flex flex-col">
        <Header />
        <WelcomeCard />
        <MyChildrenSection />
        <QuickActions />
        <SchoolNotices />
        <StayConnectedBanner />
        <div className="flex-1" />
        <BottomNav role="parent" />
      </div>
    </main>
  );
}
