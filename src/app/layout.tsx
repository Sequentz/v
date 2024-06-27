import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import localFont from 'next/font/local';

 
const myFont = localFont({
  src: './OPTIBankGothic-Medium.otf',
  display: 'swap',
  variable: '--font-medium',
})


export const metadata: Metadata = {
  title: "Roar",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className={myFont.variable}>
      <head>
        {/* Any additional head tags can be added here */}
      </head>
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
