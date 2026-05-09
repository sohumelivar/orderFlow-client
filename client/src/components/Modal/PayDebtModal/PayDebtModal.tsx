import './PayDebtModal.css';
import Wallet from '../../../assets/icons/wallet.svg?react';
import { useStatsStore } from '../../../store/statsStore';
import { useState } from 'react';
import { sendPayment } from '../../../api/payments';

type Props = {
    onClose: () => void;
}

export const PayDebtModal = ({onClose}: Props) => {
    const stats = useStatsStore((state) => state.stats);
    const [amount, setAmount] = useState('');

    console.log('stats: ', stats);
    

    const handleAmountValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(e.target.value);
    };

    const handleSendPayment = () => {
        if (!amount) return;
        sendPayment(Number(amount));
        onClose();
    };

    return (
        <div className={`payDebtModalWrap`}>


            <div className={`walletCloseBtnWrap`}>
                <div className={`payDebtWalletWrap`}>
                    <Wallet className={`payDebtModalWallet`}/>
                </div>
                <button onClick={onClose} className={`payDebtModalCloseXBtn`}>X</button>
            </div>


            <div className={`currentDebtWrap`}>
                <div className={`currentDebtTitle`}>{`CURRENT DEBT:`}</div>
                <div className={`currentDebtValue`}>{`₪${stats?.summary.outstanding_debt}`}</div>
            </div>

            <div className={`paymentAmountTitle`}>{`PAYMENT AMOUNT (₪)`}</div>

            <input className={`payDebtModalAmountInput`} type="number" value={amount} onChange={handleAmountValue} placeholder='0'/>

            <div className={`payDebtModalBtnsWrap`}>
                <button className={`payDebtModalBtn payDebtModalCancel`} onClick={onClose}>{`CANCEL`}</button>
                <div className={`payDebtModalSendPaymentWrap`}>
                    <Wallet className={`payDebtModalWalletTwo`}/>
                    <div className={` payDebtModalSendPayment`} onClick={handleSendPayment}>{`SEND PAYMENT`}</div>
                </div>
            </div>
            
        </div>
    );
};
