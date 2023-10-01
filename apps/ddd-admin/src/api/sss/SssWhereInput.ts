import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SssWhereInput = {
  id?: StringFilter;
  newField?: StringNullableFilter;
};
