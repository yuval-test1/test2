import { Vcxvxc as TVcxvxc } from "../api/vcxvxc/Vcxvxc";

export const VCXVXC_TITLE_FIELD = "id";

export const VcxvxcTitle = (record: TVcxvxc): string => {
  return record.id?.toString() || String(record.id);
};
