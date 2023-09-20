import { SortOrder } from "../../util/SortOrder";

export type QuoteOrderByInput = {
  courierId?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};
