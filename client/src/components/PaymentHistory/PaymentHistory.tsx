import { useStatsStore } from '../../store/statsStore';
import './PaymentHistory.css';
import X from '../../assets/icons/x.svg?react';
import Check from '../../assets/icons/square-check.svg?react';
import Clock from '../../assets/icons/clock.svg?react';

export const PaymentHistory = () => {
    const paymentHistory = useStatsStore((state) => state.stats?.payment_history);

    console.log(paymentHistory);
    

    return (
        <div className={`paymentHistoryWrapp`}>
            <div className={`paymentHistoryTitle`}>
                {'PAYMENT HISTORY'}
            </div>
            {paymentHistory && paymentHistory.map((el) => (
                <div key={el.id} className={`pendingHistoryBlockWrapp`}>
                    <div className={`phLeftSide`}>
                        <div className={`phCreatedValue`}>{el?.created_at?.split('T')[0]}</div>
                        <div className={`phAmountValue`}>{`₪ ${el.amount}`}</div>
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
