import type { PaymentType } from "../types/payments.types";
import { api } from "./axios";

export const sendPayment = async (amount: number): Promise<PaymentType> => {
    const response = await api.post('/payments/pay_order', { amount: amount });
    return response.data;
};

export const rejectPayment = async (id: number): Promise<PaymentType> => {
    const response = await api.patch(`/payments/reject/${id}`);
    return response.data;
};

export const completePayment = async (id: number): Promise<PaymentType> => {
    const response = await api.patch(`/payments/complete/${id}`);
    return response.data;
};
