import { useEffect, useState } from 'react';
import { OrderCard } from '../../components/OrderCard/OrderCard';
import { getActiveOrders } from '../../api/orders';
import type { OrderType } from '../../types/order.types';
import './ActiveOrders.css';

export const ActiveOrdersPage = () => {
  const [orders, setOrders] = useState<OrderType[]>([]);

    useEffect(() => {
        getActiveOrders()
            .then((data) => {
                setOrders(data.orders);
            })
            .catch((error) => {
                console.error('Failed to load active orders:', error);
        });
    }, []);

    return (
        <div className='orderList'>
            {orders.map((order) => (
                <OrderCard key={order.id} order={order} />
            ))}
        </div>
    );
};
