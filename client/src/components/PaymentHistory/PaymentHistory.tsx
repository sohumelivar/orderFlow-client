import { useStatsStore } from '../../store/statsStore';
import './PaymentHistory.css';
import X from '../../assets/icons/x.svg?react';
import Check from '../../assets/icons/square-check.svg?react';
import Clock from '../../assets/icons/clock.svg?react';

export const PaymentHistory = () => {
    const paymentHistory = useStatsStore((state) => state.stats?.payment_history);

    return (
        <div className={`paymentHistoryWrapp`}>
            <div className={`paymentHistoryTitle`}>
                {'PAYMENT HISTORY'}
            </div>
            {paymentHistory && paymentHistory.map((el) => (
                <div key={`${el.created_at || el.date}_${el.amount}`} className={`pendingHistoryBlockWrapp`}>
                    <div className={`phLeftSide`}>
                        {el?.date ? 
                            (
                                <div className={`phCreatedValue`}>{el?.date?.split('T')[0]}</div>
                            )
                            :
                            (
                                <div className={`phCreatedValue`}>{el?.created_at?.split('T')[0]}</div>
                            )
                        }
                        <div className={`phAmountValue`}>{`₪ ${Number(el.amount)}`}</div>
                    </div>
                    <div className={`phRightSide`}>
                        {el.status === 'rejected' && 
                            <div className={`phStatusRejected`}>
                                <X className={`phXIcon`}/>
                                <span>REJECTED</span>
                            </div>
                        }
                        {el.status === 'accepted' && 
                            <div className={`phStatusAccepted`}>
                                <Check className={`phCheckIcon`}/>
                                <span>ACCEPTED</span>
                            </div>
                        }
                        {el.status === 'pending' && 
                            <div className={`phStatusPending`}>
                                <Clock className={`phClockIcon`}/>
                                <span>PENDING</span>
                            </div>
                        }
                    </div>
                </div>
            ))}
        </div>
    );
};
