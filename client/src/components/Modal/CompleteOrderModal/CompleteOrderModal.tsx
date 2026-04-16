import './CompleteOrderModal.css';
import SquareCheck from '../../../assets/icons/square-check.svg?react';
import { useEffect, useRef, useState } from 'react';
import { useCompleteOrderStore } from '../../../store/completeOrderStore';
import { completeOrder, getActiveOrders } from '../../../api/orders';
import { useOrdersStore } from '../../../store/ordersStore';

export const CompleteOrderModal = () => {
    const [hiddenBlock, setHiddenBlock] = useState('hidden');
    const ref = useRef<HTMLDivElement>(null);
    const toggleModal = useCompleteOrderStore((state) => state.toggleModal);
    const completeOrderInfo = useCompleteOrderStore((state) => state.completeOrderInfo);
    const setModalHidden = useCompleteOrderStore((state) => state.setModalHidden);
    const [activeOption, setActiveOption] = useState('');
    const refToScroll = useRef<HTMLDivElement>(null);
    const setCompleteOrderQuantity = useCompleteOrderStore((state) => state.setCompleteOrderQuantity);
    const setOrders = useOrdersStore((state) => state.setOrders);
    

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.classList.contains('modal-overlay')) {
                setModalHidden();
            };
        };
        document.addEventListener('click', handleClick);
        
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);

    const toggleHidden = (e: React.MouseEvent<HTMLDivElement>) => {
        setHiddenBlock(prev => (prev ? '' : 'hidden'));
        const isActiveOption = e.currentTarget.className.split(' ');
        if (isActiveOption[1] === 'activeOption') {
            setActiveOption('');
            refToScroll.current?.scrollTo({ top: 0 });
            return;
        }
        setActiveOption('activeOption');
    };

    const handleDropDownOptions = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current?.contains(e.target as Node)) {
            setHiddenBlock('hidden');
            setActiveOption('');
            refToScroll.current?.scrollTo({ top: 0 });
        };
    };

    const sendCompleteInfo = async (id: number, completedQuantity: number) => {
        await completeOrder({id, completed_quantity: completedQuantity});
        const newOrders = await getActiveOrders();
        setOrders(newOrders.orders);
        setModalHidden();
    };

    return (
        <div className='complete-modal' onClick={handleDropDownOptions}>
            <SquareCheck className='completeOrderIcon'/>
            <div className='completeOrderTitle'>COMPLETE ORDER</div>
            <div className='completeOrderSubtitle'>How many pipes have been completed?</div>
            <div className='aboutOrderCompleteWrap'>
                <div className='completeOrderTubeSizeWrap'>
                    <div className='completeOrderInfoTitle'>SIZE</div>
                    <div className='completeOrderInfo'>{completeOrderInfo.tube_size}</div>
                </div>
                <div className='completeOrderQuantityInfo'>
                    <div className='completeOrderInfoTitle'>ORDERED</div>
                    <div className='completeOrderInfo'>{`${completeOrderInfo.quantity} pcs * ${completeOrderInfo.length} m`}</div>
                </div>
            </div>
            <div className='completedQuantityTitleWrap'>
                <div className='completedQuantityTitle'>COMPLETED QUANTITY (PCS)</div>
            </div>
            <div ref={ref} className='completeOrderSelectWrap'>
                <div className={`completeOrderSelectOption ${activeOption}`} onClick={toggleHidden}>{completeOrderInfo.completed_quantity}</div>
                <div ref={refToScroll} className={`completeOrderSelectDropDown ${hiddenBlock}`}>
                    {[...Array(completeOrderInfo.quantity)].map((_, i) => (
                        <div 
                            key={i} 
                            className={`completeOrderNumber optionsColor`} 
                            onClick={() => {
                                setCompleteOrderQuantity(i + 1);
                                setActiveOption('');
                                setHiddenBlock('hidden');
                            }}>
                                {i + 1}
                        </div>
                    ))}
                </div>
            </div>
            <div className='completeOrderButtonWrap'>
                <button className='completeOrderButtonCancel' onClick={toggleModal}>Cancel</button>
                <button 
                    className='completeOrderButtonComplete' 
                    onClick={
                        () => sendCompleteInfo(completeOrderInfo.orderId, completeOrderInfo.completed_quantity)
                    }>
                        {`Complete`}
                    </button>
            </div>
        </div>
    );
};
