import { create } from 'zustand';
import type { OrderType, CreateOrder } from '../types/order.types';
import { initialNewOrder } from '../constants/newOrder';

type OrdersState = {
    orders: OrderType[];
    newOrder: CreateOrder;
    setOrders: (orders: OrderType[]) => void;
    updateOrder: (updatedOrder: OrderType) => void;
    removeOrder: (orderId: number) => void;
    updateNewOrderField: (newOrder: CreateOrder) => void;
    resetNewOrder: () => void;
    setSuctionSize: (value: string) => void;
    setLiquidSize: (value: string) => void;
    setLength: (value: number) => void;
    setQuantity: (value: number) => void;
    setPricePerMeter: (value: number) => void;
    setComment: (value: string) => void;
};

export const useOrdersStore = create<OrdersState>((set) => ({
    orders: [],
    newOrder: {...initialNewOrder},
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

    updateNewOrderField: (newOrder: CreateOrder) =>
        set(() => ({
            newOrder: newOrder
        })),

    resetNewOrder: () => 
        set({newOrder: {...initialNewOrder}}),

    setSuctionSize: (value: string) =>
        set((state) => ({
            newOrder: {
                ...state.newOrder,
                suction_size: value,
            }
        })),

    setLiquidSize: (value: string) =>
        set((state) => ({
            newOrder: {
                ...state.newOrder,
                liquid_size: value,
            }
        })),
        
    setLength: (value: number) =>
        set((state) => ({
            newOrder: {
                ...state.newOrder,
                length: value,
            }
        })),
    
    setQuantity: (value: number) =>
        set((state) => ({
            newOrder: {
                ...state.newOrder,
                quantity: value,
            }
        })),
    
    setPricePerMeter: (value: number) =>
        set((state) => ({
            newOrder: {
                ...state.newOrder,
                price_per_meter: value,
            }
        })),

    setComment: (value: string) =>
        set((state) => ({
            newOrder: {
                ...state.newOrder,
                comment: value,
            }
        })),
}));
