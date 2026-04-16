import SquareCheck from '../../../../assets/icons/square-check.svg?react';
import { useCompleteOrderStore } from '../../../../store/completeOrderStore';
import { useOrdersStore } from '../../../../store/ordersStore';
import './CompleteButton.css';

type Props = {
    orderId: number;
};

export const CompleteButton = ({orderId}: Props) => {
    const orders = useOrdersStore((state) => state.orders);
    const setCompleteOrderInfo = useCompleteOrderStore((state) => state.setCompleteOrderInfo);
    const toggleModal = useCompleteOrderStore((state) => state.toggleModal);
    
    const getOrderInfo = () => {
        const completeOrder = orders.find((el) => el.id === orderId);
        if (!completeOrder) return;
        setCompleteOrderInfo(completeOrder);
        toggleModal();
    };

    return (
        <button className="button_complete"  onClick={getOrderInfo}>
            <SquareCheck className='complete_button_icon' />
            <span>COMPLETE</span>
        </button>
    );
};
