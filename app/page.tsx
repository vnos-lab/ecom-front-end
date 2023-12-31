import React from "react";

import AppButton from "@/components/App/AppButton";

import FlashSales from "./home/FlashSales";
import HeroBanner from "./home/HeroBanner";

export default function Home() {
  return (
    <main>
      <HeroBanner />

      <AppButton>Send Message</AppButton>

      <div className="h-[1000px]" />

      <FlashSales />
    </main>
  );
}
