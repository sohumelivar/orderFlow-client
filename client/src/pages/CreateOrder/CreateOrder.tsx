import { useState } from 'react';
import './CreateOrder.css';
import { CustomSelect } from '../../components/CustomSelect/CustomSelect';

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

    return (
        <div className='createOrder'>
            <h3>NEW ORDER</h3>
        </div>
    );
};
