import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { QuoteListRelationFilter } from "../quote/QuoteListRelationFilter";

export type ParcelWhereInput = {
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  maxDimension?: JsonFilter;
  parcelType?: "Small" | "Large" | "Medium";
  price?: FloatNullableFilter;
  quotes?: QuoteListRelationFilter;
  updatedAt?: DateTimeFilter;
  weight?: FloatNullableFilter;
};
