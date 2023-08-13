import React, { memo } from "react";
import Link from "next/link";

import constant from "./constant";

function Header() {
  return (
    <header className="min-h-[94px] container pt-[40px] pb-[16px]">
      <div className="flex items-center">
        <div className="font-inter font-bold text-[24px] leading-[1em]">
          Exclusive
        </div>

        <div className="flex gap-[48px] ml-[190px]">
          {constant.navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

export default memo(Header);
