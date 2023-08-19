import React, { memo } from "react";
import Link from "next/link";

import ROUTES from "@/constants/routes";

function SaleBanner() {
  return (
    <section className="bg-black text-[#FAFAFA] font-poppins text-[14px] leading-[21px] py-3">
      <div className="container grid grid-cols-12 gap-2">
        <div className="col-span-2" />

        <div className="col-span-8 flex items-center justify-center">
          <span className="mr-2">
            Summer Sale For All Swim Suits And Free  Express Delivery - OFF 50%!
          </span>

          <Link
            href={ROUTES.PRODUCT_LIST_BY_CATEGORY("clothes")}
            className="leading-[24px] font-semibold underline"
          >
            ShopNow
          </Link>
        </div>

        <div className="col-span-2 text-end">Language</div>
      </div>
    </section>
  );
}

export default memo(SaleBanner);
