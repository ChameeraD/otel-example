import { Quote as TQuote } from "../api/quote/Quote";

export const QUOTE_TITLE_FIELD = "customerId";

export const QuoteTitle = (record: TQuote): string => {
  return record.customerId?.toString() || String(record.id);
};
