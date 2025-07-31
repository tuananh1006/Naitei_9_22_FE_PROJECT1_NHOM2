import { CartItem } from "./Cart";

export interface Order {
    cart: CartItem[],
    payMentInfo: {
        name: string;
        phone: string;
        address: string;
    },
    paidAt: string;
    total: number;
}

