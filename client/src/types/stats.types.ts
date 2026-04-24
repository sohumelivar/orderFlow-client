import type { PaymentType, PendingPayment } from "./payments.types";

export type SummaryType = {
    total_completed: number;
    total_paid: number;
    outstanding_debt: number;
    pendingPaymentsTotal: number;
    pendingPayments: PendingPayment[];
};

export type OrdersStatisticsType = {
    display_name: string;
    quantity: number;
    total_meter: number;
    amount: number;
};

export type TotalStatisticsType = {
    quantity: number;
    meter: number;
    amount: number;
};

export type PipePairStatisticsType = {
    orders: OrdersStatisticsType[];
    total: TotalStatisticsType;
};

export type PaymentHistoryType = PaymentType[];

export type StatisticsType = {
    summary: SummaryType;
    pipe_type_statistics: PipePairStatisticsType;
    payment_history: PaymentHistoryType;
};
    