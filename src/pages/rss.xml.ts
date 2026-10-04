import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getNotes } from '../lib/notes';
import { SITE } from '../data/site';

export async function GET(context: APIContext) {
  const notes = await getNotes();
  return rss({
    title: 'JANS Insights: Notes on Nigerian law',
    description: 'Short, practical notes on Nigerian law and regulation from the JANS team.',
    site: context.site ?? SITE.url,
    items: notes.map((n) => ({
      title: n.data.title,
      description: n.data.standfirst,
      pubDate: n.data.date,
      link: `/insights/${n.id}/`,
      author: `${SITE.email} (${n.data.author})`,
      categories: [n.data.area],
    })),
    customData: '<language>en-ng</language>',
  });
}
