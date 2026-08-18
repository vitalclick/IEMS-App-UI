export default function SchoolCrest({ className = "h-14 w-14" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="28" cy="28" r="27" fill="#F4F1E7" stroke="#0B4A4A" strokeWidth="1.5" />
      <path
        d="M14 20c3-4 6-6 6-6s3 2 6 6M30 20c3-4 6-6 6-6s3 2 6 6"
        stroke="#3E7A4E"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M20 20c0-2 1-4 1-4M36 20c0-2-1-4-1-4"
        stroke="#3E7A4E"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <rect x="20" y="17" width="16" height="19" rx="1.5" fill="#fff" stroke="#0B4A4A" strokeWidth="1.4" />
      <path d="M23 21h10M23 25h10M23 29h6" stroke="#0B4A4A" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M27 8c0 6 1 9 1 9" stroke="#E8863C" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M27 9c1.5-1.5 4-1.5 4 0-1 1.5-4 1.5-4 0z" fill="#E8863C" />
    </svg>
  );
}
