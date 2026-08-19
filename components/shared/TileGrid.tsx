import { LucideIcon } from "lucide-react";

export type Tile = {
  icon: LucideIcon;
  label: string;
  sub: string;
  bg: string;
  iconBg: string;
  iconColor?: string;
};

export default function TileGrid({
  title,
  tiles,
  columns = "grid-cols-4",
}: {
  title?: string;
  tiles: Tile[];
  columns?: string;
}) {
  return (
    <section className="px-5 mt-8">
      {title && <h2 className="text-[17px] font-extrabold text-slate-900 mb-3">{title}</h2>}
      <div className={`grid ${columns} gap-3`}>
        {tiles.map((tile) => (
          <button
            key={tile.label}
            className={`flex flex-col items-center gap-2 rounded-2xl ${tile.bg} px-2 py-4 text-center transition-transform active:scale-95`}
          >
            <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${tile.iconBg}`}>
              <tile.icon size={19} className={tile.iconColor ?? "text-white"} strokeWidth={2.2} />
            </span>
            <span>
              <p className="text-[13px] font-bold text-slate-900 leading-tight">{tile.label}</p>
              <p className="text-[10px] text-slate-500 leading-tight mt-0.5">{tile.sub}</p>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
