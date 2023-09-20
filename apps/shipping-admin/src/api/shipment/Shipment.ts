import { Courier } from "../courier/Courier";

export type Shipment = {
  courier?: Courier | null;
  createdAt: Date;
  deliveredAt: Date | null;
  id: string;
  price: number | null;
  status?: "AllocatingCourier" | "InTransit" | "Delivered" | null;
  trackingNumber: string | null;
  updatedAt: Date;
};
