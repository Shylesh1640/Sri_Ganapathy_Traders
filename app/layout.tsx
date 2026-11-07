import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sri Ganapathy Traders | Wholesale & Retail Construction Supplies",
  description: "Premium construction materials supplier in Nagercoil. Dalmia Cement, Tata Tiscon TMT, Visaka Roofing, Asian Paints. Wholesale and retail supply for contractors and builders.",
  keywords: "construction materials Nagercoil, cement dealers Nagercoil, TMT steel suppliers, roofing sheets Kanniyakumari, paint dealers Nagercoil, wholesale construction materials",
  openGraph: {
    title: "Sri Ganapathy Traders | Construction Materials Supplier",
    description: "Premium construction materials supplier in Nagercoil. Quality brands, wholesale and retail supply.",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
