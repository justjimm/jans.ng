import Image from "next/image";
import Link from "next/link";

type Post = {
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  readTime: string;
};

const featured: Post = {
  title: "Evidence in the Digital Age: What Businesses Should Know",
  excerpt:
    "Digital records, email trails, and device data can make or break a dispute. This short note highlights practical habits that strengthen your position before a dispute ever starts.",
  date: "2025-12-30",
  tag: "Litigation",
  readTime: "4 min read",
};

const posts: Post[] = [
  {
    title: "Practical Contract Hygiene for Growing Companies",
    excerpt:
      "Small drafting choices reduce big disputes. Here are simple clauses and habits that protect cashflow, timelines, and enforceability.",
    date: "2025-12-22",
    tag: "Corporate",
    readTime: "5 min read",
  },
  {
    title: "Employment Documentation: Policies that Actually Work",
    excerpt:
      "From onboarding to exit, clear documentation reduces conflict and protects both employer and employee interests.",
    date: "2025-12-10",
    tag: "Employment",
    readTime: "6 min read",
  },
  {
    title: "Property Transactions: Due Diligence Checklist (Nigeria)",
    excerpt:
      "A practical checklist for verifying title, avoiding common traps, and closing with confidence.",
    date: "2025-11-28",
    tag: "Property",
    readTime: "7 min read",
  },
];

function Pill({ children }: { children: string }) {
  return (
    <span className="rounded-full border bg-white px-3 py-1 text-xs font-semibold text-gray-700">
      {children}
    </span>
  );
}

export default function InsightsPage() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-24 -top-24 opacity-[0.05]">
            <Image src="/brand/Logo.jpg" alt="" width={480} height={220} />
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 py-14">
          <h1 className="text-4xl font-bold md:text-5xl">Insights</h1>
          <p className="mt-4 max-w-4xl text-lg text-gray-700">
            Our Insights provide legal updates, commentary, and practical guidance on Nigerian law,
            regulation, and business developments relevant to corporate clients and individuals.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="rounded-2xl bg-white p-8 shadow-sm md:flex md:items-start md:justify-between md:gap-10">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <Pill>{featured.tag}</Pill>
                <span className="text-xs text-gray-500">{featured.date}</span>
                <span className="text-xs text-gray-500">•</span>
                <span className="text-xs text-gray-500">{featured.readTime}</span>
              </div>
              <h2 className="mt-4 text-2xl font-bold text-gray-900">{featured.title}</h2>
              <p className="mt-3 text-sm text-gray-700">{featured.excerpt}</p>

              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-block rounded-2xl bg-[rgb(var(--brand))] px-6 py-3 text-sm font-semibold text-white hover:opacity-95"
                >
                  Discuss a Related Issue
                </Link>
              </div>
            </div>

            <div className="mt-8 md:mt-0 md:w-72">
              <div className="rounded-2xl border bg-gray-50 p-5">
                <p className="text-sm font-semibold text-gray-900">Topics</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Corporate", "Litigation", "Employment", "Insurance", "Property", "Insolvency"].map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>
                <p className="mt-4 text-xs text-gray-500">
                  (We can convert these into real clickable categories when you start publishing posts.)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* List */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold">More Articles</h2>
              <p className="mt-2 text-sm text-gray-700">Simple, practical guidance you can apply immediately.</p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {posts.map((p) => (
              <article key={p.title} className="rounded-2xl border bg-white p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <Pill>{p.tag}</Pill>
                  <span className="text-xs text-gray-500">{p.date}</span>
                  <span className="text-xs text-gray-500">•</span>
                  <span className="text-xs text-gray-500">{p.readTime}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-700">{p.excerpt}</p>
                <div className="mt-5">
                  <Link
                    href="/contact"
                    className="text-sm font-semibold text-[rgb(var(--brand-dark))] underline underline-offset-4"
                  >
                    Ask a question
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-10 text-xs text-gray-500">
            Disclaimer: Insights are general information and not legal advice. For advice on your specific matter,
            please contact JANS.
          </p>
        </div>
      </section>
    </div>
  );
}
