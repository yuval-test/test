import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  recipient?: SortOrder;
  content?: SortOrder;
  sender?: SortOrder;
};
