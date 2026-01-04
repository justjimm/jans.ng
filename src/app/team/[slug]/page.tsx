import Image from "next/image";
import Link from "next/link";
import { partners } from "@/lib/people";
import type { Metadata } from "next";

type Props = { params: { slug: string } };

function getPartner(slug: string) {
  return partners.find((p) => p.slug === slug);
}

export function generateStaticParams() {
  return partners.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const p = getPartner(params.slug);
  if (!p) return { title: "Our People | JANS" };
  return {
    title: `${p.name} | JANS`,
    description: `${p.title} at Jimi Adewole Negotiators | Solicitors (JANS).`,
  };
}

export default function PartnerProfilePage({ params }: Props) {
  const p = getPartner(params.slug);

  if (!p) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-14">
        <h1 className="text-3xl font-bold">Profile not found</h1>
        <p className="mt-3 text-gray-700">The team profile you’re looking for does not exist.</p>
        <div className="mt-6">
          <Link href="/team" className="text-sm font-semibold underline underline-offset-4">
            Back to Our People
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <section className="border-b relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "url(/brand/Logo.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right -60px top -40px",
            backgroundSize: "420px auto",
          }}
        />
        <div className="mx-auto max-w-6xl px-4 py-12 relative">
          <Link href="/team" className="text-sm font-semibold text-gray-900 underline underline-offset-4">
            ← Back to Our People
          </Link>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">{p.name}</h1>
          <p className="mt-2 text-sm font-semibold text-gray-700">{p.title}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.practiceFocus.map((x) => (
              <span key={x} className="rounded-full border px-3 py-1 text-xs font-medium text-gray-700">
                {x}
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href={`mailto:${p.email}`}
              className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
            >
              Email
            </Link>
            <span className="text-sm text-gray-600">{p.email}</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-[260px,1fr]">
          <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-gray-100 md:h-72">
            <Image src={p.imageSrc} alt={p.name} fill className="object-cover" sizes="260px" priority />
          </div>

          <div>
            <h2 className="text-2xl font-bold">Profile</h2>
            <div className="mt-4 text-sm text-gray-700 whitespace-pre-line leading-relaxed">
              {p.fullProfile}
            </div>

            <div className="mt-10 rounded-2xl border bg-gray-50 p-6">
              <h3 className="text-lg font-semibold">Quick Bio</h3>
              <p className="mt-2 text-sm text-gray-700 whitespace-pre-line">{p.shortBio}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
