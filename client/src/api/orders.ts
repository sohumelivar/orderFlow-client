import { api } from './axios';
import type { ActiveOrdersResponse } from '../types/order.types';

export const getActiveOrders = async (): Promise<ActiveOrdersResponse> => {
    const response = await api.get('http://95.217.2.56:3001/api/orders/active');
    return response.data;
};