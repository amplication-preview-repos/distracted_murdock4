export type Transaction = {
  amount: number | null;
  createdAt: Date;
  currency: string | null;
  id: string;
  initiatedAt: Date | null;
  status?: "Option1" | null;
  transactionId: string | null;
  updatedAt: Date;
};
