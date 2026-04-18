import { create } from 'zustand';
import { initialCommentState } from '../constants/orderComment';

type ViewCommentState = {
    comment: string;
    commentModalIsOpen: boolean;
    setComment: (comment: string) => void;
    resetComment: () => void;
    setCommentModalIsVisible: () => void;
    setCommentModalIsHidden: () => void;
};

export const useOrderCommentStore = create<ViewCommentState>((set) => ({
    comment: initialCommentState,
    commentModalIsOpen: false,

    setComment: (comment) => set({ comment }),

    resetComment: () =>
        set({
            comment: initialCommentState
        }),

    setCommentModalIsVisible: () =>
        set({
            commentModalIsOpen: true
        }),
        
    setCommentModalIsHidden: () =>
        set({
            commentModalIsOpen: false
        }),
}))