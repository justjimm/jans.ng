import Image from "next/image";
import Link from "next/link";

const pillars = [
  {
    title: "Roots",
    text: "Built on integrity, disciplined legal thinking, and people. Our lawyers are trained to deliver dependable advice grounded in sound legal foundations.",
  },
  {
    title: "Growth",
    text: "We act as long-term legal partners to our clients, supporting sustainable business growth through proactive legal planning and risk management.",
  },
  {
    title: "Strength",
    text: "A diverse and forward-thinking Nigerian law firm with the capacity to handle complex transactions, negotiations, and disputes across sectors.",
  },
];

const practice = [
  "Corporate & Commercial Law",
  "Commercial Litigation & Public Law",
  "Employment Law",
  "Insurance Law",
  "Insolvency / Business Rescue / Estates",
  "Property Law & Conveyancing",
  "General Litigation",
  "Energy Law",
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b bg-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -right-24 -top-24 opacity-[0.06]">
            <Image src="/brand/Logo.jpg" alt="" width={520} height={240} />
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="text-sm font-semibold tracking-wide text-gray-600">
            Negotiators | Solicitors
          </p>

          <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">
            Corporate & Commercial Legal Solutions in Nigeria
          </h1>

          <p className="mt-4 max-w-3xl text-lg text-gray-700">
            Jimi Adewole Negotiators | Solicitors (JANS) is a Lagos-based full-service
            law firm providing strategic, solution-oriented legal services to corporate
            clients and individuals across Nigeria.
          </p>

          <p className="mt-3 text-sm font-semibold text-gray-700">
            Trusted Nigerian lawyers delivering clarity, protection, and results.
          </p>

          <p className="mt-5 text-sm font-semibold text-gray-600">
            Roots • Growth • Strength — We’ve got you covered.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-2xl bg-[rgb(var(--brand))] px-6 py-3 text-sm font-semibold text-white hover:opacity-95"
            >
              Speak to a Lawyer
            </Link>
            <Link
              href="/practice-areas"
              className="rounded-2xl border px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
            >
              View Practice Areas
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-gray-50">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-14 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Practice Areas */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold">Practice Areas</h2>
              <p className="mt-2 text-sm text-gray-700">
                Our practice spans multiple areas of law, allowing us to provide comprehensive
                legal coverage and integrated solutions for complex matters.
              </p>
            </div>
            <Link
              href="/practice-areas"
              className="text-sm font-semibold text-gray-900 underline underline-offset-4"
            >
              See all
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {practice.map((x) => (
              <div key={x} className="rounded-2xl border bg-white p-5">
                <p className="font-semibold">{x}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-gray-900">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold text-white">
            Need clarity on a legal issue or a trusted legal partner?
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-gray-200">
            Let’s understand your situation and chart a practical, results-focused path forward.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-block rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
