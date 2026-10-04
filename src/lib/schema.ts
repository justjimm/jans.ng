import { SITE } from '../data/site';
import { GROUPS } from '../data/firm';

const ORG_ID = `${SITE.url}/#firm`;

export function organizationSchema() {
  return {
    '@type': ['LegalService', 'Organization'],
    '@id': ORG_ID,
    name: SITE.name,
    alternateName: SITE.formerName,
    url: `${SITE.url}/`,
    logo: `${SITE.url}/brand/jans-full.png`,
    image: `${SITE.url}/og.png`,
    description: SITE.description,
    foundingDate: String(SITE.founded),
    email: SITE.email,
    telephone: SITE.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: 'Lagos',
      addressCountry: SITE.address.country,
    },
    areaServed: { '@type': 'Country', name: 'Nigeria' },
    knowsAbout: GROUPS.flatMap((g) => g.practices.map((p) => p.name)),
  };
}

export function personSchema(p: { name: string; title: string; email: string; photo: string; education: string[] }, slug: string) {
  return {
    '@type': 'Person',
    '@id': `${SITE.url}/partners/${slug}/#person`,
    name: p.name,
    jobTitle: p.title,
    email: p.email,
    image: `${SITE.url}${p.photo}`,
    url: `${SITE.url}/partners/${slug}/`,
    worksFor: { '@id': ORG_ID },
    hasCredential: p.education.length ? p.education : undefined,
  };
}

export function articleSchema(n: {
  title: string; standfirst: string; date: Date; author: string; area: string; slug: string; authorSlug?: string;
}) {
  return {
    '@type': 'Article',
    headline: n.title,
    description: n.standfirst,
    datePublished: n.date.toISOString().slice(0, 10),
    articleSection: n.area,
    inLanguage: 'en-NG',
    url: `${SITE.url}/insights/${n.slug}/`,
    mainEntityOfPage: `${SITE.url}/insights/${n.slug}/`,
    image: `${SITE.url}/og.png`,
    author: n.authorSlug
      ? { '@id': `${SITE.url}/partners/${n.authorSlug}/#person`, '@type': 'Person', name: n.author }
      : { '@type': 'Person', name: n.author },
    publisher: { '@id': ORG_ID },
  };
}
