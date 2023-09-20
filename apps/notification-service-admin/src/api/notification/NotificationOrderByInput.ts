import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
