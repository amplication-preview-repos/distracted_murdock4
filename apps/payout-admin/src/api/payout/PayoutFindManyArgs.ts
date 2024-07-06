import { PayoutWhereInput } from "./PayoutWhereInput";
import { PayoutOrderByInput } from "./PayoutOrderByInput";

export type PayoutFindManyArgs = {
  where?: PayoutWhereInput;
  orderBy?: Array<PayoutOrderByInput>;
  skip?: number;
  take?: number;
};
