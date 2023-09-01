"use client";

import React, { memo } from "react";
import * as Icons from "lucide-react";

import useScrollPosition from "../../../hooks/useScrollPosition";

function ScrollToTop() {
  const visibleButtonScrollTop = useScrollPosition() >= 200;
  const onScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  if (visibleButtonScrollTop) {
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
      <div
        className="fixed bottom-[25%] z-10 right-[46px] flex items-center justify-center w-[46px] h-[46px] rounded-full bg-[#F5F5F5] cursor-pointer ease-in-out duration-300"
        onClick={onScrollTop}
      >
        <Icons.ArrowUp size={24} />
      </div>
    );
  }
}

export default memo(ScrollToTop);
