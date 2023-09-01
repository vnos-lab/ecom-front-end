import React, { memo } from "react";

import serviceContents from "@/components/App/SectionService/constants";
import ServiceItem from "@/components/App/SectionService/ServiceItem";

function SectionService() {
  return (
    <section className="container flex flex-col items-start gap-y-[24px] lg:gap-x-[88px] lg:justify-center lg:flex-row md:flex-row md:justify-center md:gap-0 md:gap-x-[10px] md:w-full sm:flex-col sm:items-center sm:gap-y-[40px]">
      {serviceContents.map((content) => (
        <ServiceItem key={content.title} {...content}>
          <content.icon
            className="h-[30px] w-[30px] lg:h-[40px] lg:w-[40px]"
            stroke="white"
          />
        </ServiceItem>
      ))}
    </section>
  );
}

export default memo(SectionService);
