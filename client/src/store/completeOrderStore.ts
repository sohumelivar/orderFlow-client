import { create } from "zustand";
import type { CompleteOrder, OrderType } from "../types/order.types"
import { completeOrderInfoInitial } from "../constants/completeOrder";

type CompleteOrderState = {
    completeOrderInfo: CompleteOrder;
    modalIsOpen: boolean;
    setCompleteOrderInfo: (order: OrderType) => void;
    setCompleteOrderQuantity: (completedQuantity: number) => void;
    toggleModal: () => void;
    setModalHidden: () => void;
};

export const useCompleteOrderStore = create<CompleteOrderState>((set) => ({
    completeOrderInfo: completeOrderInfoInitial,
    modalIsOpen:  false,
    
    setCompleteOrderInfo: (order) =>
        set({
            completeOrderInfo: {
                orderId: order.id,
                tube_size: `${order.suction_size} - ${order.liquid_size}`,
                quantity: order.quantity,
                completed_quantity: order.quantity,
                length: order.length,
            },
        }),

    setCompleteOrderQuantity: (completedQuantity) =>
        set((state) => ({
            completeOrderInfo: {
            ...state.completeOrderInfo,
            completed_quantity: completedQuantity,
            },
        })),

    toggleModal: () =>
        set((state) => ({
            modalIsOpen: !state.modalIsOpen,
        })),

    setModalHidden: () =>
        set(() => ({
            modalIsOpen: false
        })),
}));
