import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/ui/components/Footer/Footer";
import { Navigation } from "@/ui/components/Navigation/Navigation";
import { Alata, Source_Code_Pro } from "next/font/google";
import { Content } from "@/ui/components/Content/Content";

const alata = Alata({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-alata",
  display: "swap",
});

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source-code-pro",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Formae Bureau",
  description: "Interior design in the Netherlands",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${alata.variable} ${sourceCodePro.variable}`}>
      <body>
        <Navigation />
        <Content>
          {children}
        </Content>
        <Footer />
      </body>
    </html>
  );
}
