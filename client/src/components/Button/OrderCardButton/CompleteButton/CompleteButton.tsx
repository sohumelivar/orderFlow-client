import SquareCheck from '../../../../assets/icons/square-check.svg?react';
import './CompleteButton.css';

export const CompleteButton = () => {
    return (
        <button className="button_complete">
            <SquareCheck className='complete_button_icon'/>
            <span>COMPLETE</span>
        </button>
    );
};
