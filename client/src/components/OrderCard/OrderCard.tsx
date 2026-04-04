import type { OrderType } from '../../types/order.types';
import './OrderCard.css';
import MessageSquare from '../../assets/icons/message-square-more.svg?react';
import Pencil from '../../assets/icons/pencil.svg?react';
import Trash from '../../assets/icons/trash-2.svg?react';
import Play from '../../assets/icons/play.svg?react';
import X from '../../assets/icons/x.svg?react';
import SquareCheck from '../../assets/icons/square-check.svg?react';
import { WaitingButton } from '../Button/OrderCardButton/WaitingButton/WaitingButton';
import { CancelButton } from '../Button/OrderCardButton/CancelButton/CancelButton';
import { CompleteButton } from '../Button/OrderCardButton/CompleteButton/CompleteButton';

type Props = {
  order: OrderType;
};

export const OrderCard = ({ order }: Props) => {
    const hasMessage = Boolean(order.comment);
    const orderStatus = order.status;
    const formattedDate = new Date(order.created_at)
        .toISOString()
        .split('T')[0];

    return (
        <div id={`order-${order.id}`} className={`order-card order-card--${order.status}`}>
            <div className="order-card__header">
                <div className="order-card__sizes">
                    <div className="order-card__size">
                        <span className="label">SUCTION</span>
                        <span className="value">{order.suction_size}</span>
                    </div>
                    <div className="divider" />
                    <div className="order-card__size">
                        <span className="label">LIQUID</span>
                        <span className="value">{order.liquid_size}</span>
                    </div>
                </div>
                <div className="order-card__actions">
                    <MessageSquare className={`action-icon ${hasMessage ? 'active' : 'disabled'}`}/>
                    <Pencil className={`action-icon ${orderStatus === 'waiting' ? 'active' : 'disabled'}`}/>
                    <Trash className={`action-icon ${orderStatus === 'waiting' ? 'active' : 'disabled'}`}/>
                </div>
            </div>
            <div className="order-card-divider"/>
            <div className="order-card__body">
                <div className="length_quantity_labels">
                    <div className="length_label">LENGTH</div>
                    <div className="quantity_label">QUANTITY</div>
                </div>
                <div className="length_quantity_values">
                    <div className="length_value">{order.length} m</div>
                    <div className="quantity_value">{order.quantity} pcs</div>
                </div>
            </div>
            <div className="order-card-divider"/>
            <div className="order-card__footer">
                <div className="total_created_labels">
                    <div className="total_label">TOTAL</div>
                    <div className="created_label">CREATED</div>
                </div>
                <div className="total_created_values">
                    <div className="total_value">{order.quantity * order.length} m</div>
                    <div className="created_value">{formattedDate}</div>
                </div>
            </div>
            <div className="order-card-divider"/>
                {order.status === 'waiting' ? 
                    <WaitingButton />
                    :
                    <div className='button_layout'>
                        <CancelButton />
                        <CompleteButton />
                    </div>
                }
        </div>
    );
};