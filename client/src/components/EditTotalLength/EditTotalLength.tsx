import { useEditOrderStore } from '../../store/editOrderStore';
import './EditTotalLength.css';

export const EditTotalLength = () => {
    const editOrder = useEditOrderStore((state) => state.editOrder);
    let totalLength;
    if (editOrder?.length && editOrder.quantity) {
        totalLength = editOrder.length * editOrder.quantity;
   }

    return (
        <div className='totalLengthWrap'>
            <div className={`totalLengthTitle`}>{`TOTAL LENGTH:`} </div>
            <div className={`totalLengthValue`}>{`${totalLength} m`}</div>
        </div>
    );
};
