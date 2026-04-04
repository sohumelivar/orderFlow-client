import { createPortal } from "react-dom";
import './Modal.css';

type Props = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

export const Modal = ({ isOpen, onClose, children }: Props) => {
    const modalRoot = document.getElementById('modal-root');

    if (!isOpen || !modalRoot) return null;

    return createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div
            className="modal-content"
            onClick={(event) => event.stopPropagation()} 
            >
                <button className="modal-close" onClick={onClose}>
                    X
                </button>
                {children}
            </div>
        </div>,
        modalRoot
    );
};
