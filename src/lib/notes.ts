import { getCollection, type CollectionEntry } from 'astro:content';

export type Note = CollectionEntry<'insights'>;
export type Partner = CollectionEntry<'partners'>;

const MON3 = 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' ');
const MONTHS = 'January February March April May June July August September October November December'.split(' ');

export async function getNotes(): Promise<Note[]> {
  const all = await getCollection('insights', ({ data }) => !data.draft);
  return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function getPartners(): Promise<Partner[]> {
  const all = await getCollection('partners');
  return all.sort((a, b) => a.data.order - b.data.order);
}

export const shortDate = (d: Date) => `${d.getUTCDate()} ${MON3[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
export const longDate = (d: Date) => `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
export const isoDate = (d: Date) => d.toISOString().slice(0, 10);
export const areaKey = (a: string) => a.toLowerCase().replace(/[^a-z]+/g, '-').replace(/^-|-$/g, '');

export function readingMinutes(note: Note) {
  const words = `${note.data.standfirst} ${note.body ?? ''}`.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

export function partnerSlugByName(partners: Partner[], name: string) {
  return partners.find((p) => p.data.name === name)?.id;
}
