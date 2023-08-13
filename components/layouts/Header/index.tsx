import React, { memo } from "react";
import { Heart, Menu, ShoppingCart } from "lucide-react";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import routes from "@/constants/routes";

import ActiveUnderlineLink from "./ActiveUnderlineLink";
import constant from "./constant";
import SearchForm from "./SearchForm";

function Header() {
  return (
    <header className="border-b-mx-black-30p border-b-[1px] sticky top-0 bg-white text-black">
      <div className="min-h-[94px] container pt-[40px] pb-[16px] flex items-center">
        <div className="font-inter font-bold text-[24px] leading-[1em] mr-auto">
          Exclusive
        </div>

        <div className="hidden lg:flex gap-[48px] pl-[42px]">
          {constant.navLinks.map((link) => (
            <ActiveUnderlineLink
              key={link.href}
              link={link.href}
              path={link.href}
              className="font-poppins"
            >
              {link.label}
            </ActiveUnderlineLink>
          ))}
        </div>

        <div className="hidden ml-auto sm:flex items-center">
          <SearchForm />

          <Link href={routes.FAVORITE_PRODUCTS} className="ml-[24px] mr-[16px]">
            <Heart size={32} />
          </Link>

          <Link href={routes.CART}>
            <ShoppingCart size={32} />
          </Link>
        </div>

        <div className="lg:hidden ml-[24px] flex items-center">
          <Sheet>
            <SheetTrigger>
              <Menu size={32} />
            </SheetTrigger>

            <SheetContent className="!max-w-[300px] sm:!max-w-[400px] lg:hidden">
              <SheetHeader>
                <SheetTitle>Exclusive</SheetTitle>

                <SheetDescription>
                  <div className="sm:hidden mt-[16px] mb-[32px] text-black">
                    <div className="flex gap-[24px] justify-center my-[16px]">
                      <Link href={routes.FAVORITE_PRODUCTS}>
                        <Heart size={24} />
                      </Link>

                      <Link href={routes.CART}>
                        <ShoppingCart size={24} />
                      </Link>
                    </div>
                    <SearchForm />
                  </div>

                  <div className="flex flex-col gap-[24px] mt-[16px] text-black">
                    {constant.navLinks.map((link) => (
                      <ActiveUnderlineLink
                        key={`${link.href}mobile`}
                        link={link.href}
                        path={link.href}
                        className="font-poppins"
                      >
                        {link.label}
                      </ActiveUnderlineLink>
                    ))}
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default memo(Header);
