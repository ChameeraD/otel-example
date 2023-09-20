import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type NotificationWhereInput = {
  createdAt?: DateTimeFilter;
  customerId?: StringNullableFilter;
  id?: StringFilter;
  message?: StringNullableFilter;
  title?: StringNullableFilter;
  updatedAt?: DateTimeFilter;
};
