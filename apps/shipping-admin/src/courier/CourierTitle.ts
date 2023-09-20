import { Courier as TCourier } from "../api/courier/Courier";

export const COURIER_TITLE_FIELD = "lastName";

export const CourierTitle = (record: TCourier): string => {
  return record.lastName?.toString() || String(record.id);
};
