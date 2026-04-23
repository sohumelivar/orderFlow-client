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
import type { OrderType } from '../../types/order.types';
import { useOrderCommentStore } from '../../store/viewCommentStore';
import { CommentModal } from '../../components/Modal/CommentModal/CommentModal';

export const ActiveOrdersPage = () => {
    useActiveOrders();
    const orders = useOrdersStore((state) => state.orders);
    const removeOrder = useOrdersStore(state => state.removeOrder);
    const [modalContent, setModalContent] = useState<React.ReactNode | null>(null);
    const modalIsOpen = useCompleteOrderStore((state) => state.modalIsOpen);
    const commentModalIsOpen = useOrderCommentStore((state) => state.commentModalIsOpen);
    const setDeleteStatus = useOrdersStore((state) => state.setDeleteStatus);
    const setWaitingStatus = useOrdersStore((state) => state.setWaitingStatus);
    
    const closeModal = (order: OrderType) => {
        setWaitingStatus(order);
        setModalContent(null);
    };


    const handleDeleteOrder = async (oderdId: number) => {
        try {
            setModalContent(null);
            await deleteOrder(oderdId);
        } catch (error) {
            console.log('error', error);
        } finally {
            setTimeout(() => {
                removeOrder(oderdId);
            }, 1000);
        };
    };

    const deleteOrderModal = (orderId: number, order: OrderType) => {
        setDeleteStatus(order);
        setModalContent(<DeleteModal orderId={orderId} order={order} onConfirm={()=>handleDeleteOrder(orderId)} onCancel={() => closeModal(order)} />);
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
            <div>
                <Modal isOpen={!!modalContent}>
                    {modalContent}
                </Modal >
                <Modal isOpen={modalIsOpen}>
                    {<CompleteOrderModal />}
                </Modal>
                <Modal isOpen={commentModalIsOpen}>
                    {<CommentModal />}
                </Modal>
            </div>

        </>
        
    );
};
