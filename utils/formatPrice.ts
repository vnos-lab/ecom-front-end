/**
 * @description This function will format the number to a string of price
 * @param {number | string} price - The price to format
 * @param { NumberFormatOptions} options - The options to format the price, with the default currency is USD
 * @return {string} - The formatted price
 */

const defaultOptions = {
  currency: "USD",
  minimumFractionDigits: 0,
};

function formatPrice(price: number | string, options = defaultOptions): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    ...options,
  }).format(+price);
}

export default formatPrice;
