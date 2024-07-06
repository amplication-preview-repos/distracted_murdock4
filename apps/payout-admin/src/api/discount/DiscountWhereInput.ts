import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DiscountWhereInput = {
  description?: StringNullableFilter;
  discountPercentage?: FloatNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  product?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
  title?: StringNullableFilter;
};
