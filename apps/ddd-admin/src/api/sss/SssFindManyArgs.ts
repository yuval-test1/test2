import { SssWhereInput } from "./SssWhereInput";
import { SssOrderByInput } from "./SssOrderByInput";

export type SssFindManyArgs = {
  where?: SssWhereInput;
  orderBy?: Array<SssOrderByInput>;
  skip?: number;
  take?: number;
};
