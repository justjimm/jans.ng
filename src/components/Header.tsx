import Image from "next/image";
import Link from "next/link";

const nav = [
  { name: "About", href: "/about" },
  { name: "Practice Areas", href: "/practice-areas" },
  { name: "Team", href: "/team" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/brand/Logo.jpg"
            alt="Jimi Adewole Negotiators | Solicitors"
            width={170}
            height={60}
            priority
          />
        </Link>

        <nav className="hidden gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-[rgb(var(--brand-dark))]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-xl bg-[rgb(var(--brand))] px-4 py-2 text-sm font-semibold text-white hover:opacity-95"
        >
          Book a Consultation
        </Link>
      </div>
          <div className="h-1 w-full bg-[rgb(var(--brand))]" />
    </header>
  );
}
