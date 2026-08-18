import Image from "next/image";

export default function AuthLogo() {
  return (
    <div className="flex justify-center px-6 pt-14">
      <Image
        src="/logo.png"
        alt="IEMS — Integrated Education Management System"
        width={1155}
        height={424}
        priority
        className="h-auto w-full max-w-[340px]"
      />
    </div>
  );
}
