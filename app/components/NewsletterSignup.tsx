import TrackedLink from "./TrackedLink";
import { siteConfig } from "../config";

type NewsletterSignupProps = {
  source: string;
};

export default function NewsletterSignup({ source }: NewsletterSignupProps) {
  return (
    <div className="mt-6">
      <TrackedLink
        href={`mailto:${siteConfig.helloEmail}?subject=China%20Supply%20Radar%20product%20updates`}
        buttonName="product_updates_email"
        eventSource={source}
        className="inline-flex min-h-12 items-center justify-center rounded-md bg-slate-950 px-6 py-3 text-base font-semibold text-white hover:bg-slate-800 dark:bg-teal-400 dark:text-slate-950 dark:hover:bg-teal-300"
      >
        Ask about product updates
      </TrackedLink>
      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
        Opens your email app. Send your request to {siteConfig.helloEmail};
        clicking does not subscribe you to a mailing list.
      </p>
    </div>
  );
}
