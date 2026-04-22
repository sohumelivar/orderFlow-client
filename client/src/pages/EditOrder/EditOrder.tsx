import { useEffect } from 'react';
import { CustomEditOrdeTubeSelect } from '../../components/CustomEditOrdeTubeSelect/CustomEditOrdeTubeSelect';
import './EditOrder.css';
import { useEditOrderStore } from '../../store/editOrderStore';

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
        </div>
    );
};
