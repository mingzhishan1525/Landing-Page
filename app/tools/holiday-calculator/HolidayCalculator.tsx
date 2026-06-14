"use client";

import { useMemo, useState } from "react";
import { chinaHolidays, getNearestHoliday } from "../../../lib/data/china-holidays";
import { supplierRegions } from "../../../lib/data/supplier-regions";
import ToolCtas from "../components/ToolCtas";

const dayMs = 1000 * 60 * 60 * 24;

function formatDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

export default function HolidayCalculator() {
  const [orderDate, setOrderDate] = useState("2026-09-01");
  const [province, setProvince] = useState("Guangdong");
  const [leadTimeDays, setLeadTimeDays] = useState(45);

  const result = useMemo(() => {
    const parsedOrderDate = new Date(orderDate);
    const nearest = getNearestHoliday(parsedOrderDate);
    const region = supplierRegions.find((item) => item.province === province);

    if (!nearest) {
      return null;
    }

    const riskLevel =
      nearest.daysUntil <= 30 ? "High" : nearest.daysUntil <= 60 ? "Medium" : "Low";
    const bufferDays = riskLevel === "High" ? 21 : riskLevel === "Medium" ? 14 : 7;
    const safeOrderDate = new Date(
      new Date(nearest.holiday.startDate).getTime() -
        (leadTimeDays + bufferDays) * dayMs,
    );

    return {
      riskLevel,
      safeOrderDate: formatDate(safeOrderDate),
      warning:
        riskLevel === "High"
          ? `${nearest.holiday.name} starts in ${nearest.daysUntil} days. Reorder timing may already be at risk.`
          : `${nearest.holiday.name} starts in ${nearest.daysUntil} days. Add supplier buffer before confirming purchase orders.`,
      holiday: nearest.holiday,
      region,
    };
  }, [leadTimeDays, orderDate, province]);

  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
          Order Date
          <input
            type="date"
            value={orderDate}
            onChange={(event) => setOrderDate(event.target.value)}
            className="mt-2 min-h-12 w-full rounded-md border border-slate-300 px-3 dark:border-slate-700 dark:bg-slate-950"
          />
        </label>
        <label className="mt-4 block text-sm font-semibold text-slate-700 dark:text-slate-300">
          Supplier Province
          <select
            value={province}
            onChange={(event) => setProvince(event.target.value)}
            className="mt-2 min-h-12 w-full rounded-md border border-slate-300 px-3 dark:border-slate-700 dark:bg-slate-950"
          >
            {supplierRegions.map((region) => (
              <option key={region.province}>{region.province}</option>
            ))}
          </select>
        </label>
        <label className="mt-4 block text-sm font-semibold text-slate-700 dark:text-slate-300">
          Lead Time Days
          <input
            type="number"
            min="1"
            value={leadTimeDays}
            onChange={(event) => setLeadTimeDays(Number(event.target.value))}
            className="mt-2 min-h-12 w-full rounded-md border border-slate-300 px-3 dark:border-slate-700 dark:bg-slate-950"
          />
        </label>
      </div>

      <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900">
        {result ? (
          <>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
              Result
            </p>
            <h2 className="mt-3 text-3xl font-bold">Risk Level: {result.riskLevel}</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-md bg-white p-4 dark:bg-slate-950">
                <p className="text-xs text-slate-500">Recommended Safe Order Date</p>
                <p className="mt-2 text-xl font-bold">{result.safeOrderDate}</p>
              </div>
              <div className="rounded-md bg-white p-4 dark:bg-slate-950">
                <p className="text-xs text-slate-500">Holiday</p>
                <p className="mt-2 text-xl font-bold">{result.holiday.name}</p>
              </div>
            </div>
            <p className="mt-5 leading-7 text-slate-600 dark:text-slate-300">
              {result.warning}
            </p>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
              Province note: {result.region?.notes}
            </p>
            <ToolCtas source="tool_holiday_calculator" />
          </>
        ) : null}
      </div>
    </div>
  );
}
