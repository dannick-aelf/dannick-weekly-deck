export interface PresentationEntry {
  slug: string;
  title: string;
  weekNumber: number;
  year: number;
  dateRangeStart: string;
  dateRangeEnd: string;
  slideCount: number;
  status: "draft" | "complete";
}

export const presentations: PresentationEntry[] = [
  {
    slug: "week-10-2026",
    title: "Week 10: Mar 2 – Mar 8",
    weekNumber: 10,
    year: 2026,
    dateRangeStart: "2026-03-02",
    dateRangeEnd: "2026-03-08",
    slideCount: 16,
    status: "draft",
  },
  {
    slug: "week-9-2026",
    title: "Week 9: Feb 23 – Mar 1",
    weekNumber: 9,
    year: 2026,
    dateRangeStart: "2026-02-23",
    dateRangeEnd: "2026-03-01",
    slideCount: 13,
    status: "draft",
  },
];
