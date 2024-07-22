type Order = {
  id: number;
  uuid: string;
  order_items: any[];
  status: string;
  user_uuid: string;
  billing_uuid: string;
  total_amount: number;
  created_at: Date;
  updated_at: Date;
};
