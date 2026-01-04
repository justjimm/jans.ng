import Image from "next/image";
import Link from "next/link";
import { partners } from "@/lib/people";

export default function TeamPage() {
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
        <div className="mx-auto max-w-6xl px-4 py-14 relative">
          <h1 className="text-4xl font-bold md:text-5xl">Our People</h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-700">
            Our partners combine technical competence, commercial awareness, and practical experience to deliver
            results-driven legal services for corporate clients and individuals across Nigeria.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {partners.map((p) => (
            <article key={p.email} className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-5 sm:flex-row">
                <Link
                  href={`/team/${p.slug}`}
                  className="relative h-44 w-full overflow-hidden rounded-2xl bg-gray-100 sm:h-40 sm:w-40"
                  aria-label={`View full profile: ${p.name}`}
                >
                  <Image
                    src={p.imageSrc}
                    alt={p.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 160px"
                    priority
                  />
                </Link>

                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">
                        <Link href={`/team/${p.slug}`} className="hover:underline underline-offset-4">
                          {p.name}
                        </Link>
                      </h2>
                      <p className="mt-1 text-sm font-semibold text-gray-700">{p.title}</p>
                    </div>
                    <Link
                      href={`/team/${p.slug}`}
                      className="text-sm font-semibold text-gray-900 underline underline-offset-4"
                    >
                      View profile
                    </Link>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.practiceFocus.map((x) => (
                      <span key={x} className="rounded-full border px-3 py-1 text-xs font-medium text-gray-700">
                        {x}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 text-sm text-gray-700 whitespace-pre-line">{p.shortBio}</div>

                  <details className="mt-4 rounded-xl border bg-gray-50 p-4">
                    <summary className="cursor-pointer text-sm font-semibold text-gray-900">
                      Read full profile (expand)
                    </summary>
                    <div className="mt-3 text-sm text-gray-700 whitespace-pre-line">{p.fullProfile}</div>
                    <div className="mt-4">
                      <Link
                        href={`/team/${p.slug}`}
                        className="inline-flex rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
                      >
                        Open profile page
                      </Link>
                    </div>
                  </details>

                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <Link
                      href={`mailto:${p.email}`}
                      className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
                    >
                      Email
                    </Link>
                    <span className="text-sm text-gray-600">{p.email}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
