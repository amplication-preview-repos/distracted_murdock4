import { SortOrder } from "../../util/SortOrder";

export type DiscountOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  discountPercentage?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  product?: SortOrder;
  startDate?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
