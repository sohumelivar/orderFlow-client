import { useState } from 'react';
import { OrderCard } from '../../components/OrderCard/OrderCard';
import './ActiveOrders.css';
import { useOrdersStore } from '../../store/ordersStore';
import { Modal } from '../../components/Modal/Modal';
import { DeleteModal } from '../../components/Modal/DeleteModal/DeleteModal';
import { useActiveOrders } from '../../hooks/useActiveOrders';
import { deleteOrder } from '../../api/orders';
import { CompleteOrderModal } from '../../components/Modal/CompleteOrderModal/CompleteOrderModal';
import { useCompleteOrderStore } from '../../store/completeOrderStore';

export const ActiveOrdersPage = () => {
    useActiveOrders();
    const orders = useOrdersStore((state) => state.orders);
    const removeOrder = useOrdersStore(state => state.removeOrder);
    const [modalContent, setModalContent] = useState<React.ReactNode | null>(null);
    const closeModal = () => setModalContent(null);
    const modalIsOpen = useCompleteOrderStore((state) => state.modalIsOpen);

    const handleDeleteOrder = async (oderdId: number) => {
        try {
            await deleteOrder(oderdId);
            removeOrder(oderdId);
        } catch (error) {
            console.log('error', error);
        } finally {
            closeModal();
        };
    };

    const deleteOrderModal = (orderId: number) => {
        setModalContent(<DeleteModal orderId={orderId} onConfirm={()=>handleDeleteOrder(orderId)} onCancel={closeModal} />);
    };

    return (
        <>
            <div className='orderList'>
                <div className='headerWrapper'>
                    <div className='active-page-header'>
                        ACTIVE ORDERS
                    </div>
                    <div className='ordersCount'>
                        {orders.length === 1 ? `${orders.length} ORDER` : `${orders.length} ORDERS`}
                    </div>
                </div>
                {orders.map((order) => (
                    <OrderCard 
                        key={order.id}
                        order={order}
                        deleteOrderModal={deleteOrderModal}
                    />
                ))}
            </div>

            <Modal isOpen={!!modalContent} onClose={closeModal}>
                {modalContent}
            </Modal >
            <Modal isOpen={!!modalIsOpen}>
                {<CompleteOrderModal />}
            </Modal>
        </>
        
    );
};
