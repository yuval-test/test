import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
  avatarUrl?: SortOrder;
  email?: SortOrder;
  password?: SortOrder;
  bio?: SortOrder;
};
