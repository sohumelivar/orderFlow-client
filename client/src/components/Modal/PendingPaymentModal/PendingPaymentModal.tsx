import './PendingPaymentModal.css';
import Clock from '../../../assets/icons/clock.svg?react';
import X from '../../../assets/icons/x.svg?react';
import { PendingPaymentBlock } from '../../PendingPaymentBlock/PendingPaymentBlock';
import { useStatsStore } from '../../../store/statsStore';

type Props = {
    onClose: () => void;
};

export const PendingPaymentModal = ({onClose}: Props) => {
    const stats = useStatsStore((state) => state.stats);
    const pendingPayments = stats?.payment_history.filter((el) => el.status === 'pending');
    console.log('pendingPayments', pendingPayments);
    
    
    return (
        <div className={`pendingPaymentModalWrap`}>
            <div className={`pendingPaymentModalHeader`}>
                <Clock className={`pendingPaymentModalClockIcon`}/>
                <div>{`PENDING PAYMENTS`}</div>
                <X className={`pendingPaymentModalXIcon`} onClick={onClose}/>
            </div>
            <div className={`pendingPaymentModalPaymentsWrap`}>
                {pendingPayments && pendingPayments.map((el) => 
                    <PendingPaymentBlock key={el.id} stats={el}/>
                )}
            </div>
            <div className={`pendingPaymentModalCloseBtn`} onClick={onClose}>
                CLOSE
            </div>


        </div>
    );
};
