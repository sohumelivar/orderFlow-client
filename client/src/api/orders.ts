import { api } from './axios';
import type { ActiveOrdersResponse } from '../types/order.types';

export const getActiveOrders = async (): Promise<ActiveOrdersResponse> => {
    const response = await api.get('/orders/active');
    return response.data;
};