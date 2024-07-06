import { Discount as TDiscount } from "../api/discount/Discount";

export const DISCOUNT_TITLE_FIELD = "title";

export const DiscountTitle = (record: TDiscount): string => {
  return record.title?.toString() || String(record.id);
};
