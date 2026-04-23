import { CompletedOrderCard } from '../../components/CompletedOrderCard/CompletedOrderCard';
import { useCompletedOrders } from '../../hooks/useCompletedOrders';
import { CompletedOrderStore } from '../../store/completedOrderStore';
import './CompletedOrders.css';

export const CompletedOrders = () => {
    const completedOrders = CompletedOrderStore((state) => state.completedOrders);
    useCompletedOrders();
    
    return (
        <div className='orderList'>
            <div className='headerWrapper'>
                <div className='active-page-header'>
                    COMPLETED ORDERS
                </div>
                <div className='ordersCount'>
                    {completedOrders.length === 1 ? `${completedOrders.length} ORDER` : `${completedOrders.length} ORDERS`}
                </div>
            </div>
            {completedOrders.map((order) => (
                <CompletedOrderCard 
                    key={order.id}
                    completedOrder={order}
                />
            ))}
        </div>
    );
};
