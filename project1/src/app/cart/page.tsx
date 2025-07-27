'use client';

import React, { useState, useEffect } from 'react';
import CartTable from '@/components/CartTable';
import CartActions from '@/components/CartActions';
import CartSummary from '@/components/CartSummary';

export default function CartPage() {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    // const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const storedCart = [];
    if (storedCart.length === 0) {
        const mockCart = [
        {
            id: 1,
            name: "Cây Lưỡi Hổ",
            price: 150000,
            quantity: 1,
            images: ["https://cayxanhcanhquan.vn/wp-content/uploads/2022/05/cay-luoi-ho-3.jpg"]
        },
        {
            id: 2,
            name: "Cây Trầu Bà",
            price: 120000,
            quantity: 2,
            images: ["https://vuonnhasau.com/wp-content/uploads/2021/03/cay-trau-ba-cot-1.jpg"]
        },
        {
            id: 3,
            name: "Cây Cau Tiểu Trâm",
            price: 100000,
            quantity: 1,
            images: ["https://kingpot.vn/wp-content/uploads/2021/04/chau-cay-hoa-de-ban.jpg"]
        }
        ];
        setCart(mockCart);
        localStorage.setItem("cart", JSON.stringify(mockCart));
    } else {
        setCart(storedCart);
    }
    }, []);

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalBeforeTax = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = totalBeforeTax * 0.1;
  const totalAfterTax = totalBeforeTax + tax;

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="w-full md:w-[1200px]">
        <h1 className="text-green-600 font-semibold mb-6">GIỎ HÀNG</h1>

        {cart.length === 0 ? (
          <p className="text-gray-500">Giỏ hàng trống.</p>
        ) : (
          <>
            <CartTable cart={cart} updateQuantity={updateQuantity} removeItem={removeItem} />
            <CartActions />
            <CartSummary totalBeforeTax={totalBeforeTax} tax={tax} totalAfterTax={totalAfterTax} />
          </>
        )}
      </div>
    </div>
  );
}