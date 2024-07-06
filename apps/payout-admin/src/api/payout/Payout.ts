export type Payout = {
  amount: number | null;
  createdAt: Date;
  currency: string | null;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
};
