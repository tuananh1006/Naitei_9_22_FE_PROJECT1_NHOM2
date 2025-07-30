"use client";

import { Button } from "@/components/ui/button";

interface CartActionsProps {
  onCancel?: () => void;
  onContinue?: () => void;
}

const CartActions: React.FC<CartActionsProps> = ({ onCancel, onContinue }) => {
  return (
    <div className="flex gap-4 justify-end pt-8">
      <Button
        variant="outline"
        className="text-green-600 border-green-600 hover:bg-green-100"
        onClick={onCancel}
      >
        HỦY ĐƠN HÀNG
      </Button>
      <Button
        className="bg-green-600 text-white hover:bg-green-700"
        onClick={onContinue}
      >
        TIẾP TỤC MUA
      </Button>
    </div>
  );
};

export default CartActions;
