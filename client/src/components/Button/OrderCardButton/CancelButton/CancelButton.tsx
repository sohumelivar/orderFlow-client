import X from '../../../../assets/icons/x.svg?react';
import './CancelButton.css';

export const CancelButton = () => {
    return (
        <button className="button_cancel">
            <X className='x_button_icon'/>
            <span>CANCEL</span>
        </button>
    );
};
