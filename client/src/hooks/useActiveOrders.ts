import { useEffect } from 'react';
import { getActiveOrders } from '../api/orders';
import { useOrdersStore } from '../store/ordersStore';

export const useActiveOrders = () => {
    const setOrders = useOrdersStore((state) => state.setOrders);

    useEffect(() => {
        getActiveOrders()
            .then((data) => {
                setOrders(data.orders);
            })
            .catch((error) => {
                console.error('Failed to load active orders:', error);
            });
    }, [setOrders]);
};
