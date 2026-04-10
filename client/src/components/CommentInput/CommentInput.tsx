import { useEffect, useRef, useState } from 'react';
import './CommentInput.css';
import { useOrdersStore } from '../../store/ordersStore';

export const CommentInput = () => {
    const comment = useOrdersStore((state) => state.newOrder.comment);
    const setComment = useOrdersStore((state) => state.setComment);
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
            <textarea className={`commentInput ${activeOption}`} onChange={(e) => setComment(e.target.value)} placeholder='Add production notes ...' value={comment}/>
        </div>  
    );
};
