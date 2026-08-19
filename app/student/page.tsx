import {
  CalendarDays,
  ClipboardCheck,
  BookOpen,
  Star,
  Clock,
  Wifi,
} from "lucide-react";
import CrestHeader from "@/components/dashboard/CrestHeader";
import StudentWelcomeCard from "@/components/student/StudentWelcomeCard";
import TileGrid, { Tile } from "@/components/shared/TileGrid";
import TimetableList, { TimetableItem } from "@/components/shared/TimetableList";
import ContinueLearning from "@/components/student/ContinueLearning";
import SchoolNotices from "@/components/SchoolNotices";
import MotivationBanner from "@/components/student/MotivationBanner";
import BottomNav from "@/components/BottomNav";
import RoleSwitcher from "@/components/RoleSwitcher";

const tiles: Tile[] = [
  {
    icon: CalendarDays,
    label: "Today",
    sub: "Mon, 18 Aug 2025",
    bg: "bg-blueaccent-light",
    iconBg: "bg-blueaccent",
  },
  {
    icon: ClipboardCheck,
    label: "Assignments",
    sub: "2 due today",
    bg: "bg-greenaccent-light",
    iconBg: "bg-greenaccent",
  },
  {
    icon: BookOpen,
    label: "Lessons",
    sub: "5 today",
    bg: "bg-purpleaccent-light",
    iconBg: "bg-purpleaccent",
  },
  {
    icon: Star,
    label: "Recent marks",
    sub: "View my marks",
    bg: "bg-orange-light",
    iconBg: "bg-orange",
  },
];

const timetable: TimetableItem[] = [
  {
    time: "08:00",
    endTime: "08:45",
    title: "Mathematics",
    subtitle: "Mr. Tunde Adeyemi",
    dotColor: "bg-greenaccent",
    right: (
      <span className="flex items-center gap-1 rounded-lg bg-greenaccent-light px-2.5 py-1.5 text-[11px] font-bold text-greenaccent">
        <Wifi size={12} /> In progress
      </span>
    ),
  },
  {
    time: "09:15",
    endTime: "10:00",
    title: "English Language",
    subtitle: "Mrs. Funmi Balogun",
    dotColor: "bg-greenaccent",
    right: (
      <span className="flex items-center gap-1 rounded-lg bg-blueaccent-light px-2.5 py-1.5 text-[11px] font-bold text-blueaccent">
        <Clock size={12} /> Next &bull; 34m
      </span>
    ),
  },
  {
    time: "10:30",
    endTime: "11:15",
    title: "Basic Science",
    subtitle: "Mr. John Uche",
    dotColor: "bg-slate-300",
    right: (
      <span className="flex items-center gap-1 rounded-lg bg-slate-100 px-2.5 py-1.5 text-[11px] font-bold text-slate-500">
        <Clock size={12} /> Upcoming &bull; 1h 49m
      </span>
    ),
  },
];

export default function StudentDashboardPage() {
  return (
    <main className="min-h-screen bg-surface flex justify-center">
      <div className="app-shell relative w-full max-w-[430px] min-h-screen bg-surface flex flex-col">
        <CrestHeader bgClass="bg-studentteal" badgeCount={2} initials="CO" />
        <StudentWelcomeCard />

        <TileGrid tiles={tiles} />

        <TimetableList
          title="My day at a glance"
          linkLabel="View full timetable"
          items={timetable}
          footnote="All times shown in your local time (WAT)"
        />

        <ContinueLearning />
        <SchoolNotices linkColor="text-greenaccent" />
        <MotivationBanner name="Chidi" />

        <div className="flex-1" />
        <BottomNav role="student" />
      </div>
      <RoleSwitcher active="student" />
    </main>
  );
}
