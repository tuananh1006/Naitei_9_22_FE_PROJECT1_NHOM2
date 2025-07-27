'use client';

import React from 'react';
import { Trash } from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  images: string[];
}

interface CartTableProps {
  cart: CartItem[];
  updateQuantity: (id: number, quantity: number) => void;
  removeItem: (id: number) => void;
}

const CartTable: React.FC<CartTableProps> = ({ cart, updateQuantity, removeItem }) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-green-600 text-white">
            <th className="p-2 border border-gray-300 w-20 md:w-32 uppercase">Hình ảnh</th>
            <th className="p-2 border border-gray-300 uppercase">Tên sản phẩm</th>
            <th className="p-2 border border-gray-300 hidden md:table-cell uppercase">Đơn giá</th>
            <th className="p-2 border border-gray-300 uppercase">Số lượng</th>
            <th className="p-2 border border-gray-300 hidden md:table-cell uppercase">Thành tiền</th>
            <th className="p-2 border border-gray-300 uppercase">Xóa</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id} className="text-center">
              <td className="border-l border-b border-gray-300 p-2 flex justify-center items-center">
                <img src={item.images[0]} alt={item.name} className="w-20 h-24 object-cover md:w-32 md:h-36" />
              </td>
              <td className="border border-gray-300 p-2 text-green-600 font-medium uppercase">
                {item.name}
              </td>
              <td className="border border-gray-300 p-2 hidden md:table-cell">
                {item.price.toLocaleString('vi-VN')} đ
              </td>
              <td className="border border-gray-300 p-2">
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  className="w-12 border border-gray-300 rounded p-1 text-center"
                  min={1}
                />
              </td>
              <td className="border border-gray-300 p-2 hidden md:table-cell">
                {(item.price * item.quantity).toLocaleString('vi-VN')} đ
              </td>
              <td className="border border-gray-300 p-2">
                <button onClick={() => removeItem(item.id)} className="text-gray-700 hover:text-red-500">
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