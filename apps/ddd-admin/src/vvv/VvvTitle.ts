import { Vvv as TVvv } from "../api/vvv/Vvv";

export const VVV_TITLE_FIELD = "id";

export const VvvTitle = (record: TVvv): string => {
  return record.id?.toString() || String(record.id);
};
