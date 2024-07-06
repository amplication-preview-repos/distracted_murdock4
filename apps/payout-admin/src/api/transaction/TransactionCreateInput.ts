export type TransactionCreateInput = {
  amount?: number | null;
  currency?: string | null;
  initiatedAt?: Date | null;
  status?: "Option1" | null;
  transactionId?: string | null;
};
