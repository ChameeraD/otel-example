import { CourierWhereUniqueInput } from "../courier/CourierWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ShipmentWhereInput = {
  courier?: CourierWhereUniqueInput;
  createdAt?: DateTimeFilter;
  deliveredAt?: DateTimeNullableFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
  status?: "AllocatingCourier" | "InTransit" | "Delivered";
  trackingNumber?: StringNullableFilter;
  updatedAt?: DateTimeFilter;
};
