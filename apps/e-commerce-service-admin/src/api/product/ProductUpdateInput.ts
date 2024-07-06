import { InputJsonValue } from "../../types";

export type ProductUpdateInput = {
  category?: string | null;
  description?: string | null;
  image?: InputJsonValue;
  name?: string | null;
  price?: number | null;
};
