"use client";

import React, { memo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import FooterItem from "@/components/layouts/Footer/common/FooterItem";
import FooterLinkItem from "@/components/layouts/Footer/common/FooterLinkitem";
import FooterTextItem from "@/components/layouts/Footer/common/FooterTextItem";

import ROUTES from "@/constants/routes";
import download_apple from "@/public/images/download-appstore.png";
import download_google from "@/public/images/google_play_store.png";
import ic_cr from "@/public/images/icon/ic_copy_right.svg";
import ic_send from "@/public/images/icon/ic_send.svg";
import qr_code from "@/public/images/qr_code.png";

import { iconSocial, quickLink, supportLabel } from "./constant";

function Footer() {
  const [emailValue, setEmailValue] = useState("");
  function onSubmitEmail(e: { preventDefault: () => void }) {
    e.preventDefault();
    if (
      !emailValue?.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      )
    ) {
      // The input value is not an email address
      // eslint-disable-next-line no-console
      console.log("Please enter a valid email address.");
    } else {
      // The input value is an email address
      // Do something with the email address
      // eslint-disable-next-line no-console
      console.log("Email Send :", emailValue);
    }
    // eslint-disable-next-line no-console
  }
  return (
    <footer className="flex flex-col bg-black font-poppins text-white">
      <div className="container flex gap-x-[87px] mt-20 mb-[60px]">
        <div className="flex flex-col gap-y-4 ">
          <div className="flex flex-col gap-y-6">
            <div className="font-inter text-[24px] font-bold leading-6 tracking-[0.72px]">
              Exclusive
            </div>
            <div className="text-[20px] font-medium leading-5">Subscribe</div>
            <FooterTextItem
              content="Get 10% off your first order"
              title="Get 10% off your first order"
            />
          </div>
          <form className="flex gap-x-8 w-[217px] h-12 py-3 pr-[15px] pl-4 border-[1.5px] border-[#FAFAFA] rounded">
            <input
              className="bg-black text-[16px] font-medium leading-5 opacity-40 text-white outline-none w-[130px]"
              type="email"
              placeholder="Enter your email"
              name="email"
              onChange={(e) => setEmailValue(e.target.value)}
            />
            <Image
              className="block h-6 w-6 object-cover cursor-pointer"
              src={ic_send}
              alt=""
              onClick={onSubmitEmail}
            />
          </form>
        </div>
        <FooterItem title="Support">
          {supportLabel.map((supportItem) => (
            <FooterTextItem
              key={supportItem.title}
              title={supportItem.title}
              content={supportItem.content}
            />
          ))}
          <div className="" />
        </FooterItem>
        <FooterItem title="Account">
          <FooterLinkItem
            title="My Account"
            content="My Account"
            href={ROUTES.PROFILE}
          />
          <div className="flex">
            <FooterLinkItem
              title="Login"
              content="Login "
              href={ROUTES.LOGIN}
            />
            /
            <FooterLinkItem
              title="Register"
              content=" Register"
              href={ROUTES.REGISTER}
            />
          </div>
          <FooterLinkItem title="Cart" content="Cart" href={ROUTES.CART} />
          <FooterLinkItem
            title="Wishlist"
            content="Wishlist"
            href={ROUTES.WISH_LIST}
          />
          <FooterLinkItem
            title="Shop"
            content="Shop"
            href={ROUTES.PRODUCT_LIST}
          />
        </FooterItem>
        <FooterItem title="Quick Link">
          {quickLink.map((content) => (
            <FooterLinkItem
              key={content.label}
              title={content.label}
              content={content.label}
              href={content.href}
            />
          ))}
        </FooterItem>
        <FooterItem title="Download App">
          <div className="text-[12px] font-medium leading-[18px] opacity-70">
            Save $3 with App New User Only
          </div>
          <div className="flex gap-x-2">
            <Image
              className="w-[80px] h-[80px] object-cover"
              src={qr_code}
              alt="Scan qr code"
            />
            <div className="flex flex-col gap-y-1">
              <Link href="/">
                <Image
                  className="w-[104px] h-[30px] my-[5px] mx-[3px] object-contain"
                  src={download_google}
                  alt="Download with CH Play"
                />
              </Link>
              <Link href="/">
                <Image
                  className="w-[104px] h-[34px] m-[3px] object-contain block"
                  src={download_apple}
                  alt="Download with App Store"
                />
              </Link>
            </div>
          </div>
          <div className="flex gap-x-[24px]">
            {iconSocial.map((content) => (
              <Link href={content.href} key={content.label}>
                <Image
                  className="h-[24px] w-[24px] object-cover"
                  src={content.image}
                  alt={content.label}
                />
              </Link>
            ))}
          </div>
        </FooterItem>
      </div>
      <div className="h-[1px] w-full bg-white mb-4 opacity-40" />
      <div className="flex justify-center items-center mb-6 opacity-40">
        <Image src={ic_cr} alt="" className="mr-1.5 h-4 w-4 object-cover" />
        <div className=" text-base leading-6 text-center">
          Copyright Ecom team 2023. All right reserved
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
