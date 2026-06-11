import Link from "next/link";

const policyItems = [
  "China Supply Radar does not collect personally identifiable information.",
  "China Supply Radar does not require account registration or login.",
  "China Supply Radar does not provide cloud sync.",
  "China Supply Radar does not upload inventory data, supplier notes, order history, or settings to any server.",
  "Inventory, supplier notes, order history, and settings are stored locally in chrome.storage.local.",
  "China Supply Radar does not sell user data.",
  "China Supply Radar does not use third-party advertising trackers.",
  "Users can uninstall the extension to remove locally stored extension data from their browser.",
];

export const metadata = {
  title: "Privacy Policy | China Supply Radar",
  description: "Privacy Policy for the China Supply Radar Chrome extension.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
      <header className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-5 py-4">
          <Link href="/" className="text-base font-bold text-slate-950 dark:text-white">
            China Supply Radar
          </Link>
          <Link
            href="/"
            className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-slate-400 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500"
          >
            Back home
          </Link>
        </nav>
      </header>

      <article className="mx-auto max-w-4xl px-5 py-14">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
          Privacy Policy
        </p>
        <h1 className="mt-4 text-4xl font-bold text-slate-950 dark:text-white">
          Your supplier and inventory data stays local.
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
          China Supply Radar is designed as a local-first Chrome extension for
          supply risk, reorder timing, and supplier reliability decisions. No
          account is required, no supplier data is uploaded, and no third-party
          advertising tracking is used.
        </p>

        <section className="mt-10 rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            What We Do Not Collect
          </h2>
          <ul className="mt-5 space-y-4">
            {policyItems.map((item) => (
              <li key={item} className="flex gap-3 leading-7 text-slate-700 dark:text-slate-300">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
            <h2 className="text-xl font-bold text-slate-950 dark:text-white">
              Local Storage
            </h2>
            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
              All inventory records, supplier notes, order history, and extension
              settings are saved in your browser using chrome.storage.local.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
            <h2 className="text-xl font-bold text-slate-950 dark:text-white">
              Data Removal
            </h2>
            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
              You can remove local extension data by uninstalling China Supply
              Radar from Chrome.
            </p>
          </div>
        </section>

        <section className="mt-8 rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-xl font-bold text-slate-950 dark:text-white">
            Contact
          </h2>
          <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
            For privacy questions, contact{" "}
            <a
              href="mailto:hello@chinasupplyradar.com"
              className="font-semibold text-teal-700 hover:text-teal-800 dark:text-teal-300 dark:hover:text-teal-200"
            >
              hello@chinasupplyradar.com
            </a>
            .
          </p>
        </section>
      </article>
    </main>
  );
}
