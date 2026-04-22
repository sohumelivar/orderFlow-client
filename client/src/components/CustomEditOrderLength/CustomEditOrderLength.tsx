import { useEffect, useRef, useState } from 'react';
import './CustomEditOrderLength.css';
import { useEditOrderStore } from '../../store/editOrderStore';

export const CustomEditOrderLength = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [hiddenBlock, setHiddenBlock] = useState('hidden');
    const [activeOption, setActiveOption] = useState('');
    const updateEditOrder = useEditOrderStore((state) => state.updateEditOrder);
    const editOrder = useEditOrderStore((state) => state.editOrder);
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

    const handleSelectLength = (event: React.MouseEvent<HTMLDivElement>) => {
        const lengthNumber = event.currentTarget.textContent;
        updateEditOrder({
            length: Number(lengthNumber)
        })
        setHiddenBlock('hidden');
        setActiveOption('');
    }

    return (
        <div ref={ref} className='editOrderWrap'>
            <div className={`editOrderTitle`}>{'SELECT LENGTH'}</div>
            <div className={`editLengthOption ${activeOption}`} onClick={handleSelectOptions}>
                {`${editOrder?.length}`}
            </div>
            <div ref={refToScroll} className={`EditOrderlengthDropdown ${hiddenBlock}`}>
                {[...Array(50)].map((_,i) => (
                    <div key={i} className={`lengthNumbers optionsColor`} onClick={handleSelectLength}>{i + 1}</div>
                ))}
            </div>
        </div>
    );
};
