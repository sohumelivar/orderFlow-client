import './CreateOrder.css';
import { CustomTubeSelect } from '../../components/CustomTubeSelect/CustomTubeSelect';
import { useOrdersStore } from '../../store/ordersStore';
import { useEffect } from 'react';
import { CustomLengthSelect } from '../../components/CustomLengthSelect/CustomLengthSelect';
import { CustomQuantitySelect } from '../../components/CustomQuantitySelect/CustomQuantitySelect';
import { CommentInput } from '../../components/CommentInput/CommentInput';
import { CustomPriceInput } from '../../components/CustomPriceInput/CustomPriceInput';
import { TotalLength } from '../../components/TotalLength/TotalLength';
import { TotalPrice } from '../../components/TotalPrice/TotalPrice';
import { CreateNewOrderButton } from '../../components/Button/newOrderButton/CreateNewOrderButton/CreateNewOrderButton';

export const CreateOrder = () => {
    const resetNewOrder = useOrdersStore((state) => state.resetNewOrder);
    useEffect(() => {
        return () => {
            resetNewOrder();
        };
    }, []);

    return (
        <div className='createOrderWrapper'>
            <div className='createOrderHeader'>
                {`NEW ORDER`}
            </div>
            <CustomTubeSelect />
            <CustomLengthSelect />
            <CustomQuantitySelect />
            <CommentInput />
            <CustomPriceInput />
            <TotalLength />
            <TotalPrice />
            <CreateNewOrderButton />
        </div>
    );
};
