import { SortOrder } from "../../util/SortOrder";

export type ShipmentOrderByInput = {
  courierId?: SortOrder;
  createdAt?: SortOrder;
  deliveredAt?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  status?: SortOrder;
  trackingNumber?: SortOrder;
  updatedAt?: SortOrder;
};
