import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { QuoteListRelationFilter } from "../quote/QuoteListRelationFilter";
import { ShipmentListRelationFilter } from "../shipment/ShipmentListRelationFilter";

export type CourierWhereInput = {
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  name?: StringNullableFilter;
  quotes?: QuoteListRelationFilter;
  shipments?: ShipmentListRelationFilter;
  updatedAt?: DateTimeFilter;
};
