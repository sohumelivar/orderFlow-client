import { useOrdersStore } from '../../store/ordersStore';
import './TotalLength.css';

export const TotalLength = () => {
    const newOrder = useOrdersStore((state) => state.newOrder);
    const totalLength = newOrder.length * newOrder.quantity;

    return (
        <div className='totalLengthWrap'>
            <div className={`totalLengthTitle`}>{`TOTAL LENGTH:`} </div>
            <div className={`totalLengthValue`}>{`${totalLength} m`}</div>
        </div>
    );
};
