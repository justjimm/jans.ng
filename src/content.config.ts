import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const AREAS = [
  'Arbitration',
  'Banking',
  'Capital Markets',
  'Corporate',
  'Data Protection',
  'Dispute Resolution',
  'Employment',
  'Energy',
  'Estates',
  'Insolvency',
  'Insurance',
  'Litigation',
  'Property',
  'Sports',
  'Tax',
] as const;

const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    area: z.enum(AREAS),
    author: z.string(),
    authorRole: z.string().optional(),
    standfirst: z.string(),
    disclosure: z.string().optional(),
    closing: z
      .string()
      .default('This note is general information, not legal advice. For advice on your own matter, speak to us.'),
    related: z.string().optional(),
    sources: z.array(z.object({ title: z.string(), url: z.string() })).default([]),
    draft: z.boolean().default(false),
  }),
});

const partners = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/partners' }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    focus: z.string(),
    email: z.string(),
    photo: z.string(),
    order: z.number(),
    education: z.array(z.string()).default([]),
  }),
});

export const collections = { insights, partners };
