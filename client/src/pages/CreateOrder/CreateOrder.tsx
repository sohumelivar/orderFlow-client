import './CreateOrder.css';
import { CustomTubeSelect } from '../../components/CustomTubeSelect/CustomTubeSelect';
import { useOrdersStore } from '../../store/ordersStore';
import { useEffect, useState } from 'react';
import { CustomLengthSelect } from '../../components/CustomLengthSelect/CustomLengthSelect';
import { CustomQuantitySelect } from '../../components/CustomQuantitySelect/CustomQuantitySelect';
import { CommentInput } from '../../components/CommentInput/CommentInput';
// import { CustomPriceInput } from '../../components/CustomPriceInput/CustomPriceInput';
import { TotalLength } from '../../components/TotalLength/TotalLength';
import { TotalPrice } from '../../components/TotalPrice/TotalPrice';
import { CreateNewOrderButton } from '../../components/Button/newOrderButton/CreateNewOrderButton/CreateNewOrderButton';
import { Modal } from '../../components/Modal/Modal';
import { ErrorModal } from '../../components/Modal/ErrorModal/ErrorModal';

export const CreateOrder = () => {
    const errorMessage = useOrdersStore((state) => state.errorMessage);
    const setErrorMessage = useOrdersStore((state) => state.setErrorMessage);
    const closeModal = () => setErrorMessage(null);
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
            {/* <CustomPriceInput /> */}
            <TotalLength />
            <TotalPrice />
            <CreateNewOrderButton />
            <Modal isOpen={!!errorMessage} onClose={closeModal}>
                {<ErrorModal onClose={closeModal}/>}
            </Modal>
        </div>
    );
};
