"use client";

import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";

import { formatCurrency } from "@/lib/utils";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  images: string[];
}

interface CartSummaryProps {
  cart: CartItem[];
}

const TAX_RATE = 0.1;

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

const CartSummary: React.FC<CartSummaryProps> = ({ cart }) => {
  const totalBeforeTax = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cart]);

  const tax = useMemo(() => totalBeforeTax * TAX_RATE, [totalBeforeTax]);
  const totalAfterTax = useMemo(
    () => totalBeforeTax + tax,
    [totalBeforeTax, tax]
  );

  const handleCheckout = () => {
    alert("Chức năng thanh toán chưa được triển khai.");
  };

  return (
    <div className="mt-6 flex justify-end w-full overflow-visible">
      {/* Khối con cố định độ rộng bảng: */}
      <div className="w-[350px] md:w-[420px]">
        <Table className="w-full border border-gray-300">
          <TableBody>
            <TableRow>
              <TableCell className="border-e border-b border-gray-300 text-green-600 font-bold text-left uppercase">
                Tổng tiền (Chưa thuế)
              </TableCell>
              <TableCell className="border-b border-gray-300 text-green-600 font-bold text-right uppercase">
                {formatCurrency(totalBeforeTax)}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="border-e border-b border-gray-300 text-green-600 font-bold text-left uppercase">
                Thuế (VAT 10 %)
              </TableCell>
              <TableCell className="border-b border-gray-300 text-green-600 font-bold text-right uppercase">
                {formatCurrency(tax)}
              </TableCell>
            </TableRow>

            <TableRow className="bg-green-600 text-white hover:bg-green-600">
              <TableCell className="border-e border-b font-bold text-left uppercase text-lg md:text-xl">
                Tổng thanh toán
              </TableCell>
              <TableCell className="border-b font-bold text-right uppercase text-lg md:text-xl">
                {formatCurrency(totalAfterTax)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        {/* Nút thanh toán */}
        <div className="flex justify-end mt-4">
          <Button
            onClick={handleCheckout}
            className="w-45 h-12 rounded-3xl bg-green-600 hover:bg-green-700"
          >
            THANH TOÁN
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
