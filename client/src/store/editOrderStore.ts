import { create } from "zustand";
import type { EditOrder } from "../types/order.types";

type EditOrderState = {
    editOrder: EditOrder | null;
    setEditOrder: (value: string) => void;
    editSuctionSize: (value: string) => void;
    editLiquidSize: (value: string) => void;
    editLength: (value: number) => void;
    editQuantity: (value: number) => void;
    editComment: (value: string) => void;
    resetEditOrder: () => void;
};

export const useEditOrderStore = create<EditOrderState>((set) =>({
    editOrder: null,

    setEditOrder: (value: string) =>
        set((state) => ({
            editOrder: state.editOrder
                ? {
                    ...state.editOrder,
                    suction_size: value
                }
                : null,
        })),

    editSuctionSize: (value: string) =>
        set((state) => ({
            editOrder: state.editOrder
                ? {
                    ...state.editOrder,
                suction_size: value,
                }
                : null,
        })),
        
    editLiquidSize: (value: string) =>
        set((state) => ({
            editOrder: state.editOrder
            ? {
                ...state.editOrder,
                liquid_size: value,
            }
            : null,
        })),

    editLength: (value: number) =>
        set((state) => ({
            editOrder: state.editOrder
            ? {
                ...state.editOrder,
                length: value,
            }
            : null,
        })),

    editQuantity: (value: number) =>
        set((state) => ({
            editOrder: state.editOrder
            ? {
                ...state.editOrder,
                quantity: value,
            }
            : null,
        })),

    editComment: (value: string) =>
        set((state) => ({
            editOrder: state.editOrder
            ? {
                ...state.editOrder,
                comment: value,
            }
            : null,
        })),

    resetEditOrder: () =>
        set({editOrder: null}),
}));
