import { Courier } from "../courier/Courier";

export type Quote = {
  courier?: Courier | null;
  createdAt: Date;
  customerId: string | null;
  description: string | null;
  id: string;
  price: number | null;
  updatedAt: Date;
};
