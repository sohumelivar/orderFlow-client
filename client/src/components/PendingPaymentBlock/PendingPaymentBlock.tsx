import './PendingPaymentBlock.css';
import X from '../../assets/icons/x.svg?react';
import SquareCheck from '../../assets/icons/square-check.svg?react';
import type { PaymentType } from '../../types/payments.types';
import { rejectPayment, completePayment } from '../../api/payments';
import { getStatsAllTime } from '../../api/stats';
import { useStatsStore } from '../../store/statsStore';

type Props = {
    stats: PaymentType;
};

export const PendingPaymentBlock = ({stats}: Props) => {
    const setStats = useStatsStore((state) => state.setStats);

    const handleRejectPayment = async () => {
        await rejectPayment(stats.id);
        const data = await getStatsAllTime();
        setStats(data);
    };

    const handleCompletePayment = async () => {
        await completePayment(stats.id);
        const data = await getStatsAllTime();
        setStats(data);
    };
    
    return (
        <div className={`pendingPaymentBlockWrap`}>
            <div className={`pendingPaymentBlockData`}>{stats.created_at.split('T')[0]}</div>
            <div className={`pendingPaymentBlockSummary`}>{`₪ ${stats.amount}`}</div>
            <div className={`pendingPaymentBlockBtnsWrap`}>
                <button className="button_cancel_modal" onClick={handleRejectPayment}>
                    <X className='x_button_icon'/>
                    <span>CANCEL</span>
                </button>
                <button className="button_submit_modal" onClick={handleCompletePayment}>
                    <SquareCheck className='icon_play_button'/>
                    <span>SUBMIT</span>
                </button> 
            </div>
        </div>
    );
};
