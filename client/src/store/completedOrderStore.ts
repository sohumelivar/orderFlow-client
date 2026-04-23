import { create } from "zustand";
import type { OrderType } from "../types/order.types"

type CompletedOrderState = {
    completedOrders: OrderType[];
    setCompletedOrders: (orders: OrderType[]) => void;
};

export const CompletedOrderStore = create<CompletedOrderState>((set) => ({
    completedOrders: [],

    setCompletedOrders: (orders) => set({completedOrders: orders}),
}))