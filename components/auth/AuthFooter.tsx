export default function AuthFooter() {
  return (
    <div className="px-6 pb-10 pt-8 text-center">
      <p className="text-sm font-bold text-blueaccent">IEMS</p>
      <p className="mt-2 text-xs text-slate-500">
        &copy; {new Date().getFullYear()} VitalClick Technologies
      </p>
    </div>
  );
}
