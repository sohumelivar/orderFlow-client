import './CreateOrder.css';
import { CustomTubeSelect } from '../../components/CustomTubeSelect/CustomTubeSelect';
import { useOrdersStore } from '../../store/ordersStore';
import { useEffect } from 'react';
import { CustomLengthSelect } from '../../components/CustomLengthSelect/CustomLengthSelect';
import { CustomQuantitySelect } from '../../components/CustomQuantitySelect/CustomQuantitySelect';

export const CreateOrder = () => {
    const newOrder = useOrdersStore((state) => state.newOrder);
    
    const resetNewOrder = useOrdersStore((state) => state.resetNewOrder);
    useEffect(() => {
        return () => {
            console.log('уход со страницы');
            resetNewOrder();
        };
    }, []);
    console.log('newOrder: ', newOrder);

    return (
        <div className='createOrderWrapper'>
            <div className='createOrderHeader'>
                NEW ORDER
            </div>
            <CustomTubeSelect />
            <CustomLengthSelect />
            <CustomQuantitySelect />
        </div>
    );
};
