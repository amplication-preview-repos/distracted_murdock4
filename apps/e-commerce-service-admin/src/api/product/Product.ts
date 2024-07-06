import { JsonValue } from "type-fest";

export type Product = {
  category: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  image: JsonValue;
  name: string | null;
  price: number | null;
  updatedAt: Date;
};
