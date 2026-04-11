import { useOrdersStore } from '../../store/ordersStore';
import './CustomPriceInput.css';

export const CustomPriceInput = () => {
    const price = useOrdersStore((state) => state.newOrder.price_per_meter);
    const setPrice = useOrdersStore((state) => state.setPricePerMeter);

    return (
        <div className='priceWrap'>
            <div className={`priceTitle`}>PRICE PER METER (₪)</div>
            <input type='number' step={0.5} className={`priceInput`} value={price} onChange={(e) => setPrice(Number(e.target.value))} />
        </div>
    );
};
