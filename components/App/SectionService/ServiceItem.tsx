import React, { memo, ReactNode } from "react";


interface FooterItemProps {
  children: ReactNode;
  title : string,
  description : string,
}

function ServiceItem(props: FooterItemProps) {
  const { children,title, description } = props;
  return <div className="flex flex-col items-center w-max max-w-[262px] gap-y-[24px]">
    <div className="relative h-[80px] w-[80px]">
      <div className="absolute w-full h-full bg-[#2F2E30] opacity-30 rounded-full "></div>
    <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[58px] h-[58px] flex items-center justify-center bg-black rounded-full ">
      {children}
    </div>
    </div>
    <div className="flex flex-col items-center justify-center gap-x-2 w-max  font-poppins text-black">
      <div className=" text-[20px] leading-7 font-semibold">{title}</div>
      <div className="text-[14px] leading-[21px]">{description}</div>
    </div>
  </div>;
}

export default memo(ServiceItem);
