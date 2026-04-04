import { api } from './axios';
import type { ActiveOrdersResponse, OrderType } from '../types/order.types';

export const getActiveOrders = async (): Promise<ActiveOrdersResponse> => {
    const response = await api.get('/orders/active');
    return response.data;
};

type UpdateOrderStatusResponse = {
    order: OrderType;
};

export const updateOrderStatus = async (orderId: number): Promise<UpdateOrderStatusResponse> => {
    const response = await api.patch(`/orders/update-status/${orderId}`);
    return response.data;
};
