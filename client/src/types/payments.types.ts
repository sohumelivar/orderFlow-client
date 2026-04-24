export type PaymentType = {
    amount: number;
    status: 'accepted' | 'rejected' | 'pending';
    date: string;
};
