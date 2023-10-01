import { SortOrder } from "../../util/SortOrder";

export type SssOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  newField?: SortOrder;
};
