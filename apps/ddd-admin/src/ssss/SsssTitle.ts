import { Ssss as TSsss } from "../api/ssss/Ssss";

export const SSSS_TITLE_FIELD = "id";

export const SsssTitle = (record: TSsss): string => {
  return record.id?.toString() || String(record.id);
};
