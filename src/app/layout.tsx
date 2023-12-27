import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cosmetic",
  description: "",
};

export default function RootLayout({
  children,
  modal,
  menu,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
  menu: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        {modal}
        {menu}
        <Footer />
      </body>
    </html>
  );
}
