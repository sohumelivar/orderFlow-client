import { useOrdersStore } from '../../../../store/ordersStore';
import './CreateNewOrderButton.css';
import { createOrder } from '../../../../api/orders';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const CreateNewOrderButton = () => {
    const setErrorMessage = useOrdersStore((state) => state.setErrorMessage);
    const newOrder = useOrdersStore((state) => state.newOrder);
    const resetNewOrder = useOrdersStore((state) => state.resetNewOrder);
    const addOrder = useOrdersStore((state) => state.addOrder);
    const navigate = useNavigate();

    const handleCreateOrder = async () => {
        try {
            const response = await  createOrder(newOrder);
            console.log('response: ', response);
            addOrder(response.order);
            resetNewOrder();
            navigate('/');
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setErrorMessage(error.response?.data.message);
            }
        }
    };

    return (
        <div className='createButtonWrap'>
            <button className={`createNewOrderButton`} onClick={handleCreateOrder}>{`CREATE ORDER`}</button>
        </div>
    );
};
