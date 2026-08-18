export default function Avatar({
  name,
  online = true,
}: {
  name: string;
  online?: boolean;
}) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="relative shrink-0">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-teal-light to-teal/20 text-teal font-bold text-lg">
        {initials}
      </div>
      {online && (
        <span className="absolute bottom-0.5 right-0.5 h-3.5 w-3.5 rounded-full bg-greenaccent ring-2 ring-white" />
      )}
    </div>
  );
}
