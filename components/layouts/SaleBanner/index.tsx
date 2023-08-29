import React, { memo } from "react";
import Link from "next/link";

import LanguageSwitcher from "@/components/layouts/SaleBanner/LanguageSwitcher";

import ROUTES from "@/constants/routes";

function SaleBanner() {
  return (
    <section className="bg-black text-mx-gray-1 font-poppins text-[0.875rem] leading-[1.5em] py-3">
      <div className="container grid grid-cols-12 gap-2">
        <div className="hidden lg:block col-span-2" />

        <div className="col-span-12 md:col-span-10 lg:col-span-8 md:flex items-center md:justify-start lg:justify-center text-center">
          <span className="mr-2">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </span>

          <Link
            href={ROUTES.PRODUCT_LIST_BY_CATEGORY("clothes")}
            className="leading-[calc(24/14)] font-semibold underline"
          >
            ShopNow
          </Link>
        </div>

        <div className="col-span-2 text-end hidden md:block">
          <LanguageSwitcher />
        </div>
      </div>
    </section>
  );
}

export default memo(SaleBanner);
