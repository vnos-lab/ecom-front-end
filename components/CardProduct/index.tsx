/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-console */
/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable prettier/prettier */

"use client";

import React, { memo } from "react";
import * as Icons from "lucide-react";
import Link from "next/link";

import ViewStartFn from "@/components/CardProduct/viewStartFn";

import emptyFn from "@/constants/emptyFn";

import Styles from "./CardProduct.module.css";

interface CardProductProps {
  datas?: {
    id: number;
    giamgia?: string;
    name: string;
    giamoi?: string;
    giacu?: string;
    saorview: string;
    totalReview: string;
    likeProduct?: boolean;
    imgProduct: string;
  };
  onClick?: () => void;
  // className?: string;
  // handleOnclick?: () => void;
}

/**
 * @description This component is used to demo how to create a component
 * @param props onClick: function to handle click event
 * @param props className: class name of component
 * @returns Component
 */

function CardProduct(props: CardProductProps) {
  const { datas } = props;
  if (!datas) {
    return <p>Loading....</p>;
  }
  const handleOnclick = () => {
    console.log(datas.giamoi);
  };

  const handleGetLike = () => {
    console.log(datas.id);
  };

  const handleGetViewDetails = () => {
    console.log(datas.id);
  };

  return (
    <div>
      <div className={Styles.container}>
        <div>
          <div className={Styles.CardProduct_SaleLike}>
            <p className={Styles.CardProduct_discount}>{datas.giamgia}%</p>
            <div className={Styles.CardProduct_BoxLikeView}>
              <div
                onClick={handleGetLike}
                className={Styles.CardProduct_LikeItems}
              >
                <Icons.Heart
                  color="black"
                  size={24}
                  className={Styles.Icons_Heart}
                />
              </div>
              <div
                onClick={handleGetViewDetails}
                className={Styles.CardProduct_LikeItems}
              >
                <Icons.Eye
                  color="black"
                  size={24}
                  className={Styles.Icons_Heart}
                />
              </div>
            </div>
          </div>
          <div className={Styles.CardProduct_IconPlay}>
            <img
              src={datas.imgProduct}
              alt="icon_play"
              className={Styles.CardProduct_avatar}
              width="auto"
              height="auto"
            />
          </div>
        </div>
        <div className={Styles.overlay} onClick={handleOnclick}>
          Add To Cart
        </div>
      </div>
      <div className={Styles.CardProduct_Box_Details}>
        <Link href="#">
          <p className={Styles.CardProduct_Details_name}>{datas.name}</p>
        </Link>
        <div className={Styles.CardProduct_Details_prime}>
          <p className={Styles.CardProduct_Details_prime_new}>
            ${datas.giamoi}
          </p>
          <p className={Styles.CardProduct_Details_prime_old}>${datas.giacu}</p>
        </div>
        <div className={Styles.CardProduct_Details_reivew}>
          <div className={Styles.CardProduct_Details_review_start}>
            <ViewStartFn data={datas.saorview} />
          </div>
          <p className={Styles.CardProduct_Details_review_total}>
            ({datas.totalReview})
          </p>
        </div>
      </div>
    </div>
  );
}

CardProduct.defaultProps = {
  className: "",
  onClick: emptyFn,
};

export default memo(CardProduct);
