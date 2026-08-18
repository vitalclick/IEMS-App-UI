# IEMS Parent Dashboard — Next.js Template

A pixel-close recreation of the IEMS "Parent Dashboard Overview" mobile screen, built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **lucide-react** icons.

## What's included

- `app/layout.tsx` / `app/page.tsx` — app shell and the assembled dashboard page
- `components/Header.tsx` — dark teal top bar (menu, logo, notifications, avatar)
- `components/WelcomeCard.tsx` — overlapping greeting card (session + sync status)
- `components/MyChildrenSection.tsx` + `ChildCard.tsx` + `StatPill.tsx` + `Avatar.tsx` — children summary cards with fees/homework/messages/timetable stats
- `components/QuickActions.tsx` — Pay fees / Wallet / Reports / Calendar grid
- `components/SchoolNotices.tsx` — notice list with unread indicators
- `components/StayConnectedBanner.tsx` — dismissible notification prompt with an inline SVG illustration
- `components/BottomNav.tsx` — bottom tab bar with active state + badge

All child/notice data lives in small typed arrays at the top of the relevant component, so it's easy to wire up to a real API later.

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Notes on assets

The original design uses real photos (parent avatar, student photos, school crest). Since this template ships without binary image assets, those are replaced with:

- Initials-based avatar circles (`Avatar.tsx`)
- A `GraduationCap` icon standing in for the school crest
- A hand-drawn inline SVG for the "Stay connected" illustration

Swap these for real `<Image />` assets (from `next/image`) whenever you have production photography — the layout and sizing will hold.

## Customizing the palette

Brand colors are defined once in `tailwind.config.ts` under `theme.extend.colors` (`teal`, `orange`, `brandred`, `blueaccent`, `purpleaccent`, `greenaccent`, `canvas`). Update the hex values there to re-theme the whole app.
