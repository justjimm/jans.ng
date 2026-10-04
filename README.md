# jans.ng

The website of JANS, a Lagos law firm. Built with [Astro](https://astro.build) and published to GitHub Pages on every push to `main`.

## Adding a note (Insights)

Use Pages CMS at https://app.pagescms.org (sign in, open this repository, choose **Insights (notes)**). New notes start as drafts; untick **Draft** and save to publish. The site rebuilds in about a minute.

Or add a Markdown file to `src/content/insights/` following the existing ones.

## Common edits

- Contact details, social links, Formspree form ID: `src/data/site.ts`
- Values, practice groups, sectors: `src/data/firm.ts`
- Partner profiles: `src/content/partners/`

## Local development

```sh
npm ci
npm run dev
```
