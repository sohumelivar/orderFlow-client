import type { OrderType } from '../../types/order.types';

type Props = {
    completedOrder: OrderType;
};

export const CompletedOrderCard = ({completedOrder}: Props) => {
    const formattedDate = completedOrder.completed_at
        ? new Date(completedOrder.completed_at).toISOString().split('T')[0]
        : '';


    return (
        <div id={`order-${completedOrder.id}`} className={`order-card order-card--${completedOrder.status}`}>
            <div className="order-card__header">
                <div className="order-card__sizes">
                    <div className="order-card__size">
                        <span className="label">SUCTION</span>
                        <span className="value">{completedOrder.suction_size}</span>
                    </div>
                    <div className="divider" />
                    <div className="order-card__size">
                        <span className="label">LIQUID</span>
                        <span className="value">{completedOrder.liquid_size}</span>
                    </div>
                </div>
            </div>
            <div className="order-card-divider"/>
            <div className="order-card__body">
                <div className="length_quantity_labels">
                    <div className="length_label">LENGTH</div>
                    <div className="quantity_label">QUANTITY</div>
                </div>
                <div className="length_quantity_values">
                    <div className="length_value">{completedOrder.length} m</div>
                    <div className="quantity_value">{completedOrder.quantity} pcs</div>
                </div>
            </div>
            <div className="order-card-divider"/>
            <div className="order-card__footer">
                <div className="total_created_labels">
                    <div className="total_label">TOTAL</div>
                    <div className="created_label">COMPLETED</div>
                </div>
                <div className="total_created_values">
                    <div className="total_value">{completedOrder.quantity * completedOrder.length} m</div>
                    <div className="created_value">{formattedDate}</div>
                </div>
            </div>
        </div>
    );
};
