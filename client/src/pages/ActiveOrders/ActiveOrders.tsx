import { OrderCard } from "../../components/OrderCard/OrderCard";

export const ActiveOrdersPage = () => {
    const order = {
        id: 1,
        suction_size: "3/4",
        liquid_size: "3/8",
        length: 10,
        quantity: 5,
        status: "waiting",
        created_at: "2026-03-29T20:05:27.204Z",
        comment: "test comment",
        updated_at: "2026-03-29T20:05:27.204Z",
        completed_at: null
    }
    return (
        <div>
            <div>
                <OrderCard order={order}/>
            </div>

        </div>
    );
};