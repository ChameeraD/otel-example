import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ParcelWhereUniqueInput } from "../parcel/ParcelWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type QuoteWhereInput = {
  createdAt?: DateTimeFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  parcel?: ParcelWhereUniqueInput;
  price?: FloatNullableFilter;
  updatedAt?: DateTimeFilter;
};
