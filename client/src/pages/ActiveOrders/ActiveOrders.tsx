import { useEffect } from 'react';
import { OrderCard } from '../../components/OrderCard/OrderCard';
import { getActiveOrders } from '../../api/orders';
import './ActiveOrders.css';
import { useOrdersStore } from '../../store/ordersStore';

export const ActiveOrdersPage = () => {
    const orders = useOrdersStore((state) => state.orders);
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

    return (
        <div className='orderList'>
            {orders.map((order) => (
                <OrderCard key={order.id} order={order} />
            ))}
        </div>
    );
};
