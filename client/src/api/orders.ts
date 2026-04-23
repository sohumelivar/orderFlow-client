import { api } from './axios';
import type { ActiveOrdersResponse, CreateOrder, EditOrder, OrderType, CompletedOrdersResponse } from '../types/order.types';

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

type OrderInfoRequest = {
    id: number;
    completed_quantity: number;
};

type CompleteOrderResponse = {
    order: OrderType;
};

export const completeOrder = async (orderInfo: OrderInfoRequest): Promise<CompleteOrderResponse> => {
    const response = await api.patch('/orders/complete', orderInfo);
    return response.data;
};

type EditOrderRequest = EditOrder;

type EditOrderResponse = {
    editedOrder: OrderType;
};

export const updateOrder = async (editOrder: EditOrderRequest): Promise<EditOrderResponse> => {
    const response = await api.patch('/orders/update', editOrder);
    return response.data;
};

export const getCompletedOrders = async (): Promise<CompletedOrdersResponse> => {
    const response = await api.get('/orders/completed');
    return response.data;
};
