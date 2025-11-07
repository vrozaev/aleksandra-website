import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/ui/components/Footer/Footer";
import { Navigation } from "@/ui/components/Navigation/Navigation";
import { Raleway } from 'next/font/google'
import { Content } from "@/ui/components/Content/Content";
 
const raleway = Raleway({
  subsets: ['latin', 'cyrillic'],
})

export const metadata: Metadata = {
  title: "Aleksandra Borisova Studio",
  description: "Interior design in the Netherlands",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={raleway.className}>
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
