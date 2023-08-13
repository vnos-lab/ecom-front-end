import React, { memo } from "react";
import Link from "next/link";

import CurrentLanguage from "@/components/layouts/SaleBanner/CurrentLanguage";
import { Select, SelectContent, SelectItem } from "@/components/ui/select";

import { ARRAY_LANGUAGES, MAPPING_LANGUAGES } from "@/constants/languages";
import ROUTES from "@/constants/routes";

function SaleBanner() {
  return (
    <section className="bg-black text-mx-gray-1 font-poppins text-[14px] leading-[21px] py-3">
      <div className="container grid grid-cols-12 gap-2">
        <div className="hidden lg:block col-span-2" />

        <div className="col-span-12 md:col-span-10 lg:col-span-8 md:flex items-center md:justify-start lg:justify-center text-center">
          <span className="mr-2">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </span>

          <Link
            href={ROUTES.PRODUCT_LIST_BY_CATEGORY("clothes")}
            className="leading-[24px] font-semibold underline"
          >
            ShopNow
          </Link>
        </div>

        <div className="col-span-2 text-end hidden md:block">
          <Select>
            <CurrentLanguage />

            <SelectContent align="end">
              {ARRAY_LANGUAGES.map((language) => (
                <SelectItem value={language} key={language}>
                  {MAPPING_LANGUAGES[language]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </section>
  );
}

export default memo(SaleBanner);
