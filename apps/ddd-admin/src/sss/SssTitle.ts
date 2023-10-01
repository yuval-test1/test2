import { Sss as TSss } from "../api/sss/Sss";

export const SSS_TITLE_FIELD = "newField";

export const SssTitle = (record: TSss): string => {
  return record.newField?.toString() || String(record.id);
};
