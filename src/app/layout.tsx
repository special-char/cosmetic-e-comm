import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/index";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cosmetic Products",
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
        
        {children}
        {modal}
        {menu}
        <Footer />
      </body>
    </html>
  );
}
