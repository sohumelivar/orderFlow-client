import './PayDebt.css';
import { userRole } from '../../api/userRole';
import Wallet from '../../assets/icons/wallet.svg?react';
import { useStatsStore } from '../../store/statsStore';
import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { PayDebtModal } from '../Modal/PayDebtModal/PayDebtModal';
import Clock from '../../assets/icons/clock.svg?react';
import { PendingPaymentModal } from '../Modal/PendingPaymentModal/PendingPaymentModal';

export const PayDebt = () => {
    const role = userRole.getUserRole();
    const stats = useStatsStore((state) => state.stats);
    const [modalContent, setModalContent] = useState<React.ReactNode | null>(null);
    const pendingPayments = stats?.payment_history.filter((el) => el.status === 'pending');
    
    const handlePayDebtModal = () => {
        setModalContent(<PayDebtModal onClose={() => setModalContent(null)}/>);
    };

    const handlePendingPaymentModal = () => {
        setModalContent(<PendingPaymentModal onClose={() => setModalContent(null)}/>);
    };

    return (
        <>
            <div>
                {role === 'manufacturer' ?
                <div className={`manufacturerWrap`} onClick={pendingPayments?.length ? handlePendingPaymentModal : undefined}>
                    <Clock />
                    <div>{`PENDING PAYMENTS (${pendingPayments?.length})`}</div>
                </div>  
                : 
                <div className={`ownerWrap`}>
                    <div className={`ownerBtn`} onClick={handlePayDebtModal}>
                        <div className={`payDebtLeftSide`}>
                            <Wallet className={`walletPayBtnIcon`}/>
                            <div className={`payDebtTitle`}>{`PAY DEBT`}</div>
                        </div>
                        <div className={`payDebtRightSide`}>
                            <div className={`rigthSideInfo`}>{`₪ - ${stats?.summary.outstanding_debt}`}</div>
                        </div>
                    </div>
                </div>  
                }
            </div>
            <Modal isOpen={!!modalContent}>
                {modalContent}
            </Modal>
        </>
    );
};