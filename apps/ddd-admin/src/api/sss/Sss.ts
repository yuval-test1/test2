import { User } from "../user/User";

export type Sss = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  newField: string | null;
  uSer?: User | null;
};
