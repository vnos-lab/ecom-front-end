import React from "react";

import FlashSales from "../components/FlashSales";
import HeroBanner from "./home/HeroBanner";

export default function Home() {
  return (
    <main>
      <HeroBanner />

      <FlashSales />
    </main>
  );
}
