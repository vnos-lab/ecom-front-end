const ROUTES = {
  HOME: "/",
  CONTACT: "/contact",
  ABOUT: "/about",
  CART: "/cart",
  WISH_LIST: "/wish-list",

  FAVORITE_PRODUCTS: "/favorite-products",
  CART: "/cart",
  SEARCH: (keyword = "") => `/search?keyword=${keyword}`,

  PRODUCT_DETAIL: (slug: string) => `/product/${slug}`,
  PRODUCT_LIST: "/products",
  PRODUCT_LIST_BY_CATEGORY: (slug: string) => `/products/${slug}`,

  // EX: Authentication
  LOGIN: "/sign-in",
  REGISTER: "/sign-up",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",
  PROFILE: "/profile",

  // EX : Help
  POLICY: "/policy",
  TERMS: "/terms",
  FAQ: "/faq",
};

export default ROUTES;
