import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/ui/components/Footer/Footer";
import { Navigation } from "@/ui/components/Navigation/Navigation";

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
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
