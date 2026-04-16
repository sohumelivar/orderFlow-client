import { updateOrderStatus } from '../../../../api/orders';
import X from '../../../../assets/icons/x.svg?react';
import { useOrdersStore } from '../../../../store/ordersStore';
import './CancelButton.css';

type Props = {
    orderId: number
};

export const CancelButton = ({ orderId }: Props) => {
    const updateOrder = useOrdersStore((state) => state.updateOrder);

    const handleClick = async () => {
            try {
                const data = await updateOrderStatus(orderId);
                updateOrder(data.order);
            } catch (error) {
                console.error('Failed to update order status:', error); 
            }
    };

    return (
        <button className="button_cancel" onClick={handleClick}>
            <X className='x_button_icon'/>
            <span>CANCEL</span>
        </button>
    );
};
