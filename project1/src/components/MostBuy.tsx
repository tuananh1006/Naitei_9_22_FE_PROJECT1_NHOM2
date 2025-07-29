"use client";

import Image from "next/image";
import ProductCard from "./ProductCard";
import { Product, formatCurrentPrice, formatOldPrice } from "../types/Product";
import { useEffect, useState, useMemo } from "react";
import { getProducts } from "@/services/ProductService";

// Function to get random products
const getRandomProducts = (products: Product[], count: number = 7): Product[] => {
  const shuffled = [...products].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export default function MostBuy() {
  const [products, setProducts] = useState<Product[]>([]);
  
  const displayProducts = useMemo(() => {
    return getRandomProducts(products, 7);
  }, [products]);

  useEffect(() => {
    getProducts()
      .then((allProducts) => {
        setProducts(allProducts);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold text-green-600 mb-4 pb-2 border-b-2 border-green-600">
        Sản phẩm mua nhiều
      </h2>
      <div className="space-y-3">
        {displayProducts.map((product, index) => {
          const hasDiscount = product.discount > 0;

          return (
            <div
              key={`${product.id}-${index}`}
              className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={60}
                height={60}
                className="rounded object-cover bg-gray-100"
              />
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-800 mb-1">
                  {product.name}
                </div>
                <div className="text-red-600 text-sm font-semibold">
                  {formatCurrentPrice(product)} đ
                  {hasDiscount && (
                    <span className="line-through text-gray-400 text-xs ml-2">
                      {formatOldPrice(product)} đ
                    </span>
                  )}
                </div>
              </div>
              {/* Hidden ProductCard for functionality only */}
              <div className="hidden">
                <ProductCard product={product} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}



