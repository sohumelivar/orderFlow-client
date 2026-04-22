import { useEffect, useRef, useState } from 'react';
import './CustomEditOrderComent.css';
import { useEditOrderStore } from '../../store/editOrderStore';

export const CustomEditOrderComent = () => {
    const editOrder = useEditOrderStore((state) => state.editOrder);
    const updateEditOrder = useEditOrderStore((state) => state.updateEditOrder);
    const [activeOption, setActiveOption] = useState('');
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
                const handleClick = (e: MouseEvent) => {
                    if (!ref.current?.contains(e.target as Node)) {
                        setActiveOption('');
                    }
                };
                document.addEventListener('click', handleClick);
                return () => {
                    document.removeEventListener('click', handleClick);
                };
    }, []);

    const isActive = (e: React.MouseEvent<HTMLDivElement>) => {
        const onTarget = e.currentTarget.className.split(' ');
        if (onTarget.length === 1) {
            setActiveOption('activeOption');
        }
    };


    return (
        <div ref={ref} className='commentInputWrap' onClick={isActive}>
            <div className={`commentTitle`}>{'COMMENT'}</div>
            <textarea className={`commentInput ${activeOption}`} onChange={(e) => updateEditOrder({comment: e.target.value})} placeholder='Add production notes ...' value={editOrder?.comment}/>
        </div>  
    );
};
