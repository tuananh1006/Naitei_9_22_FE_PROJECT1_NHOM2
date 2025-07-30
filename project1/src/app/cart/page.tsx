"use client";

import React, { useEffect } from "react";
import CartTable from "@/components/CartTable";
import CartActions from "@/components/CartActions";
import CartSummary from "@/components/CartSummary";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setCartSuccess } from "@/redux/cart/cartSlice";

export default function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.items);

  // Chỉ mock dữ liệu nếu chưa có gì
  useEffect(() => {
    if (cart.length === 0) {
      const mockCart = [
        {
          id: 1,
          name: "Cây Lưỡi Hổ",
          price: 150000,
          quantity: 1,
          images: ["/dataset/spx2-1.png"],
        },
        {
          id: 2,
          name: "Cây Trầu Bà",
          price: 120000,
          quantity: 2,
          images: ["/dataset/spx2-5.png"],
        },
        {
          id: 3,
          name: "Cây Cau Tiểu Trâm",
          price: 100000,
          quantity: 1,
          images: ["/dataset/spx2-15.png"],
        },
      ];
      dispatch(setCartSuccess({ products: mockCart }));
    }
  }, [cart.length, dispatch]);

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="w-full md:w-[1200px]">
        <h1 className="text-green-600 font-semibold mb-6">GIỎ HÀNG</h1>

        {cart.length === 0 ? (
          <p className="text-gray-500">Giỏ hàng trống.</p>
        ) : (
          <>
            <CartTable />
            <CartActions />
            <CartSummary cart={cart} />
          </>
        )}
      </div>
    </div>
  );
}
