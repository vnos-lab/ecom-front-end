import React, { memo, useMemo } from "react";
import classnames from "classnames";
import Image from "next/image";

import ProductCardActions from "@/components/ProductCard/ProductCardActions";
import RatingStars from "@/components/RatingStars";

import { SaleType } from "@/types/Product/ProductItemType";
import formatPrice from "@/utils/formatPrice";

import faker from "./faker";

enum TitleTagNameEnum {
  div = "div",
  span = "span",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
}

interface ProductCardProps {
  classNameProps?: string;
  titleTagName?: TitleTagNameEnum;
}

function ProductCard(props: ProductCardProps) {
  const { classNameProps, titleTagName = TitleTagNameEnum.h2 } = props;

  const Component = titleTagName;

  const saledPrice = useMemo(() => {
    const price = {
      isSaleOff: false,
      currentPrice: faker.price,
    };

    if (faker.sale) {
      price.isSaleOff = true;

      if (faker.sale.type === SaleType.BY_PERCENT) {
        price.currentPrice = (+faker.price * (100 - +faker.sale.value)) / 100;
      } else {
        price.currentPrice = +faker.price - +faker.sale.value;
      }
    }

    return price;
  }, []);

  return (
    <div className={classnames(classNameProps, "font-poppins")}>
      <div className="relative">
        <Image
          src={faker.image}
          alt={faker.name}
          className="aspect-[250/270] max-w-[16.875rem] max-h-[15.625rem] w-full rounded-[0.25rem]"
          width={270}
          height={250}
        />

        <ProductCardActions id={faker.id} slug={faker.slug} />

        {saledPrice.isSaleOff && (
          <span className="absolute top-[0.75rem] left-[0.75rem] rounded-[0.25rem] bg-mx-secondary-2 text-[0.75rem] leading-[1.5em] text-white p-[0.25rem] min-w-[3.4375rem] text-center">
            -
            {faker.sale?.type === SaleType.BY_PERCENT
              ? `${faker.sale.value}%`
              : formatPrice(faker.sale?.value || 0)}
          </span>
        )}

        {/*  Add to cart btn */}
      </div>

      <Component className="text-[1rem] leading-[1.5em] font-medium mt-[1rem]">
        {faker.name}
      </Component>

      <div className="flex gap-[0.75rem] mt-[0.5rem] text-[1rem] leading-[1.5em]">
        <span className="text-mx-secondary-2 font-medium">
          {formatPrice(saledPrice.currentPrice)}
        </span>

        {saledPrice.isSaleOff && (
          <span className="text-mx-black-50p line-through">
            {formatPrice(faker.price)}
          </span>
        )}
      </div>

      <div className="flex items-center gap-[0.5rem]">
        <RatingStars percent={66} />

        <span className="text-mx-black-50p text-[0.875rem] leading-[1.5em]">
          ({faker.totalStars})
        </span>
      </div>
    </div>
  );
}

export default memo(ProductCard);
