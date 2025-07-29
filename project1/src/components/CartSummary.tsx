"use client";

interface CartSummaryProps {
  totalBeforeTax: number;
  tax: number;
  totalAfterTax: number;
  onCheckout: () => void;
}

const Row = ({
  label,
  value,
  bg = "",
  textColor = "text-green-600",
}: {
  label: string;
  value: string;
  bg?: string;
  textColor?: string;
}) => (
  <tr className={bg}>
    <td
      className={`p-4 md:p-6 border-e border-b border-gray-300 ${textColor} font-bold text-left uppercase`}
    >
      {label}
    </td>
    <td
      className={`p-4 md:p-6 border-b border-gray-300 ${textColor} font-bold text-right uppercase`}
    >
      {value}
    </td>
  </tr>
);

const CartSummary: React.FC<CartSummaryProps> = ({
  totalBeforeTax,
  tax,
  totalAfterTax,
  onCheckout,
}) => {
  return (
    <div className="mt-6 flex flex-col items-end overflow-x-auto">
      <table className="w-full md:w-1/2 border-collapse border border-gray-300 mt-6">
        <tbody>
          <Row
            label="Tổng tiền (Chưa thuế)"
            value={`${totalBeforeTax.toLocaleString("vi-VN")} đ`}
          />
          <Row
            label="Thuế (VAT 10%)"
            value={`${tax.toLocaleString("vi-VN")} đ`}
          />
          <Row
            label="Tổng thanh toán"
            value={`${totalAfterTax.toLocaleString("vi-VN")} đ`}
            bg="bg-green-600"
            textColor="text-white text-lg md:text-xl"
          />
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
