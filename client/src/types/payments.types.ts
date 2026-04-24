export type PaymentType = {
    id: number;
    owner_id: number;
    amount: string;
    status: 'accepted' | 'rejected' | 'pending';
    created_at: string;
};

export type PendingPayment = {
    date: string;
    amount: number;
    status: 'pending';
};

