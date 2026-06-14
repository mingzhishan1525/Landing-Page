"use client";

import { useMemo, useState } from "react";
import { chinaHolidays } from "../../../lib/data/china-holidays";
import { supplierRegions } from "../../../lib/data/supplier-regions";
import ToolCtas from "../components/ToolCtas";

function getDaysUntil(date: string) {
  return Math.ceil(
    (new Date(date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24),
  );
}

export default function StockoutRiskCalculator() {
  const [currentInventory, setCurrentInventory] = useState(1240);
  const [dailySales, setDailySales] = useState(42);
  const [leadTimeDays, setLeadTimeDays] = useState(45);
  const [supplierRegion, setSupplierRegion] = useState("Guangdong");
  const [holidayId, setHolidayId] = useState(chinaHolidays[0].id);

  const result = useMemo(() => {
    const coverageDays = dailySales > 0 ? currentInventory / dailySales : 0;
    const region = supplierRegions.find((item) => item.province === supplierRegion);
    const holiday = chinaHolidays.find((item) => item.id === holidayId) || chinaHolidays[0];
    const holidayWithin60Days = getDaysUntil(holiday.startDate) <= 60;
    let riskScore = 100 - Math.min(100, coverageDays);

    if (leadTimeDays > 45) riskScore += 15;
    if (holidayWithin60Days) riskScore += 20;
    if (region?.riskLevel === "high") riskScore += 10;

    const finalScore = Math.min(100, Math.max(0, Math.round(riskScore)));
    const suggestedReorderWindow =
      coverageDays - leadTimeDays <= 0
        ? "Reorder immediately"
        : `Within ${Math.floor(coverageDays - leadTimeDays)} days`;

    return {
      coverageDays,
      riskScore: finalScore,
      revenueAtRisk: Math.round(currentInventory * 24),
      suggestedReorderWindow,
      summary:
        finalScore >= 75
          ? "High stockout risk. Review supplier lead time and reorder immediately."
          : finalScore >= 45
            ? "Medium stockout risk. Confirm reorder timing and holiday buffers."
            : "Low stockout risk. Continue monitoring sales velocity and supplier timing.",
    };
  }, [currentInventory, dailySales, holidayId, leadTimeDays, supplierRegion]);

  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
        {[
          ["Current Inventory", currentInventory, setCurrentInventory],
          ["Daily Sales", dailySales, setDailySales],
          ["Lead Time Days", leadTimeDays, setLeadTimeDays],
        ].map(([label, value, setter]) => (
          <label
            key={label as string}
            className="mt-4 block first:mt-0 text-sm font-semibold text-slate-700 dark:text-slate-300"
          >
            {label as string}
            <input
              type="number"
              min="0"
              value={value as number}
              onChange={(event) =>
                (setter as React.Dispatch<React.SetStateAction<number>>) (
                  Number(event.target.value),
                )
              }
              className="mt-2 min-h-12 w-full rounded-md border border-slate-300 px-3 dark:border-slate-700 dark:bg-slate-950"
            />
          </label>
        ))}
        <label className="mt-4 block text-sm font-semibold text-slate-700 dark:text-slate-300">
          Supplier Region
          <select
            value={supplierRegion}
            onChange={(event) => setSupplierRegion(event.target.value)}
            className="mt-2 min-h-12 w-full rounded-md border border-slate-300 px-3 dark:border-slate-700 dark:bg-slate-950"
          >
            {supplierRegions.map((region) => (
              <option key={region.province}>{region.province}</option>
            ))}
          </select>
        </label>
        <label className="mt-4 block text-sm font-semibold text-slate-700 dark:text-slate-300">
          Upcoming Holiday
          <select
            value={holidayId}
            onChange={(event) => setHolidayId(event.target.value)}
            className="mt-2 min-h-12 w-full rounded-md border border-slate-300 px-3 dark:border-slate-700 dark:bg-slate-950"
          >
            {chinaHolidays.map((holiday) => (
              <option key={holiday.id} value={holiday.id}>
                {holiday.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
          Result
        </p>
        <h2 className="mt-3 text-3xl font-bold">
          Stockout Risk Score: {result.riskScore}/100
        </h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <div className="rounded-md bg-white p-4 dark:bg-slate-950">
            <p className="text-xs text-slate-500">Revenue At Risk</p>
            <p className="mt-2 text-xl font-bold">${result.revenueAtRisk}</p>
          </div>
          <div className="rounded-md bg-white p-4 dark:bg-slate-950">
            <p className="text-xs text-slate-500">Suggested Reorder Window</p>
            <p className="mt-2 text-xl font-bold">{result.suggestedReorderWindow}</p>
          </div>
        </div>
        <p className="mt-5 leading-7 text-slate-600 dark:text-slate-300">
          {result.summary}
        </p>
        <ToolCtas source="tool_stockout_risk_calculator" />
      </div>
    </div>
  );
}
