import { InputJsonValue } from "../../types";
import { SssUpdateManyWithoutUsersInput } from "./SssUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  password?: string;
  roles?: InputJsonValue;
  ssses?: SssUpdateManyWithoutUsersInput;
};
