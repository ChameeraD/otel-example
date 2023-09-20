import { CourierWhereUniqueInput } from "../courier/CourierWhereUniqueInput";

export type QuoteUpdateInput = {
  courier?: CourierWhereUniqueInput | null;
  customerId?: string | null;
  description?: string | null;
  price?: number | null;
};
