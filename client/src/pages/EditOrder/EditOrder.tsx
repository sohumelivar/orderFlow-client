import { useEffect } from 'react';
import { CustomEditOrdeTubeSelect } from '../../components/CustomEditOrdeTubeSelect/CustomEditOrdeTubeSelect';
import './EditOrder.css';
import { useEditOrderStore } from '../../store/editOrderStore';
import { CustomEditOrderLength } from '../../components/CustomEditOrderLength/CustomEditOrderLength';
import { CustomEditOrderQuantity } from '../../components/CustomEditOrderQuantity/CustomEditOrderQuantity';
import { CustomEditOrderComent } from '../../components/CustomEditOrderComent/CustomEditOrderComent';
import { EditTotalLength } from '../../components/EditTotalLength/EditTotalLength';
import { EditTotalPrice } from '../../components/EditTotalPrice/EditTotalPrice';
import { EditOrderButton } from '../../components/Button/EditOrderButton/EditOrderButton';

export const EditOrder = () => {
    const resetEditOrder = useEditOrderStore((state) => state.resetEditOrder);

    useEffect(() => {
        return () => {
            resetEditOrder();
        };
    }, []);

    return (
        <div className='editOrderWrapper'>
            <div className='editOrderHeader'>
                {`EDIT ORDER`}
            </div>
            <CustomEditOrdeTubeSelect />
            <CustomEditOrderLength />
            <CustomEditOrderQuantity />
            <CustomEditOrderComent />
            <EditTotalLength />
            <EditTotalPrice />
            <EditOrderButton />
        </div>
    );
};
