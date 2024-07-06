export type Discount = {
  createdAt: Date;
  description: string | null;
  discountPercentage: number | null;
  endDate: Date | null;
  id: string;
  product: string | null;
  startDate: Date | null;
  title: string | null;
  updatedAt: Date;
};
