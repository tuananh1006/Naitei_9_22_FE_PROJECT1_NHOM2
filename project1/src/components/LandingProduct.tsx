'use client'

import { useEffect, useState, useMemo } from "react";
import ProductCard from "./ProductCard";
import { getProducts } from "../services/ProductService";
import { Product } from "../types/Product";

const DESKTOP_LAYOUT_CONFIG = [
  { index: 0, className: "col-span-2 row-span-2 [&_img]:!aspect-[4/3]" },
  { index: 1, className: "col-start-3 row-start-1 [&_img]:!aspect-[3/2]" },
  { index: 2, className: "col-start-4 row-start-1 [&_img]:!aspect-[3/2]" },
  { index: 3, className: "col-start-1 row-start-3 [&_img]:!aspect-[3/2]" },
  { index: 4, className: "col-start-2 row-start-3 [&_img]:!aspect-[3/2]" },
  { index: 5, className: "col-span-2 row-span-2 col-start-3 row-start-2 [&_img]:!aspect-[4/3]" }
];

// Function to shuffle array and get random items
const getRandomProducts = (products: Product[], count: number = 6): Product[] => {
  const shuffled = [...products].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  
  const displayProducts = useMemo(() => {
    return getRandomProducts(products, 6);
  }, [products]);

  useEffect(() => {
    getProducts().then((allProducts) => {
      setProducts(allProducts);
    }).catch(console.error);
  }, []);

  if (products.length === 0) return <div>Loading...</div>;

  const renderProducts = (config?: typeof DESKTOP_LAYOUT_CONFIG) => {
    if (config) {
      return config.map(({ index, className }) => 
        displayProducts[index] && (
          <ProductCard 
            key={`${displayProducts[index].id}-${index}`} 
            product={displayProducts[index]} 
            className={className} 
          />
        )
      );
    }
    
    return displayProducts.map((product, index) => (
      <ProductCard key={`${product.id}-${index}`} product={product} />
    ));
  };

  return (
    <div className="p-4 sm:p-6 max-w-[1200px] mx-auto -mt-7 -mb-7">
      {/* Mobile Layout */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:hidden">
        {renderProducts()}
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid grid-cols-4 grid-rows-4 gap-4">
        {renderProducts(DESKTOP_LAYOUT_CONFIG)}
      </div>
    </div>
  );
}



