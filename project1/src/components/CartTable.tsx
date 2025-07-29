"use client";

import React from "react";
import { Trash } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setQuantity, removeFromCart } from "@/redux/cart/cartSlice";
import { RootState } from "@/redux/store";

const CartTable: React.FC = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.items);

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity < 1) return;
    dispatch(setQuantity({ id, quantity }));
  };

  const headers = [
    { label: "Hình ảnh", className: "w-20 md:w-32" },
    { label: "Tên sản phẩm" },
    { label: "Đơn giá", className: "hidden md:table-cell" },
    { label: "Số lượng" },
    { label: "Thành tiền", className: "hidden md:table-cell" },
    { label: "Xóa" },
  ];

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-green-600 text-white">
            {headers.map((header, index) => (
              <th
                key={index}
                className={`p-2 border border-gray-300 uppercase ${
                  header.className || ""
                }`}
              >
                {header.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id} className="text-center">
              <td className="border-l border-b border-gray-300 p-2 flex justify-center items-center">
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="w-20 h-24 object-cover md:w-32 md:h-36"
                />
              </td>
              <td className="border border-gray-300 p-2 text-green-600 font-medium uppercase">
                {item.name}
              </td>
              <td className="border border-gray-300 p-2 hidden md:table-cell">
                {item.price.toLocaleString("vi-VN")} đ
              </td>
              <td className="border border-gray-300 p-2">
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value))
                  }
                  className="w-12 border border-gray-300 rounded p-1 text-center"
                  min={1}
                />
              </td>
              <td className="border border-gray-300 p-2 hidden md:table-cell">
                {(item.price * item.quantity).toLocaleString("vi-VN")} đ
              </td>
              <td className="border border-gray-300 p-2">
                <button
                  onClick={() => dispatch(removeFromCart({ id: item.id }))}
                  className="text-gray-700 hover:text-red-500"
                >
                  <Trash size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
