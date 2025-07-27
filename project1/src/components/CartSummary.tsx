'use client';

interface CartSummaryProps {
  totalBeforeTax: number;
  tax: number;
  totalAfterTax: number;
  onCheckout: () => void;
}

const CartSummary: React.FC<CartSummaryProps> = ({ totalBeforeTax, tax, totalAfterTax, onCheckout }) => {
  return (
    <div className="mt-6 flex flex-col items-end overflow-x-auto">
      <table className="w-full md:w-1/2 border-collapse border border-gray-300 mt-6">
        <tbody>
          <tr>
            <td className="p-4 md:p-6 border-e border-b border-gray-300 text-green-600 font-bold text-left uppercase">
              Tổng tiền (Chưa thuế)
            </td>
            <td className="p-4 md:p-6 border-b border-gray-300 text-green-600 font-bold text-right uppercase">
              {totalBeforeTax.toLocaleString('vi-VN')} đ
            </td>
          </tr>
          <tr>
            <td className="p-4 md:p-6 border-e border-b border-gray-300 text-green-600 font-bold text-left uppercase">
              Thuế (VAT 10%)
            </td>
            <td className="p-4 md:p-6 border-b border-gray-300 text-green-600 font-bold text-right uppercase">
              {tax.toLocaleString('vi-VN')} đ
            </td>
          </tr>
          <tr className="bg-green-600">
            <td className="p-4 md:p-6 border-e border-b border-gray-300 text-white text-lg md:text-xl font-bold text-left uppercase">
              Tổng thanh toán
            </td>
            <td className="p-4 md:p-6 border-b border-gray-300 text-white text-lg md:text-xl font-bold text-right uppercase">
              {totalAfterTax.toLocaleString('vi-VN')} đ
            </td>
          </tr>
        </tbody>
      </table>

      <div className="flex gap-4 mt-4">
        <button
          className="bg-green-600 text-white font-bold rounded-3xl hover:bg-green-700 w-45 h-12"
          onClick={onCheckout}
        >
          THANH TOÁN
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
