import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-24 -bottom-24 opacity-[0.06]">
          <Image src="/brand/Logo.jpg" alt="" width={520} height={240} />
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-gray-900">
              Jimi Adewole Negotiators | Solicitors (JANS)
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Roots • Growth • Strength — We’ve got you covered.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-900">Offices</p>
            <p className="mt-2 text-sm text-gray-600">
              31, Ogunnoiki, Oworonshoki 100222, Lagos
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-900">Contact</p>
            <p className="mt-2 text-sm text-gray-600">
              Email: info@jans.ng
              <br />
              Phone: +2347011220009
            </p>
          </div>
        </div>

        <div className="mt-8 h-px w-full bg-[rgba(var(--brand),0.35)]" />

        <p className="mt-6 text-xs text-gray-500">
          © {new Date().getFullYear()} Jimi Adewole Negotiators | Solicitors. All rights reserved.
        </p>
      </div>
    </footer>
  );
}