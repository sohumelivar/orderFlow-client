import { create } from 'zustand';
import type { OrderType } from '../types/order.types';

type OrdersState = {
    orders: OrderType[];
    setOrders: (orders: OrderType[]) => void;
    updateOrder: (updatedOrder: OrderType) => void;
    removeOrder: (orderId: number) => void;
};

export const useOrdersStore = create<OrdersState>((set) => ({
    orders: [],

    setOrders: (orders) => set({orders}),

    updateOrder: (updatedOrder) =>
        set((state) => ({
            orders: state.orders.map((order) =>
                order.id === updatedOrder.id ? updatedOrder : order
            ),
        })),

    removeOrder: (orderId: number) => 
        set((state) => ({
            orders: state.orders.filter(order => order.id !== orderId),
        })),
}));
