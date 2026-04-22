import './CustomEditOrdeTubeSelect.css';
import { pipePairs } from '../../constants/pipePairs';
import { useEditOrderStore } from '../../store/editOrderStore';
import { useEffect, useRef, useState } from 'react';

export const CustomEditOrdeTubeSelect = () => {
    const editOrder = useEditOrderStore((state) => state.editOrder);
    const [hiddenBlock, setHiddenBlock] = useState('hidden');
    const [activeOption, setActiveOption] = useState('');
    const ref = useRef<HTMLDivElement>(null);
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

    const handleSelectTubeSize = (event: React.MouseEvent<HTMLDivElement>) => {
        const displayName = event.currentTarget.textContent;
        const pipePair = pipePairs.find((el) => el.display_name === displayName);
        updateEditOrder({
            suction_size: pipePair?.suction_size,
            liquid_size: pipePair?.liquid_size
        });

    };
    
    return (
        <div ref={ref} className='tubeWrap'>
                <div className={`tubeSize`}>TUBE SIZE</div>
                <div className={`tubeOptions ${activeOption}`} onClick={handleSelectOptions}>
                    {`${editOrder?.suction_size} + ${editOrder?.liquid_size}`}
                </div>
                <div className={`tubeDropwown ${hiddenBlock}`}>
                    {pipePairs.map((el) => (
                        <div key={el.display_name} className={`tubeOptions optionsColor`} onClick={handleSelectTubeSize}>{el.display_name}</div>
                    ))}
                </div>
        </div>
    );
};
