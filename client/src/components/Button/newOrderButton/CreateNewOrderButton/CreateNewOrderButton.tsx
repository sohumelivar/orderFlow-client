import { useOrdersStore } from '../../../../store/ordersStore';
import './CreateNewOrderButton.css';
import { createOrder } from '../../../../api/orders';
import { useNavigate } from 'react-router-dom';

export const CreateNewOrderButton = () => {
    const newOrder = useOrdersStore((state) => state.newOrder);
    const resetNewOrder = useOrdersStore((state) => state.resetNewOrder);
    const addOrder = useOrdersStore((state) => state.addOrder);
    const navigate = useNavigate();

    const handleCreateOrder = async () => {
        
        const { order } = await  createOrder(newOrder);
        addOrder(order);
        resetNewOrder();
        navigate('/');
    };

    return (
        <div className='createButtonWrap'>
            <button className={`createNewOrderButton`} onClick={handleCreateOrder}>{`CREATE ORDER`}</button>
        </div>
    );
};
