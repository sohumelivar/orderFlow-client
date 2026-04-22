import { useEditOrderStore } from '../../store/editOrderStore';
import './EditTotalPrice.css';

export const EditTotalPrice = () => {
    const editOrder = useEditOrderStore((state) => state.editOrder);
    let totalPrice;
    if (editOrder?.quantity && editOrder?.length) {
        totalPrice = editOrder.length * editOrder.quantity * 2.5
    };
    
    return (
        <div className={`totalPriceWrap`}>
            <div className={`totalPriceTitle`}>{`ORDER TOTAL:`}</div>
            <div className={`totalPriceValue`}>{`₪ ${totalPrice}`}</div>
        </div>
    );
};
