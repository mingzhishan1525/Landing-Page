# China Supply Radar Growth Engine

China Supply Radar Growth Engine is the acquisition system for the
China Supply Radar product line. It is not an independent SaaS product.

This Next.js project includes the landing page, SEO tools, blog, newsletter,
generated content, analytics events, and the conversion funnel for the
China Supply Radar Shopify App and Chrome Extension.

## Product Line

- Product line: `China Supply Radar`
- Surface: `Growth Engine / Landing / SEO Tools`
- Priority: `P0 acquisition system`
- Related products: `China Supply Radar Shopify App` and `China Supply Radar Chrome Extension`
- Canonical name: `China Supply Radar Growth Engine`
- Deprecated name: `China Supply Growth System`
- Boundary: do not describe this project as a standalone SaaS.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Static, no login, no database, no payment flow
- Ready for Vercel deployment

## Pages

- `/` - Landing page
- `/privacy` - Privacy Policy
- `/terms` - Terms of Service
- `/blog` - Blog placeholder for future SEO content
- `/contact` - Support and general contact page
- `/shopify` - Shopify App V1 waitlist and positioning page
- `/robots.txt` - Search engine crawler rules
- `/sitemap.xml` - Sitemap

## Environment Variables

Copy `.env.example` to your deployment provider and fill values as needed.

```bash
NEXT_PUBLIC_SHOPIFY_APP_URL=https://app.chinasupplyradar.com/onboarding
NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
```

The published Chrome Web Store listing and status are defined in `app/config.ts`.
Legacy `NEXT_PUBLIC_CHROME_STORE_STATUS` and `NEXT_PUBLIC_CHROME_STORE_URL`
environment variables are no longer used, so stale deployment values cannot
disable the published installation link.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
```

Static files are exported to `out/`.

## Deploy to Cloudflare Pages

1. Push this project to a Git repository.
2. Create a new Cloudflare Pages project.
3. Connect the repository.
4. Use the following build settings:

```bash
Build command: npm run build
Build output directory: out
```

5. Select the Next.js framework preset when available.
6. Add the custom domain in Cloudflare Pages after the first successful deploy.

Set the environment variables above in Cloudflare Pages before production
deployment if GA4, Search Console verification, or the final Chrome Web Store
URL is available.

## Deploy to Vercel

1. Push this project to a Git repository.
2. Import the repository in Vercel.
3. Keep the default framework preset as `Next.js`.
4. Use the default build command:

```bash
npm run build
```

5. Deploy.

Set the environment variables above in Vercel before production deployment if
GA4, Search Console verification, or the final Chrome Web Store URL is
available.
