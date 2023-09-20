import { QuoteUpdateManyWithoutCouriersInput } from "./QuoteUpdateManyWithoutCouriersInput";
import { ShipmentUpdateManyWithoutCouriersInput } from "./ShipmentUpdateManyWithoutCouriersInput";

export type CourierUpdateInput = {
  lastName?: string | null;
  name?: string | null;
  quotes?: QuoteUpdateManyWithoutCouriersInput;
  shipments?: ShipmentUpdateManyWithoutCouriersInput;
};
