import './PendingPaymentBlock.css';
import X from '../../assets/icons/x.svg?react';
import SquareCheck from '../../assets/icons/square-check.svg?react';
import type { PaymentType } from '../../types/payments.types';

type Props = {
    stats: PaymentType;
};

export const PendingPaymentBlock = ({stats}: Props) => {
    
    return (
        <div className={`pendingPaymentBlockWrap`}>
            <div className={`pendingPaymentBlockData`}>{stats.created_at.split('T')[0]}</div>
            <div className={`pendingPaymentBlockSummary`}>{`₪ ${stats.amount}`}</div>
            <div className={`pendingPaymentBlockBtnsWrap`}>
                <button className="button_cancel_modal">
                    <X className='x_button_icon'/>
                    <span>CANCEL</span>
                </button>
                <button className="button_submit_modal">
                    <SquareCheck className='icon_play_button'/>
                    <span>SUBMIT</span>
                </button> 
            </div>
        </div>
    );
};
