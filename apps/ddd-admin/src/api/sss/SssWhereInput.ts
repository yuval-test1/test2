import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SssWhereInput = {
  id?: StringFilter;
  newField?: StringNullableFilter;
  uSer?: UserWhereUniqueInput;
};
