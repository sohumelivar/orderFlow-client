import { useState } from 'react';
import { OrderCard } from '../../components/OrderCard/OrderCard';
import './ActiveOrders.css';
import { useOrdersStore } from '../../store/ordersStore';
import { Modal } from '../../components/Modal/Modal';
import { DeleteModal } from '../../components/Modal/DeleteModal/DeleteModal';
import { useActiveOrders } from '../../hooks/useActiveOrders';

export const ActiveOrdersPage = () => {
    useActiveOrders();
    const orders = useOrdersStore((state) => state.orders);
    const [modalContent, setModalContent] = useState<React.ReactNode | null>(null);
    const closeModal = () => setModalContent(null);

    const openTestModal = (orderId: number) => {
        setModalContent(<DeleteModal orderId={orderId}/>);
    };

    return (
        <>
            <div className='orderList'>
                {orders.map((order) => (
                    <OrderCard 
                        key={order.id}
                        order={order}
                        openTestModal={openTestModal}
                    />
                ))}
            </div>

            <Modal isOpen={!!modalContent} onClose={closeModal}>
                {modalContent}
            </Modal>
        </>
        
    );
};
