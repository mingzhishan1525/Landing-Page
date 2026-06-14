"use client";

import { useMemo, useState } from "react";
import { trackEvent } from "../../components/Analytics";
import ToolCtas from "../components/ToolCtas";

function addDays(days: number) {
  const date = new Date();
  date.setDate(date.getDate() + Math.max(0, Math.floor(days)));
  return date.toISOString().slice(0, 10);
}

export default function ReorderCalculator() {
  const [currentInventory, setCurrentInventory] = useState(1240);
  const [dailySales, setDailySales] = useState(42);
  const [leadTimeDays, setLeadTimeDays] = useState(45);
  const [safetyStockDays, setSafetyStockDays] = useState(14);

  const result = useMemo(() => {
    const daysUntilStockout = dailySales > 0 ? currentInventory / dailySales : 0;
    const reorderInDays = daysUntilStockout - leadTimeDays - safetyStockDays;
    const riskLevel =
      reorderInDays <= 0 ? "High" : reorderInDays <= 14 ? "Medium" : "Low";

    return {
      daysUntilStockout,
      reorderInDays,
      riskLevel,
      reorderDate: reorderInDays <= 0 ? "Reorder Now" : addDays(reorderInDays),
    };
  }, [currentInventory, dailySales, leadTimeDays, safetyStockDays]);

  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
        {[
          ["Current Inventory", currentInventory, setCurrentInventory],
          ["Daily Sales", dailySales, setDailySales],
          ["Lead Time Days", leadTimeDays, setLeadTimeDays],
          ["Safety Stock Days", safetyStockDays, setSafetyStockDays],
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
                {
                  (setter as React.Dispatch<React.SetStateAction<number>>) (
                    Number(event.target.value),
                  );
                  trackEvent("calculator_used", { calculator: "reorder" });
                }
              }
              className="mt-2 min-h-12 w-full rounded-md border border-slate-300 px-3 dark:border-slate-700 dark:bg-slate-950"
            />
          </label>
        ))}
      </div>

      <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
          Result
        </p>
        <h2 className="mt-3 text-3xl font-bold">Risk Level: {result.riskLevel}</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <div className="rounded-md bg-white p-4 dark:bg-slate-950">
            <p className="text-xs text-slate-500">Days Until Stockout</p>
            <p className="mt-2 text-xl font-bold">
              {Math.floor(result.daysUntilStockout)} days
            </p>
          </div>
          <div className="rounded-md bg-white p-4 dark:bg-slate-950">
            <p className="text-xs text-slate-500">Recommended Reorder Date</p>
            <p className="mt-2 text-xl font-bold">{result.reorderDate}</p>
          </div>
          <div className="rounded-md bg-white p-4 dark:bg-slate-950">
            <p className="text-xs text-slate-500">Inventory Cover Days</p>
            <p className="mt-2 text-xl font-bold">
              {Math.floor(result.daysUntilStockout)} days
            </p>
          </div>
          <div className="rounded-md bg-white p-4 dark:bg-slate-950">
            <p className="text-xs text-slate-500">Reorder Window</p>
            <p className="mt-2 text-xl font-bold">
              {result.reorderInDays <= 0
                ? "Reorder Now"
                : `${Math.floor(result.reorderInDays)} days`}
            </p>
          </div>
        </div>
        <ToolCtas source="tool_reorder_calculator" />
      </div>
    </div>
  );
}
