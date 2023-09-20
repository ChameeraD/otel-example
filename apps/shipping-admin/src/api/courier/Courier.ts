import { Quote } from "../quote/Quote";
import { Shipment } from "../shipment/Shipment";

export type Courier = {
  createdAt: Date;
  id: string;
  lastName: string | null;
  name: string | null;
  quotes?: Array<Quote>;
  shipments?: Array<Shipment>;
  updatedAt: Date;
};
