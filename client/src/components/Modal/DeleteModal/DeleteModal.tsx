import './DeleteModal.css';

type Props = {
    orderId: number;
    onConfirm: () => void;
    onCancel: () => void;
}

export const DeleteModal = ({orderId, onConfirm, onCancel}: Props) => {
    return (
        <div className="delete-modal">
            <h3>Delete order?</h3>
            <p>Are you sure you want to delete order #{orderId}?</p>

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
