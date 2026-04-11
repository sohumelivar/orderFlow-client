import { api } from './axios';
import type { ActiveOrdersResponse, CreateOrder, OrderType } from '../types/order.types';

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

export const deleteOrder = async (orderId: number) => {
    const response = await api.delete(`/orders/delete/${orderId}`);
    return response.data;
};

type CreateOrderResponse = {
    order: OrderType;
};

export const createOrder = async (newOrder: CreateOrder): Promise<CreateOrderResponse> => {
    const response = await api.post(`/orders/create`, newOrder);
    return response.data;
};
