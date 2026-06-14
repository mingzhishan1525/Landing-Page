# China Supply Radar Landing Page

A static Next.js landing page for China Supply Radar, a Chrome extension that helps eCommerce sellers avoid stockouts caused by China supplier delays.

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
NEXT_PUBLIC_CHROME_STORE_STATUS=pending_review
NEXT_PUBLIC_CHROME_STORE_URL=https://chromewebstore.google.com/
NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
```

When Chrome Web Store review is approved, set:

```bash
NEXT_PUBLIC_CHROME_STORE_STATUS=published
NEXT_PUBLIC_CHROME_STORE_URL=<final Chrome Web Store listing URL>
```

The homepage CTA will switch from `Chrome Web Store Review Pending` to
`Install from Chrome Web Store`.

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
