import { InputJsonValue } from "../../types";

export type ProductCreateInput = {
  category?: string | null;
  description?: string | null;
  image?: InputJsonValue;
  name?: string | null;
  price?: number | null;
};
