export type OrderType = {
	id: number;
	suction_size: string;
	liquid_size: string;
	length: number;
	quantity: number;
	status: string;
	created_at: string;
	comment?: string;
	updated_at?: string;
	completed_at: string | null
};

export type CreateOrder = {
	suction_size: string;
	liquid_size: string;
	length: number;
	quantity: number;
	price_per_meter: number;
	comment?: string;
};

export type ActiveOrdersResponse = {
	orders: OrderType[];
};

export type PipePair = {
	suction_size: string;
	liquid_size: string;
	display_name: string;
};

export type CompleteOrder = {
	orderId: number;
	tube_size: string;
	quantity: number;
	completed_quantity: number;
	length: number;
};

export type EditOrder = {
	suction_size: string;
	liquid_size: string;
	// length: number;
	// quantity: number;
	// price_per_meter: number;
	// comment?: string;
};
