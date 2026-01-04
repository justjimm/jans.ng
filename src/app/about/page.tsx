import Image from "next/image";
export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-24 -top-24 opacity-[0.05]">
            <Image src="/brand/Logo.jpg" alt="" width={480} height={220} />
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 py-14">
          <h1 className="text-4xl font-bold md:text-5xl">About JANS</h1>
          <p className="mt-4 max-w-4xl text-lg text-gray-700">
            Jimi Adewole Negotiators | Solicitors (JANS) is a premium Nigerian law firm
            headquartered in Lagos, providing corporate, commercial, and dispute resolution
            services to businesses and individuals across Nigeria.
          </p>
          <p className="mt-4 max-w-4xl text-sm text-gray-700">
            Founded in 2014, JANS has grown into a trusted legal partner for companies,
            entrepreneurs, public institutions, and private clients seeking reliable legal
            representation and strategic advice.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold">Our Approach</h2>
          <p className="mt-3 max-w-4xl text-sm text-gray-700">
            JANS is built on a simple but powerful philosophy: legal service should be
            strategic, proactive, and human-centered. We do not merely respond to legal
            problems; we work closely with our clients to anticipate challenges, manage
            risk, and unlock opportunities.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold">Roots • Growth • Strength</h2>
          <p className="mt-3 max-w-4xl text-sm text-gray-700">
            Our culture and strategy are grounded in three pillars that guide how we work
            and how we serve our clients.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Roots</h3>
              <p className="mt-2 text-sm text-gray-700">
                At JANS, people are our strongest foundation. We invest heavily in training,
                mentorship, and professional development, ensuring our lawyers operate at the
                highest level of competence and ethics. Client concerns are treated with
                seriousness and never forgotten.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Growth</h3>
              <p className="mt-2 text-sm text-gray-700">
                We view our role as long-term legal partners. By understanding our clients’
                businesses, industries, and regulatory environments, we provide advice that
                supports sustainable growth, continuity, and resilience.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Strength</h3>
              <p className="mt-2 text-sm text-gray-700">
                Our strength comes from diversity, youth, and innovation — with rigorous
                professional standards. This balance enables strong representation in
                negotiations, transactions, and disputes across sectors.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
