"use client";

import { useState } from "react";
import { trackEvent } from "./Analytics";

type NewsletterSignupProps = {
  source: string;
};

export default function NewsletterSignup({ source }: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, source }),
      });
      const data = (await response.json()) as { message?: string };
      setMessage(data.message || "Subscription successful");
      if (response.ok) {
        trackEvent("newsletter_signup", { source });
        setEmail("");
      }
    } catch {
      setMessage("We could not subscribe you right now. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="mt-6 flex flex-col gap-3 sm:flex-row" onSubmit={onSubmit}>
      <label className="sr-only" htmlFor={`newsletter-${source}`}>
        Email address
      </label>
      <input
        id={`newsletter-${source}`}
        name="email"
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="you@example.com"
        className="min-h-12 flex-1 rounded-md border border-slate-300 bg-white px-4 text-base text-slate-950 outline-none focus:border-teal-600 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="min-h-12 rounded-md bg-slate-950 px-6 py-3 text-base font-semibold text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-teal-400 dark:text-slate-950 dark:hover:bg-teal-300"
      >
        {isSubmitting ? "Joining..." : "Get Weekly China Supply Report"}
      </button>
      {message ? (
        <p className="text-sm font-medium text-slate-600 dark:text-slate-300 sm:self-center">
          {message}
        </p>
      ) : null}
    </form>
  );
}
