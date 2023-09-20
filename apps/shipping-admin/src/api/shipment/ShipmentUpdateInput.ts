import { CourierWhereUniqueInput } from "../courier/CourierWhereUniqueInput";

export type ShipmentUpdateInput = {
  courier?: CourierWhereUniqueInput | null;
  deliveredAt?: Date | null;
  price?: number | null;
  status?: "AllocatingCourier" | "InTransit" | "Delivered" | null;
  trackingNumber?: string | null;
};
