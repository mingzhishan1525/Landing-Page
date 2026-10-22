export type Inputs = { stock: number; demand: number; quantity: number; receiptDay: number; delay: number; days: number; backorders: boolean };
export function simulate(input: Inputs) {
  const { stock, demand, quantity, receiptDay, delay, days, backorders } = input;
  if (![stock, demand, quantity, receiptDay, delay, days].every(Number.isSafeInteger) || stock < 0 || demand < 0 || quantity < 0 || receiptDay < 1 || delay < 0 || days < 1 || days > 365 || Math.max(stock, demand, quantity) > 1000000 || receiptDay > 365 || delay > 365) throw new Error('Use whole units (0–1,000,000), receipt day 1–365, delay 0–365 and horizon 1–365.');
  let balance = stock, backlog = 0;
  return Array.from({ length: days }, (_, index) => {
    const day = index + 1, opening = balance, openingBacklog = backlog;
    const backlogFilled = Math.min(balance, backlog); balance -= backlogFilled; backlog -= backlogFilled;
    const filled = Math.min(balance, demand); balance -= filled;
    const unfilled = demand - filled;
    if (backorders) backlog += unfilled;
    const receipt = day === receiptDay + delay ? quantity : 0; balance += receipt;
    return { day, opening, openingBacklog, demand, backlogFilled, filled, unfilled, receipt, closing: balance, backlog, available: Math.max(0, balance - backlog) };
  });
}
