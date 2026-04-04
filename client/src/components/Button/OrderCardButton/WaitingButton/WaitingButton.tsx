import Play from '../../../../assets/icons/play.svg?react';
import './WaitingButton.css';

export const WaitingButton = () => {
    return (
        <button className="button_waiting">
            <Play className='icon_play_button'/>
            <span>WAITING</span>
        </button> 
    );
};
