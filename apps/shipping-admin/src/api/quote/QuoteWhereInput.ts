import { CourierWhereUniqueInput } from "../courier/CourierWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type QuoteWhereInput = {
  courier?: CourierWhereUniqueInput;
  createdAt?: DateTimeFilter;
  customerId?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
  updatedAt?: DateTimeFilter;
};
