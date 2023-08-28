import React, { memo } from "react";
import ServiceItem from "@/components/App/SectionService/ServiceItem";
import * as Icons from "lucide-react";

function SectionService() {
  return (<section className="container flex flex-col items-center gap-y-[40px] lg:gap-x-[88px] lg:justify-between lg:flex-row md:flex-row md:gap-0 md:gap-x-[10px] md:w-full sm:flex-col sm:items-center sm:gap-y-[40px]">
      <ServiceItem title="FREE AND FAST DELIVERY" description="Free delivery for all orders over $140">
        <Icons.Truck className="h-[30px] w-[30px] lg:h-[40px] lg:w-[40px]" stroke="white" />
      </ServiceItem>
      <ServiceItem title="24/7 CUSTOMER SERVICE" description="Friendly 24/7 customer support">
        <Icons.Headphones className="h-[30px] w-[30px] lg:h-[40px] lg:w-[40px]" stroke="white" />
      </ServiceItem>
      <ServiceItem title="MONEY BACK GUARANTEE" description="We reurn money within 30 days">
        <Icons.ShieldCheck className="h-[30px] w-[30px] lg:h-[40px] lg:w-[40px]" stroke="white" />
      </ServiceItem>
    </section>
  );
}

export default memo(SectionService);
