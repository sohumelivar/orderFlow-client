import './DeleteModal.css';
import TriangleAlert from '../../../assets/icons/triangle-alert.svg?react';
import type { OrderType } from '../../../types/order.types';

type Props = {
    orderId: number;
    onConfirm: () => void;
    onCancel: () => void;
    order: OrderType;
};

export const DeleteModal = ({orderId, onConfirm, onCancel, order}: Props) => {
    return (
        <div className="delete-modal">
            <TriangleAlert className='triangleAlert'/>

            <h3>Delete order?</h3>
            <p>{`Are you sure you want to delete order ${orderId}?, ${order.suction_size} + ${order.liquid_size} * ${order.quantity} pcs`}</p>

            <div className="delete-modal__actions">
                <button className="btn btn-danger" onClick={onConfirm}>
                    Yes
                </button>
                <button className="btn btn-secondary" onClick={onCancel}>
                    No
                </button>
            </div>
        </div>
    );
};
