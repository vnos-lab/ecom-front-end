import React, { memo, PropsWithChildren } from "react";

interface ServiceItemProps extends PropsWithChildren {
  title: string;
  description: string;
}

function ServiceItem(props: ServiceItemProps) {
  const { children, title, description } = props;
  return (
    <div className="flex flex-col items-center w-max gap-y-[24px]">
      <div className="relative h-[3.75rem] w-[3.75rem] lg:h-[5rem] lg:w-[5rem]">
        <div className="absolute w-full h-full bg-[#2F2E30] opacity-30 rounded-full " />
        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[2.8125rem] h-[2.8125rem] lg:w-[3.625rem] lg:h-[3.625rem] flex items-center justify-center bg-black rounded-full ">
          {children}
        </div>
      </div>
      <div className="flex flex-col items-center flex-wrap max-w-[262px] justify-center lg:gap-x-1 w-max  font-poppins text-black">
        <div className="text-[0.9375rem] leading-5 md:text-[1.125rem] lg:leading-[1.75rem]  font-semibold">
          {title}
        </div>
        <div className="flex flex-wrap max-w-[16.375rem] text-[0.75rem] lg:text-[0.875rem] leading-[1.3125rem]">
          {description}
        </div>
      </div>
    </div>
  );
}

export default memo(ServiceItem);
