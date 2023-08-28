"use client";

import React, { memo } from "react";
import * as Icons from "lucide-react";

function ScrollToTop() {
  return <div
    className="absolute bottom-[32px] z-10 right-[46px] flex items-center justify-center w-[46px] h-[46px] rounded-full bg-[#F5F5F5] cursor-pointer ease-in-out duration-300"
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
    <Icons.ArrowUp size={24} />
  </div>;
}

export default memo(ScrollToTop);
