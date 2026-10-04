import { getNotes, getPartners, isoDate } from '../lib/notes';
import { SITE } from '../data/site';
import { GROUPS, SECTORS } from '../data/firm';

// A plain-text summary of the site for AI assistants and search tools (llmstxt.org format).
export async function GET() {
  const notes = await getNotes();
  const partners = await getPartners();
  const u = (p: string) => `${SITE.url}${p}`;
  const lines = [
    '# JANS',
    '',
    `> ${SITE.description} Formerly ${SITE.formerName}. Office: ${SITE.address.display}, Nigeria. Email ${SITE.email}.`,
    '',
    '## Firm',
    `- [About JANS](${u('/about/')}): history since ${SITE.founded}, how the firm works, values (Rigour, Growth, Range)`,
    `- [Expertise](${u('/expertise/')}): ${GROUPS.map((g) => `${g.name} (${g.practices.map((p) => p.name).join(', ')})`).join('; ')}`,
    `- [Sectors](${u('/sectors/')}): ${SECTORS.map((s) => s.name).join(', ')}`,
    `- [Contact](${u('/contact/')}): WhatsApp, email ${SITE.email}, phone ${SITE.phoneDisplay}`,
    '',
    '## Partners',
    ...partners.map((p) => `- [${p.data.name}](${u(`/partners/${p.id}/`)}): ${p.data.title}. ${p.data.focus}.`),
    '',
    '## Insights: notes on Nigerian law',
    ...notes.map((n) => `- [${n.data.title}](${u(`/insights/${n.id}/`)}) (${n.data.area}, ${n.data.author}, ${isoDate(n.data.date)}): ${n.data.standfirst}`),
    '',
    '## Optional',
    `- [Privacy notice](${u('/privacy/')})`,
    `- [Disclaimer](${u('/disclaimer/')}): content is general information about Nigerian law, not legal advice`,
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
