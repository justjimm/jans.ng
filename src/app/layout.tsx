import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Corporate & Commercial Law Firm in Lagos | JANS",
  description:
    "Jimi Adewole Negotiators | Solicitors (JANS) is a Lagos-based Nigerian law firm providing corporate, commercial, litigation, employment, property, and energy law services.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
