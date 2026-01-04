import Image from "next/image";
export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-24 -top-24 opacity-[0.05]">
            <Image src="/brand/Logo.jpg" alt="" width={480} height={220} />
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 py-14">
          <h1 className="text-4xl font-bold md:text-5xl">Contact</h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-700">
            Email: <span className="font-semibold">info@jans.ng</span> • Phone: 
            <span className="font-semibold">+2347011220009</span>
          </p>
          <p className="mt-2 max-w-3xl text-sm text-gray-600">
            Tell us what you need. We’ll respond with next steps and a clear path forward.
          </p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold">Send a Message</h2>
              <form className="mt-4 space-y-3">
                <input
                  className="w-full rounded-xl border px-4 py-3 text-sm"
                  placeholder="Full name"
                />
                <input
                  className="w-full rounded-xl border px-4 py-3 text-sm"
                  placeholder="Email address"
                />
                <input
                  className="w-full rounded-xl border px-4 py-3 text-sm"
                  placeholder="Phone number"
                />
                <textarea
                  className="w-full rounded-xl border px-4 py-3 text-sm"
                  placeholder="How can we help?"
                  rows={5}
                />
                <button
                  type="button"
                  className="rounded-xl bg-[rgb(var(--brand))] px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
                >
                  Submit
                </button>
                <p className="text-xs text-gray-500">
                  (Next step: we’ll connect this form to email delivery so submissions land in
                  info@jans.ng.)
                </p>
              </form>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold">Office</h2>
              <p className="mt-3 text-sm text-gray-700">31, Ogunnoiki, Oworonshoki 100222, Lagos</p>

              <div className="mt-6 overflow-hidden rounded-2xl border bg-white">
                <iframe
                  title="JANS Office Map"
                  src="https://www.google.com/maps?q=31%2C%20Ogunnoiki%2C%20Oworonshoki%20100222%2C%20Lagos&output=embed"
                  className="h-80 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <p className="mt-3 text-xs text-gray-500">
                Map is provided for convenience. Confirm directions before visiting.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
