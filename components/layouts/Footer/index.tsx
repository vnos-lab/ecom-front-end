"use client";

import React, { memo } from "react";
import * as Icons from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import FooterItem from "@/components/layouts/Footer/common/FooterItem";
import FooterLinkItem from "@/components/layouts/Footer/common/FooterLinkitem";
import FooterTextItem from "@/components/layouts/Footer/common/FooterTextItem";
import SendEmailForm from "@/components/layouts/Footer/SendEmailForm";

import ROUTES from "@/constants/routes";
import download_apple from "@/public/images/download-appstore.png";
import download_google from "@/public/images/google_play_store.png";
import qr_code from "@/public/images/qr_code.png";

import { quickLink, supportLabel } from "./constant";

function Footer() {
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
          <SendEmailForm />
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
            <Link href="https://www.facebook.com" title="Facebook">
              <Icons.Facebook size={24} fill="white" stroke="none" />
            </Link>
            <Link href="https://twitter.com" title="Twitter">
              <Icons.Twitter size={24} stroke="white" />
            </Link>
            <Link href="https://www.instagram.com" title="Instagram">
              <Icons.Instagram size={24} stroke="white" />
            </Link>
            <Link href="https://www.linkedin.com" title="Linkedin">
              <Icons.Linkedin size={24} fill="white" stroke="none" />
            </Link>
          </div>
        </FooterItem>
      </div>
      <div className="h-[1px] w-full bg-white mb-4 opacity-40" />
      <div className="flex justify-center items-center mb-6 opacity-40">
        <Icons.Copyright size={16} stroke="white" />
        <div className="ml-[6px] text-base leading-6 text-center">
          Copyright Ecom team 2023. All right reserved
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
