import { VvvWhereInput } from "./VvvWhereInput";
import { VvvOrderByInput } from "./VvvOrderByInput";

export type VvvFindManyArgs = {
  where?: VvvWhereInput;
  orderBy?: Array<VvvOrderByInput>;
  skip?: number;
  take?: number;
};
