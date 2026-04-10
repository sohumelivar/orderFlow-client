import { useEffect, useRef, useState } from 'react';
import './CustomQuantitySelect.css';
import { useOrdersStore } from '../../store/ordersStore';

export const CustomQuantitySelect = () => {
    const [quantityInput, setQuantityInput] = useState('SELECT QUANTITY');
    const [hiddenBlock, setHiddenBlock] = useState('hidden');
    const [activeOption, setActiveOption] = useState('');
    const setQuantity = useOrdersStore((state) => state.setQuantity);
    const ref = useRef<HTMLDivElement>(null);
    const refToScrollQuantity = useRef<HTMLDivElement>(null);

    useEffect(() => {
            const handleClick = (e: MouseEvent) => {
                if (!ref.current?.contains(e.target as Node)) {
                    setHiddenBlock('hidden');
                    setActiveOption('');
                }
                refToScrollQuantity.current?.scrollTo({ top: 0 });
            };
            document.addEventListener('click', handleClick);
            return () => {
                document.removeEventListener('click', handleClick);
            };
        }, []);
    
    const handleSelectOptions = (event: React.MouseEvent<HTMLDivElement>, hiddenBlock: string) => {
        const isActiveOption = event.currentTarget.className.split(' ');
        if (isActiveOption[1] === 'activeOption') {
            setActiveOption('');
            refToScrollQuantity.current?.scrollTo({ top: 0 });
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
        setQuantity(Number(quantityNumber));
        setQuantityInput(quantityNumber);
        setHiddenBlock('hidden');
        setActiveOption('');
    };

    return (
        <div ref={ref} className='quantityWrap'>
            <div className={`quantityTitle`}>{'QUANTITY (PCS)'}</div>
            <div className={`quantityOptions ${activeOption}`} onClick={(e) => handleSelectOptions(e, hiddenBlock)}>{quantityInput}</div>
            <div ref={refToScrollQuantity} className={`quantityDropDown ${hiddenBlock}`}>
                {[...Array(50)].map((_,i) => (
                    <div key={i} className={`quantityNumbers`} onClick={handleSelectQuantity} >{i + 1}</div>
                ))}
            </div>
        </div>
    );
};
