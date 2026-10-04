// What the firm does: values, practice groups, sectors. Edit the text here.

export const VALUES = [
  {
    name: 'Rigour',
    pillar: 'p1',
    text: "Our people are the foundation. We train and mentor every lawyer to the standards of the profession, and a client's concern stays on our desk until it is resolved.",
  },
  {
    name: 'Growth',
    pillar: 'p2',
    text: 'We act as long-term counsel. Knowing your business, your sector and its regulators lets us advise before a problem lands, not after it.',
  },
  {
    name: 'Range',
    pillar: 'p3',
    text: 'Experience and new thinking, side by side, across negotiations, transactions and disputes in every sector we serve.',
  },
];

export const DO = [
  { verb: 'Negotiate', text: 'Deals, partnerships and settlements, argued from your side of the table.' },
  { verb: 'Structure', text: 'Companies, transactions and investments set up to work under Nigerian law and regulation.' },
  { verb: 'Advise', text: 'Plain written advice on contracts, compliance and risk, given before the decision is made.' },
  { verb: 'Resolve', text: 'Litigation, arbitration and mediation when a matter has to be decided.' },
];

export const ACT_FOR = [
  'Companies and their boards',
  'Founders and investors',
  'Lenders and fintechs',
  'Energy and property businesses',
  'Insurers and policyholders',
  'Families, executors and trustees',
  'Non-profits and faith organisations',
];

export type Practice = { name: string; desc: string; lead: string };
export type Group = { id: string; name: string; line: string; leads: string; practices: Practice[] };

export const GROUPS: Group[] = [
  {
    id: 'disputes',
    name: 'Dispute Resolution',
    line: 'When a matter has to be fought, or settled well.',
    leads: 'Simisola Idowu · Olujimi Adewole',
    practices: [
      { name: 'Commercial Litigation', desc: 'Contract, shareholder and commercial claims before the Federal and State High Courts.', lead: 'Simisola Idowu' },
      { name: 'Arbitration', desc: 'Domestic and international arbitration under the Arbitration and Mediation Act 2023, from notice to enforcement of the award.', lead: 'Olujimi Adewole' },
      { name: 'Mediation & Negotiated Settlement', desc: 'Structured negotiation and mediation to resolve disputes before, or alongside, formal proceedings.', lead: 'Olujimi Adewole' },
      { name: 'Public Law & Regulatory Disputes', desc: 'Judicial review and disputes with government agencies, regulators and public institutions.', lead: 'Simisola Idowu' },
      { name: 'Debt Recovery & Enforcement', desc: 'Recovering sums owed, including from public bodies, and enforcing judgments and awards.', lead: 'Olujimi Adewole' },
      { name: 'General Civil Litigation', desc: 'Negligence, personal injury and other civil claims.', lead: 'Simisola Idowu' },
    ],
  },
  {
    id: 'transactions',
    name: 'Transactions & Advisory',
    line: 'When a deal has to be structured, negotiated and closed.',
    leads: 'Afolabi Ogunsanya · Olujimi Adewole · Simisola Idowu',
    practices: [
      { name: 'Corporate & Commercial', desc: 'Company formation, corporate secretarial work, MEMART amendments, CAC filings and governance.', lead: 'Afolabi Ogunsanya' },
      { name: 'M&A and Joint Ventures', desc: 'Acquisitions, joint ventures and strategic partnerships, from structure to completion.', lead: 'Afolabi Ogunsanya' },
      { name: 'Commercial Contracts & Negotiation', desc: 'Drafting, reviewing and negotiating the agreements a business runs on.', lead: 'Afolabi Ogunsanya · Olujimi Adewole' },
      { name: 'Banking, Finance & Fintech', desc: 'Lending, BNPL and asset-finance agreements, security documents and digital lending compliance.', lead: 'Olujimi Adewole' },
      { name: 'Capital Markets & Investment Structuring', desc: 'Fundraising, private placements and scheme structuring under the Investments and Securities Act 2025.', lead: 'Simisola Idowu' },
      { name: 'Tax', desc: 'Company, personal and state taxes under the Nigeria Tax Act 2025, including reliefs, VAT and consumption taxes.', lead: 'Afolabi Ogunsanya' },
      { name: 'Real Estate & Conveyancing', desc: "Title due diligence, Governor's Consent, perfection, leases, sale and purchase.", lead: 'Olujimi Adewole' },
      { name: 'Energy & Natural Resources', desc: 'Oil, gas, power and renewables: licensing, project contracts, financing and disputes.', lead: 'Olujimi Adewole' },
    ],
  },
  {
    id: 'regulatory',
    name: 'Workplace, Regulatory & Private Client',
    line: 'When rules, people and legacies need managing.',
    leads: 'Simisola Idowu · Afolabi Ogunsanya · Ortega Opako',
    practices: [
      { name: 'Employment & Labour', desc: 'Employment contracts, workplace policies, discipline, termination, redundancy and employment disputes.', lead: 'Simisola Idowu' },
      { name: 'Insurance', desc: 'Claims, policy interpretation and insurance disputes for insurers, brokers and policyholders.', lead: 'Simisola Idowu' },
      { name: 'Regulatory Compliance & Licensing', desc: "Licences and ongoing compliance with Nigeria's sector regulators.", lead: 'Afolabi Ogunsanya' },
      { name: 'Data Protection & Technology', desc: 'Compliance with the Nigeria Data Protection Act 2023: privacy notices, data processing agreements and breach response.', lead: 'Afolabi Ogunsanya' },
      { name: 'Restructuring & Insolvency', desc: 'Liquidation, receivership, business rescue and creditor recovery.', lead: 'Ortega Opako' },
      { name: 'Estates, Probate & Trusts', desc: 'Probate, estate administration, trusteeship and family trusts.', lead: 'Ortega Opako' },
    ],
  },
];

export const SECTORS = [
  { name: 'Oil & Gas', desc: 'Oilfield services contracts, payment recovery from operators, technical partnerships and local content.' },
  { name: 'Power & Renewables', desc: 'Commercial and industrial solar, storage, EPC and supply contracts, and power regulation.' },
  { name: 'Banking, Fintech & Consumer Credit', desc: 'BNPL, digital lending, asset finance and marketplace credit.' },
  { name: 'Real Estate & Construction', desc: 'Estate purchases, title perfection, development and fractional ownership.' },
  { name: 'Sports, Media & Entertainment', desc: 'Endorsement and image-rights deals, player and coach contracts, talent management.' },
  { name: 'Technology & Startups', desc: 'Software and edtech companies, founder agreements and fundraising.' },
  { name: 'Insurance', desc: 'Insurers, brokers and policyholders.' },
  { name: 'Private Clients & Families', desc: 'Estates, trusts and family property.' },
  { name: 'Non-profits, Faith Organisations & Associations', desc: 'Incorporated trustees, governance and compliance under CAMA 2020.' },
];

// Temple geometry traced from the high-resolution logo (px, y down) in a 2168 x 2597 box.
export const TEMPLE: Record<string, number[][]> = {
  pediment: [[2124, 0], [0, 396], [136, 582]],
  beam: [[2168, 63], [170, 646], [262, 770], [2165, 312]],
  p1: [[643, 745], [373, 815], [373, 2052], [647, 2264]],
  p2: [[1194, 615], [925, 683], [925, 2394], [1196, 2597]],
  p3: [[1750, 484], [1473, 556], [1474, 2261], [1751, 2108]],
  base: [[2164, 2089], [1479, 2283], [1473, 2319], [2160, 2323]],
};
