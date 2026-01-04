import Image from "next/image";
const areas = [
  {
    title: "Corporate & Commercial Law",
    desc: "We advise Nigerian and international businesses on corporate structuring, mergers and acquisitions, commercial contracts, regulatory compliance, and general business operations.",
    items: ["Corporate Advisory", "Commercial Contracts", "Transactions", "Regulatory Support"],
  },
  {
    title: "Commercial Litigation & Public Law",
    desc: "Our lawyers represent clients in commercial litigation, arbitration, and regulatory disputes before Nigerian courts and tribunals, including matters involving government agencies and public institutions.",
    items: ["Litigation", "Arbitration", "Regulatory Disputes", "Public Law Proceedings"],
  },
  {
    title: "Employment Law",
    desc: "We provide employment and labour law advice to employers and employees, covering contracts, workplace policies, termination, redundancy, and employment disputes in Nigeria.",
    items: ["Employment Contracts", "HR Policy Advisory", "Workplace Disputes", "Compliance"],
  },
  {
    title: "Insurance Law",
    desc: "We act for insurers, insured parties, and brokers in insurance claims, policy interpretation, regulatory compliance, and insurance-related litigation.",
    items: ["Claims Advisory", "Policy Interpretation", "Disputes", "Regulatory Support"],
  },
  {
    title: "Insolvency, Business Rescue & Estates",
    desc: "Our insolvency lawyers advise on liquidation, corporate restructuring, bankruptcy, and estate administration, acting for creditors, debtors, and executors.",
    items: ["Restructuring", "Recovery", "Liquidation Support", "Estate Administration"],
  },
  {
    title: "Property Law & Conveyancing",
    desc: "We handle real estate transactions, conveyancing, mortgages, property development, land use compliance, and property disputes across Lagos and Nigeria.",
    items: ["Title Review", "Perfection", "Leases", "Sale & Purchase"],
  },
  {
    title: "General Litigation",
    desc: "We represent clients in civil disputes including personal injury claims, professional negligence, medical malpractice, and other tortious matters.",
    items: ["Civil Claims", "Debt Recovery", "Injunctions", "Settlement Negotiations"],
  },
  {
    title: "Energy Law",
    desc: "Our Energy Practice advises clients in Nigeria’s oil and gas, power, and renewable energy sectors on licensing, regulatory compliance, project development, financing, and energy-related disputes.",
    items: ["Licensing & Compliance", "Project Advisory", "Commercial Contracts", "Dispute Resolution"],
  },
];

export default function PracticeAreasPage() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-24 -top-24 opacity-[0.05]">
            <Image src="/brand/Logo.jpg" alt="" width={480} height={220} />
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 py-14">
          <h1 className="text-4xl font-bold md:text-5xl">Practice Areas</h1>
          <p className="mt-4 max-w-4xl text-lg text-gray-700">
            Our practice areas reflect the breadth of our experience and our commitment
            to delivering practical, commercially sound legal solutions for corporate
            clients and individuals across Nigeria.
          </p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-6 md:grid-cols-2">
            {areas.map((a) => (
              <div key={a.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold">{a.title}</h2>
                <p className="mt-2 text-sm text-gray-700">{a.desc}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-700">
                  {a.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
