import { growthLinks, withUtm } from "../../../lib/growth-links";

type ToolCtasProps = {
  source: string;
};

export default function ToolCtas({ source }: ToolCtasProps) {
  return (
    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
      <a
        href={withUtm(growthLinks.chromeInstallUrl, source)}
        className="inline-flex min-h-12 items-center justify-center rounded-md bg-teal-600 px-5 py-3 text-base font-semibold text-white hover:bg-teal-700"
      >
        Install Chrome Extension
      </a>
      <a
        href={withUtm(growthLinks.shopifyInstallUrl, source)}
        className="inline-flex min-h-12 items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-base font-semibold text-slate-900 hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-500"
      >
        Connect Shopify Store
      </a>
    </div>
  );
}
