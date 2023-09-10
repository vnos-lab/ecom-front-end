"use client";

import React, { memo, useCallback } from "react";
import { Eye, Heart } from "lucide-react";
import Link from "next/link";

interface ProductCardActionsProps {
  id: string;
  slug: string;
}

function ProductCardActions(props: ProductCardActionsProps) {
  const { id, slug } = props;

  const onLikeProduct = useCallback(() => {
    console.log(id);
  }, [id]);

  return (
    <div className="flex flex-col gap-[0.5rem] absolute top-[0.75rem] right-[0.75rem]">
      <button
        type="button"
        className="p-[0.3125rem] bg-white rounded-[50%] flex items-center justify-center"
        onClick={onLikeProduct}
      >
        <Heart size={18} />
      </button>

      <Link href={`/product/${slug}`}>
        <button
          type="button"
          className="p-[0.3125rem] bg-white rounded-[50%] flex items-center justify-center"
        >
          <Eye size={18} />
        </button>
      </Link>
    </div>
  );
}

export default memo(ProductCardActions);
