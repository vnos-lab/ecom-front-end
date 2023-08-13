import React from "react";
import classnames from "classnames";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import SaleBanner from "@/components/layouts/SaleBanner";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "E-commerce Shop",
  description: "From VNOS-Lab with love",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={classnames(
          inter.variable,
          poppins.variable,
          "min-h-screen flex flex-col",
        )}
      >
        <SaleBanner />

        <Header />

        <div className="flex-1">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
