import { useEffect, useRef, useState } from 'react';
import './CustomTubeSelect.css';
import { useOrdersStore } from '../../store/ordersStore';
import { pipePairs } from '../../constants/pipePairs';

export const CustomTubeSelect = () => {
    const [tubeSizeInput, setTubeSizeInput] = useState('SELECT TUBE SIZE');
    const [hiddenBlock, setHiddenBlock] = useState('hidden');
    const [activeOption, setActiveOption] = useState('');
    const setSuctionSize = useOrdersStore((state) => state.setSuctionSize);
    const setLiquidSize = useOrdersStore((state) => state.setLiquidSize);
    const ref = useRef<HTMLDivElement>(null);

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

    const handleSelectOptions = (event: React.MouseEvent<HTMLDivElement>, hiddenBlock: string) => {
        const isActiveOption = event.currentTarget.className.split(' ');
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
        console.log('event: ', event.currentTarget);
        
        const displayName = event.currentTarget.textContent;
        const pipePair = pipePairs.find((el) => el.display_name === displayName);
        if (!pipePair) return
        setTubeSizeInput(pipePair.display_name);
        setHiddenBlock('hidden');
        setSuctionSize(pipePair.suction_size);
        setLiquidSize(pipePair.liquid_size);
        setActiveOption('');
    };

    return (
        <div ref={ref} className='tubeWrap'>
                <div className={`tubeSize`}>TUBE SIZE</div>
                <div className={`tubeOptions ${activeOption}`} onClick={(e) => handleSelectOptions(e, hiddenBlock)}>{tubeSizeInput}</div>
                {pipePairs.map((el) => (
                    <div key={el.display_name} className={`tubeOptions ${hiddenBlock}`} onClick={handleSelectTubeSize}>{el.display_name}</div>
                ))}
                <div className=''></div>
              
        </div>
    );
};
