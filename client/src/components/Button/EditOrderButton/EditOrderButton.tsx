import './EditOrderButton.css';
import SquareCheck from '../../../assets/icons/square-check.svg?react';
import { updateOrder } from '../../../api/orders';
import { useEditOrderStore } from '../../../store/editOrderStore';
import { useOrdersStore } from '../../../store/ordersStore';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const EditOrderButton = () => {
    const setErrorMessage = useOrdersStore((state) => state.setErrorMessage);
    const editOrder = useEditOrderStore((state) => state.editOrder);
    const navigate = useNavigate();
     
    const handleSubmit = async() => {
        try {
            if (editOrder) {
               await updateOrder({
                    id: editOrder.id,
                    suction_size: editOrder.suction_size,
                    liquid_size: editOrder.liquid_size,
                    length: editOrder.length,
                    quantity: editOrder.quantity,
                    comment: editOrder?.comment,
               });
               navigate('/');
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setErrorMessage(error.response?.data.message);
            }
        }
    };

    return (
        <div className='editOrderButtonWrap'>
            <button className='editOrderButtonCancel' onClick={() => navigate('/')}>Cancel</button>
            <button 
                    className='editeOrderButtonComplete'
                    onClick={handleSubmit}
                    >
                        <SquareCheck className={'complete_button_icon'}/>
                        <span>Save</span>
                </button>
        </div>
    );
};
