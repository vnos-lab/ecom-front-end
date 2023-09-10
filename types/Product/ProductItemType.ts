export enum SaleType {
  BY_PRICE = "BY_PRICE",
  BY_PERCENT = "BY_PERCENT",
}

export interface SalePriceType {
  type: SaleType;
  value: string | number;
}

export interface ProductItemType {
  image: string;
  sale?: SalePriceType;
  name: string;
  price: string | number;
  totalStars: number | string;
  totalReviews: number | string;
  slug: string;
  id: string;
  liked: boolean;
}
