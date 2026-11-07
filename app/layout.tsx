import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sri Ganapathy Traders | Wholesale & Retail Construction Supplies Since 2008",
  description: "Serving 100K+ customers since 2008. Premium construction materials supplier in Nagercoil with 20+ trusted brands. Dalmia Cement, Tata Tiscon TMT, Visaka Roofing, Asian Paints. Wholesale and retail supply.",
  keywords: "construction materials Nagercoil, cement dealers Nagercoil, TMT steel suppliers, roofing sheets Kanniyakumari, paint dealers Nagercoil, wholesale construction materials, Sri Ganapathy Traders",
  openGraph: {
    title: "Sri Ganapathy Traders | Construction Materials Supplier Since 2008",
    description: "Serving 100K+ customers with 20+ premium brands. Quality construction materials, wholesale and retail supply in Nagercoil.",
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
