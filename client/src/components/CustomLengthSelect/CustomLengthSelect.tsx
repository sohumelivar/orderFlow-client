import { useEffect, useRef, useState } from 'react';
import './CustomLengthSelect.css';
import { useOrdersStore } from '../../store/ordersStore';

export const CustomLengthSelect = () => {
    const [lengthInput, setLengthInput] = useState('SELECT LENGTH');
    const [hiddenBlock, setHiddenBlock] = useState('hidden');
    const [activeOption, setActiveOption] = useState('');
    const setLength = useOrdersStore((state) => state.setLength);
    const ref = useRef<HTMLDivElement>(null);
    const refToScroll = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (!ref.current?.contains(e.target as Node)) {
                setHiddenBlock('hidden');
                setActiveOption('');
            }
            refToScroll.current?.scrollTo({ top: 0 });
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
            refToScroll.current?.scrollTo({ top: 0 });
        }
        if (hiddenBlock == '') {
            setHiddenBlock('hidden');
            return;
        }
        setHiddenBlock('');
        setActiveOption('activeOption');
    };
    
    const handleSelectLength = (event: React.MouseEvent<HTMLDivElement>) => {
        const lengthNumber = event.currentTarget.textContent;
        setLength(Number(lengthNumber));
        setLengthInput(lengthNumber);
        setHiddenBlock('hidden');
        setActiveOption('');
    };

    return (
        <div ref={ref} className='lengthWrap'>
            <div className={`lengthTitle`}>{'LENGTH (M)'}</div>
            <div className={`lengthOption ${activeOption}`} onClick={(e) => handleSelectOptions(e, hiddenBlock)}>{lengthInput}</div>
            <div ref={refToScroll} className={`lengthDropdown ${hiddenBlock}`}>
                {[...Array(50)].map((_,i) => (
                    <div key={i} className={`lengthNumbers optionsColor`} onClick={handleSelectLength}>{i + 1}</div>
                ))}
            </div>
        </div>
    );
};
