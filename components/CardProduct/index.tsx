"use client";
import React, { memo } from "react";
import { Heart, Eye } from "lucide-react";

import emptyFn from "@/constants/emptyFn";

import Styles from "./CardProduct.module.css";
import Image from "next/image";
import InconPlay from "@/public/images/icon_play.png";
import ViewStartFn from "@/components/CardProduct/viewStartFn";

interface CardProductProps {
  datas?: Array<{
    id: number;
    giamgia?: string;
    name: string;
    giamoi?: string;
    giacu?: string;
    saorview?: string;
    totalReview?: string;
    likeProduct?: boolean;
    imgProduct: string;
  }>;
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
  // const { className, onClick } = props;
  const handleOnclick = () => {
    console.log(props.datas.giamoi);
  };

  const handleGetLike = () => {
    console.log(props.datas.id);
  };

  const handleGetViewDetails = () => {
    console.log(props.datas.id);
  };

  return (
    <div>
      <div className={Styles.container}>
        <div>
          <div className={Styles.CardProduct_SaleLike}>
            <p className={Styles.CardProduct_discount}>
              {props.datas.giamgia}%
            </p>
            <div className={Styles.CardProduct_BoxLikeView}>
              <div
                onClick={handleGetLike}
                className={Styles.CardProduct_LikeItems}
              >
                <Heart color="black" size={24} className={Styles.Icons_Heart} />
              </div>
              <div
                onClick={handleGetViewDetails}
                className={Styles.CardProduct_LikeItems}
              >
                <Eye color="black" size={24} className={Styles.Icons_Heart} />
              </div>
            </div>
          </div>
          <div className={Styles.CardProduct_IconPlay}>
            <img src={props.datas.imgProduct}
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
        <p className={Styles.CardProduct_Details_name}>{props.datas.name}</p>
        <div className={Styles.CardProduct_Details_prime}>
          <p className={Styles.CardProduct_Details_prime_new}>${props.datas.giamoi}</p>
          <p className={Styles.CardProduct_Details_prime_old}>${props.datas.giacu}</p>
        </div>
        <div className={Styles.CardProduct_Details_reivew}>
          <div className={Styles.CardProduct_Details_review_start}>
            <ViewStartFn data={props.datas.saorview}/>
          </div>
          <p className={Styles.CardProduct_Details_review_total}>({props.datas.totalReview})</p>
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
