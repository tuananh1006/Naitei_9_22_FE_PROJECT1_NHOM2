import { Order } from "../types/Order";
import axiosInstance from "./AxiosCustom";

export async function createOrder(order: Order): Promise<Order> {
  const response = await axiosInstance.post<Order>("/orders", order);
  return response.data;
}

