export type Product = {
  id: string;
  name: string;
  oldPrice: number;
  discount: number;
  description: string;
  image: string;
  newArival: boolean;
  type: string[];
  color: string[];
};

// Helper function to calculate current price from oldPrice
export const getCurrentPrice = (product: Product): number => {
  return product.discount > 0 
    ? Math.round(product.oldPrice * (1 - product.discount / 100))
    : product.oldPrice;
};

// Helper function to format price with dots (200000 -> 200.000)
export const formatPrice = (price: number): string => {
  return Math.round(price).toLocaleString("de-DE");
};

// Helper function to format oldPrice directly
export const formatOldPrice = (product: Product): string => {
  return formatPrice(product.oldPrice);
};

// Helper function to format current price from oldPrice
export const formatCurrentPrice = (product: Product): string => {
  return formatPrice(getCurrentPrice(product));
};

