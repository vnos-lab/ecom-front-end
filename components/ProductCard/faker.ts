import { ProductItemType, SaleType } from "@/types/Product/ProductItemType";

const data: ProductItemType = {
  image: "https://picsum.photos/200/300",
  sale: {
    type: SaleType.BY_PERCENT,
    value: 25,
  },
  name: "HAVIT HV-G92 Gamepad",
  price: "160",
  totalStars: 4.7,
  totalReviews: 88,
  slug: "/HAVIT-HV-G92-Gamepad",
  id: "2213123124124124124",
  liked: false,
};

export default data;
