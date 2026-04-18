import './CommentModal.css';
import { useOrderCommentStore } from '../../../store/viewCommentStore';
import { useEffect } from 'react';

export const CommentModal = () => {
    const setCommentModalIsHidden = useOrderCommentStore((state) => state.setCommentModalIsHidden);
    const resetComment = useOrderCommentStore((state) => state.resetComment);
    const comment = useOrderCommentStore((state) => state.comment);

    const onClose = () => {
        setCommentModalIsHidden();
        resetComment();
    };

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.classList.contains('modal-overlay')) {
                setCommentModalIsHidden();
                resetComment();
            };
        };
        document.addEventListener('click', handleClick);
        
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <div className='comment-modal' onClick={onClose}>
            <h3 className='commentMessage'>ORDER COMMENT</h3>
            <p>{comment}</p>
            <button className={`CommentBtn `} >OK</button>
        </div>
    );
};
