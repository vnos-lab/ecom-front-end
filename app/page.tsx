import React from "react";

import FlashSales from "./home/FlashSales";
import HeroBanner from "./home/HeroBanner";
import CardProduct from "@/components/CardProduct";

export default function Home() {
  const datas = {
    id: 90,
    giamgia: "-40",
    name: "HAVIT HV-G92 Gamepad",
    giamoi: "18900",
    giacu: "160",
    saorview: "4",
    totalReview: "60",
    likeProduct: true,
    imgProduct: "/images/pic_1.png",
  };
  return (
    <main>
      <HeroBanner />

      <FlashSales />

      <div>
        <CardProduct datas={datas} />
      </div>
    </main>
  );
}
