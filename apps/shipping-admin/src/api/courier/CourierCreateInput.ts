import { QuoteCreateNestedManyWithoutCouriersInput } from "./QuoteCreateNestedManyWithoutCouriersInput";
import { ShipmentCreateNestedManyWithoutCouriersInput } from "./ShipmentCreateNestedManyWithoutCouriersInput";

export type CourierCreateInput = {
  lastName?: string | null;
  name?: string | null;
  quotes?: QuoteCreateNestedManyWithoutCouriersInput;
  shipments?: ShipmentCreateNestedManyWithoutCouriersInput;
};
