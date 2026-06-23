# Hi-Spec Solutions Ltd — Website

Marketing and lead-generation website for Hi-Spec Solutions, a North West
construction firm specialising in roofing, structural repairs, damp proofing,
general building and maintenance.

Built with **Next.js (App Router)**, **Tailwind CSS** (Tailwind Plus *Salient*
template as the foundation), and **TypeScript**. Designed to deploy on **Vercel**.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 (or the next free port).

## Editing content

Most site content lives in one place: **`src/lib/company.ts`** — phone, email,
address, service area, the list of services, and credentials. Update those
values and they change everywhere.

Things to replace before going live:

- **Phone number & address** — currently placeholders in `src/lib/company.ts`.
- **Testimonials** — illustrative examples in `src/components/Testimonials.tsx`;
  swap in genuine client reviews.
- **Favicon** — still the template default; can be generated from the HS logo mark.
- **Project photos** — an optional gallery of real work can be added later.

## Contact form (Resend)

The "Get a quote" form posts to a server action (`src/app/contact/actions.ts`).
It sends enquiry emails via [Resend](https://resend.com) when configured.

Copy `.env.example` to `.env.local` and fill in:

- `RESEND_API_KEY` — from your Resend dashboard
- `CONTACT_TO_EMAIL` — where leads are delivered
- `CONTACT_FROM_EMAIL` — verified sender

Without a key, the form still works and logs enquiries server-side, so the site
is fully deployable immediately; add the key in Vercel to start receiving emails.

## Deploying

Push to GitHub and import the repo on Vercel, or run `vercel` from the CLI.
Add the environment variables above in the Vercel project settings.

## License

Based on the Salient template, a commercial product licensed under the
[Tailwind Plus license](https://tailwindcss.com/plus/license).
