import { InputJsonValue } from "../../types";
import { SssCreateNestedManyWithoutUsersInput } from "./SssCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  password: string;
  roles: InputJsonValue;
  ssses?: SssCreateNestedManyWithoutUsersInput;
};
