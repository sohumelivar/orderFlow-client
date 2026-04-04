import { updateOrderStatus } from '../../../../api/orders';
import Play from '../../../../assets/icons/play.svg?react';
import { useOrdersStore } from '../../../../store/ordersStore';
import './WaitingButton.css';

type Props = {
    orderId: number;
};

export const WaitingButton = ({ orderId }: Props) => {
    const updateOrder = useOrdersStore((state) => state.updateOrder);

    const handleClick = async () => {
        try {
            const data = await updateOrderStatus(orderId);
            updateOrder(data.order)
        } catch (error) {
            console.error('Failed to update order status:', error); 
        }
    };

    return (
        <button className="button_waiting" onClick={handleClick}>
            <Play className='icon_play_button'/>
            <span>WAITING</span>
        </button> 
    );
};
