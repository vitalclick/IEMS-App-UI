export default function AuthFooter() {
  return (
    <div className="px-6 pb-10 pt-8 text-center">
      <p className="text-sm font-bold">
        <span className="text-blueaccent">IEMS</span>
        <span className="mx-2 text-authnavy-border">|</span>
        <span className="text-orange">Integrated Education Management System</span>
      </p>
      <p className="mt-2 text-xs text-slate-500">
        &copy; {new Date().getFullYear()} VitalClick Technologies
      </p>
    </div>
  );
}
