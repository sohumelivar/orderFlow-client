import { useEffect } from "react";
import { CompletedOrderStore } from "../store/completedOrderStore"
import { getCompletedOrders } from "../api/orders";

export const useCompletedOrders = () => {
    const setCompletedOrders = CompletedOrderStore((state) => state.setCompletedOrders);

    useEffect(() => {
        getCompletedOrders()
            .then((data) => {
                setCompletedOrders(data.orders);
            })
            .catch((error) => {
                console.error('Failed to load completed orders:', error);
            });
    }, [setCompletedOrders]);
};
