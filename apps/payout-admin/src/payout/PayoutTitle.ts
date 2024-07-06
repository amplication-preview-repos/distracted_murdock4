import { Payout as TPayout } from "../api/payout/Payout";

export const PAYOUT_TITLE_FIELD = "currency";

export const PayoutTitle = (record: TPayout): string => {
  return record.currency?.toString() || String(record.id);
};
