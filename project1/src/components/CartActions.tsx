'use client';

interface CartActionsProps {
  onCancel: () => void;
  onContinue: () => void;
}

const CartActions: React.FC<CartActionsProps> = ({ onCancel, onContinue }) => {
  return (
    <div className="flex gap-4 justify-end pt-8">
      <button
        className="border border-green-600 text-green-500 font-bold rounded-3xl hover:bg-green-100 w-45 h-12"
        onClick={onCancel}
      >
        HỦY ĐƠN HÀNG
      </button>
      <button
        className="bg-green-600 text-white font-bold rounded-3xl hover:bg-green-700 w-45 h-12"
        onClick={onContinue}
      >
        TIẾP TỤC MUA
      </button>
    </div>
  );
};

export default CartActions;