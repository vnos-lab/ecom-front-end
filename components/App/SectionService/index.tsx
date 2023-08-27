import React, { memo } from "react";
import ServiceItem from "@/components/App/SectionService/ServiceItem";
import * as Icons from "lucide-react";

function SectionService() {
  return (<section className="container px-[144px]  flex justify-between gap-x-[88px] ">
      <ServiceItem title="FREE AND FAST DELIVERY" description="Free delivery for all orders over $140">
        <Icons.Truck size={40} stroke="white" />
      </ServiceItem>
      <ServiceItem title="24/7 CUSTOMER SERVICE" description="Friendly 24/7 customer support">
        <Icons.Headphones size={40} stroke="white" />
      </ServiceItem>
      <ServiceItem title="MONEY BACK GUARANTEE" description="We reurn money within 30 days">
        <Icons.ShieldCheck size={40} stroke="white" />
      </ServiceItem>
    </section>
  );
}

export default memo(SectionService);
