export type ChinaHoliday = {
  id: string;
  name: string;
  slug: string;
  startDate: string;
  endDate: string;
  impactLevel: "low" | "medium" | "high";
  bufferDays: number;
  description: string;
};

export const chinaHolidays: ChinaHoliday[] = [
  {
    id: "cny-2027",
    name: "Chinese New Year 2027",
    slug: "chinese-new-year-2027",
    startDate: "2027-02-06",
    endDate: "2027-02-20",
    impactLevel: "high",
    bufferDays: 21,
    description:
      "The highest-risk annual shutdown window for China sourcing, with factory slowdowns often starting before the official holiday.",
  },
  {
    id: "national-day-2026",
    name: "National Day 2026",
    slug: "china-national-day-2026",
    startDate: "2026-10-01",
    endDate: "2026-10-07",
    impactLevel: "high",
    bufferDays: 21,
    description:
      "A major Golden Week holiday that can delay production, supplier replies, and domestic freight in China.",
  },
  {
    id: "mid-autumn-2026",
    name: "Mid-Autumn Festival 2026",
    slug: "mid-autumn-festival-2026",
    startDate: "2026-09-25",
    endDate: "2026-09-27",
    impactLevel: "medium",
    bufferDays: 14,
    description:
      "A shorter holiday that can still affect supplier communication and fulfillment timelines.",
  },
  {
    id: "dragon-boat-2027",
    name: "Dragon Boat Festival 2027",
    slug: "dragon-boat-festival-2027",
    startDate: "2027-06-09",
    endDate: "2027-06-11",
    impactLevel: "medium",
    bufferDays: 14,
    description:
      "A regional travel and holiday period that may create short supplier response delays.",
  },
  {
    id: "labor-day-2027",
    name: "Labor Day 2027",
    slug: "labor-day-2027",
    startDate: "2027-05-01",
    endDate: "2027-05-05",
    impactLevel: "medium",
    bufferDays: 14,
    description:
      "A multi-day holiday that can interrupt production planning and shipment handoffs.",
  },
];

export function getNearestHoliday(orderDate: Date) {
  return chinaHolidays
    .map((holiday) => ({
      holiday,
      daysUntil: Math.ceil(
        (new Date(holiday.startDate).getTime() - orderDate.getTime()) /
          (1000 * 60 * 60 * 24),
      ),
    }))
    .filter((item) => item.daysUntil >= 0)
    .sort((a, b) => a.daysUntil - b.daysUntil)[0];
}
