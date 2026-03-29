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