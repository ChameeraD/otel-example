import { CourierWhereUniqueInput } from "../courier/CourierWhereUniqueInput";

export type QuoteCreateInput = {
  courier?: CourierWhereUniqueInput | null;
  customerId?: string | null;
  description?: string | null;
  price?: number | null;
};
