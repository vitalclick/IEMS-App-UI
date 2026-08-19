import {
  ClipboardCheck,
  MessageCircle,
  Users,
  UserCheck,
  FilePenLine,
  BookOpen,
  Send,
  MoreHorizontal,
  MapPin,
} from "lucide-react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import TeacherWelcomeCard from "@/components/teacher/TeacherWelcomeCard";
import StatDetailTile from "@/components/shared/StatDetailTile";
import TimetableList, { TimetableItem } from "@/components/shared/TimetableList";
import IconActionGrid, { IconAction } from "@/components/shared/IconActionGrid";
import MyClasses from "@/components/teacher/MyClasses";
import SchoolNotices from "@/components/SchoolNotices";
import BottomNav from "@/components/BottomNav";
import RoleSwitcher from "@/components/RoleSwitcher";

const timetable: TimetableItem[] = [
  {
    time: "08:00",
    endTime: "08:45",
    title: "JSS 2B",
    subtitle: "Mathematics",
    dotColor: "bg-greenaccent",
    right: (
      <div className="flex flex-col items-end gap-1.5">
        <span className="flex items-center gap-1 text-[11px] text-slate-400">
          <MapPin size={12} /> Room B4
        </span>
        <button className="rounded-lg bg-teacherteal/10 px-3 py-1.5 text-[12px] font-bold text-teacherteal">
          Take register
        </button>
      </div>
    ),
  },
  {
    time: "09:15",
    endTime: "10:00",
    title: "JSS 3A",
    subtitle: "Mathematics",
    dotColor: "bg-greenaccent",
    right: (
      <div className="flex flex-col items-end gap-1.5">
        <span className="flex items-center gap-1 text-[11px] text-slate-400">
          <MapPin size={12} /> Room B2
        </span>
        <button className="rounded-lg bg-teacherteal/10 px-3 py-1.5 text-[12px] font-bold text-teacherteal">
          Take register
        </button>
      </div>
    ),
  },
  {
    time: "11:30",
    endTime: "12:15",
    title: "Primary 4A",
    subtitle: "Mathematics",
    dotColor: "bg-slate-300",
    right: (
      <div className="flex flex-col items-end gap-1.5">
        <span className="flex items-center gap-1 text-[11px] text-slate-400">
          <MapPin size={12} /> Room A1
        </span>
        <button className="rounded-lg bg-teacherteal/10 px-3 py-1.5 text-[12px] font-bold text-teacherteal">
          Take register
        </button>
      </div>
    ),
  },
];

const actions: IconAction[] = [
  { icon: UserCheck, label: "Take register", ringColor: "border-greenaccent", iconColor: "text-greenaccent" },
  { icon: FilePenLine, label: "Capture marks", ringColor: "border-orange", iconColor: "text-orange" },
  { icon: Users, label: "My classes", ringColor: "border-blueaccent", iconColor: "text-blueaccent" },
  { icon: BookOpen, label: "Lessons", ringColor: "border-purpleaccent", iconColor: "text-purpleaccent" },
  { icon: Send, label: "Send message", ringColor: "border-teacherteal", iconColor: "text-teacherteal" },
  { icon: MoreHorizontal, label: "More", ringColor: "border-slate-300", iconColor: "text-slate-500" },
];

export default function TeacherDashboardPage() {
  return (
    <main className="min-h-screen bg-surface flex justify-center">
      <div className="app-shell relative w-full max-w-[430px] min-h-screen bg-surface flex flex-col">
        <DashboardHeader bgClass="bg-teacherteal" badgeCount={3} initials="TA" />
        <TeacherWelcomeCard />

        <section className="px-5 mt-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-[17px] font-extrabold text-slate-900">Today&apos;s overview</h2>
            <span className="text-[12px] text-slate-500">Monday, 18 Aug 2025</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <StatDetailTile
              icon={ClipboardCheck}
              ringColor="border-greenaccent"
              bg="bg-greenaccent-light"
              headline="4"
              label="Classes today"
              lines={["JSS 2B • JSS 3A", "Primary 4A • 4B"]}
            />
            <StatDetailTile
              icon={UserCheck}
              ringColor="border-orange"
              bg="bg-orange-light"
              headline="3"
              label="Registers to take"
              lines={["Next: JSS 2B", "08:00 AM"]}
            />
            <StatDetailTile
              icon={FilePenLine}
              ringColor="border-blueaccent"
              bg="bg-blueaccent-light"
              headline="7"
              label="Marks to capture"
              lines={["2 assignments", "5 quizzes"]}
            />
            <StatDetailTile
              icon={MessageCircle}
              ringColor="border-purpleaccent"
              bg="bg-purpleaccent-light"
              headline="2"
              label="Unread messages"
              lines={["1 from parent", "1 from staff"]}
            />
          </div>
        </section>

        <TimetableList
          title="Today's timetable"
          linkLabel="View full timetable"
          items={timetable}
          footnote="Times shown in your local time (WAT) · 2 more classes later"
        />

        <IconActionGrid title="Quick actions" actions={actions} columns="grid-cols-3" />

        <MyClasses />
        <SchoolNotices linkColor="text-greenaccent" />

        <div className="flex-1" />
        <BottomNav role="teacher" />
      </div>
      <RoleSwitcher active="teacher" />
    </main>
  );
}
