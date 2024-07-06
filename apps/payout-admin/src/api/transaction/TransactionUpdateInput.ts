export type TransactionUpdateInput = {
  amount?: number | null;
  currency?: string | null;
  initiatedAt?: Date | null;
  status?: "Option1" | null;
  transactionId?: string | null;
};
