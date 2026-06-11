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
- `/robots.txt` - Search engine crawler rules
- `/sitemap.xml` - Sitemap

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

No environment variables are required.

## Deploy to Vercel

1. Push this project to a Git repository.
2. Import the repository in Vercel.
3. Keep the default framework preset as `Next.js`.
4. Use the default build command:

```bash
npm run build
```

5. Deploy.

No environment variables are required.
