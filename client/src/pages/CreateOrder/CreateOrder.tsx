import { useState } from 'react';
import './CreateOrder.css';

export const CreateOrder = () => {
    const [form, setForm] = useState({
        suction_size: '',
        liquid_size: '',
        length: '',
        quantity: '',
        comment: '',
        price_per_meter: '',
    });

    const tubePairs = [
        { suction_size: '7/8', liquid_size: '3/8', display_name: '7/8 - 3/8' },
        { suction_size: '3/4', liquid_size: '3/8', display_name: '3/4 - 3/8' },
        { suction_size: '5/8', liquid_size: '3/8', display_name: '5/8 - 3/8' },
        { suction_size: '3/8', liquid_size: '1/4', display_name: '3/8 - 1/4' },
        { suction_size: '1/2', liquid_size: '1/4', display_name: '1/2 - 1/4' },
    ];

    const handleTubePairChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedSuctionSize = event.target.value;
        const selectedPair = tubePairs.find(
            (pair) => pair.suction_size === selectedSuctionSize
        );
        if (!selectedPair) return;
        setForm((prev) => ({
            ...prev,
            suction_size: selectedPair.suction_size,
            liquid_size: selectedPair.liquid_size,
        }));
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const { name, value } = event.target;
            setForm((prev) => ({
                ...prev,
                [name]: value,
            }));
    };

    const length = Number(form.length) || 0;
    const quantity = Number(form.quantity) || 0;
    const pricePerMeter = Number(form.price_per_meter) || 0;

    const totalLength = length * quantity;
    const orderTotal = totalLength * pricePerMeter;

    return (
        <div className='createOrder'>
            <h3>NEW ORDER</h3>
            <div className='suctionSize'>
                <select 
                    value={form.suction_size}
                    onChange={handleTubePairChange}
                    className="select"    
                >
                <option value="">Select tube pair</option>
                {tubePairs.map((pair) => (
                    <option key={pair.suction_size} value={pair.suction_size}>
                    {pair.display_name}
                    </option>
                ))}
                </select>
            </div>
            <div>{totalLength} m</div>
            <div>₪ {orderTotal}</div>
        </div>
    );
};
