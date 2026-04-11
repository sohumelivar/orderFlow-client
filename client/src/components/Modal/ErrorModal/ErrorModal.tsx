import { useOrdersStore } from '../../../store/ordersStore';
import './ErrorModal.css';

type Props = {
    onClose: () => void;
};

export const ErrorModal = ({ onClose }:Props) => {
    const errorMessage = useOrdersStore((state) => state.errorMessage);
    
    return (
        <div className='error-modal' onClick={onClose}>
            <h3 className='errMessageH3'>ERROR MESSAGE</h3>
            <p>{errorMessage}</p>
            <button className={`btn `} >OK</button>
        </div>
    );
};
