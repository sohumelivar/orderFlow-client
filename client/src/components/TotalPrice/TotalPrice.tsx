import { useOrdersStore } from '../../store/ordersStore';
import './TotalPrice.css';

export const TotalPrice = () => {
    const newOrder = useOrdersStore((state) => state.newOrder);
    const totalLength = newOrder.length * newOrder.quantity;
    const totalPrice = newOrder.price_per_meter * totalLength;

    
    return (
        <div className={`totalPriceWrap`}>
            <div className={`totalPriceTitle`}>{`ORDER TOTAL:`}</div>
            <div className={`totalPriceValue`}>{`₪ ${totalPrice}`}</div>
        </div>
    );
};
