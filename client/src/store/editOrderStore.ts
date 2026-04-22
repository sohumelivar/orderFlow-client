import { create } from "zustand";
import type { EditOrder } from "../types/order.types";

type EditOrderState = {
    editOrder: EditOrder | null;
    setEditOrder: (order: EditOrder) => void;
    resetEditOrder: () => void;
    updateEditOrder: (data: Partial<EditOrder>) => void;
};

export const useEditOrderStore = create<EditOrderState>((set) =>({
    editOrder: null,

    setEditOrder: (order) =>
        set({
            editOrder: order,
        }),

    resetEditOrder: () =>
        set({
            editOrder: null,
        }),

    updateEditOrder: (data) =>
        set((state) => ({
            editOrder: state.editOrder
            ? {
                ...state.editOrder,
                ...data,
                }
            : null,
        })),
    
}));
