import './DeleteModal.css';

type Props = {
    orderId: number;
}

export const DeleteModal = ({orderId}: Props) => {
    return (
        <div>
            TEST ID: {orderId}
        </div>
    );
};
