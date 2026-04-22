import { useEffect, useRef, useState } from 'react';
import './CustomEditOrderQuantity.css';
import { useEditOrderStore } from '../../store/editOrderStore';

export const CustomEditOrderQuantity = () => {
    const ref = useRef<HTMLDivElement>(null);
    const editOrder = useEditOrderStore((state) => state.editOrder);
    const refToScrollQuantity = useRef<HTMLDivElement>(null);
    const [hiddenBlock, setHiddenBlock] = useState('hidden');
    const [activeOption, setActiveOption] = useState('');
    const updateEditOrder = useEditOrderStore((state) => state.updateEditOrder);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (!ref.current?.contains(e.target as Node)) {
                setHiddenBlock('hidden');
                setActiveOption('');
            }
        };
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);

    const handleSelectOptions = (e: React.MouseEvent<HTMLDivElement>) => {
        const isActiveOption = e.currentTarget.className.split(' ');
        if (isActiveOption[1] === 'activeOption') {
            setActiveOption('');
        }
        if (hiddenBlock == '') {
            setHiddenBlock('hidden');
            return;
        }
        setHiddenBlock('');
        setActiveOption('activeOption');
    };

    const handleSelectQuantity = (event: React.MouseEvent<HTMLDivElement>) => {
        const quantityNumber = event.currentTarget.textContent;
        updateEditOrder({
            quantity: Number(quantityNumber)
        });
        setHiddenBlock('hidden');
        setActiveOption('');
    };

    return (
        <div ref={ref} className='editOrderQuantityWrap'>
            <div className={`editOrderQuantityTitle`}>{'QUANTITY (PCS)'}</div>
            <div className={`editOrderQuantityOptions ${activeOption}`} onClick={handleSelectOptions}>
                {editOrder?.quantity}
            </div>
            <div ref={refToScrollQuantity} className={`quantityDropDown ${hiddenBlock}`}>
                {[...Array(50)].map((_,i) => (
                    <div key={i} className={`quantityNumbers`} onClick={handleSelectQuantity} >{i + 1}</div>
                ))}
            </div>
        </div>
    );
};
