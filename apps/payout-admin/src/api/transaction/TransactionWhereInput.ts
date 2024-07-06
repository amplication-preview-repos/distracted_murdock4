import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TransactionWhereInput = {
  amount?: FloatNullableFilter;
  currency?: StringNullableFilter;
  id?: StringFilter;
  initiatedAt?: DateTimeNullableFilter;
  status?: "Option1";
  transactionId?: StringNullableFilter;
};
