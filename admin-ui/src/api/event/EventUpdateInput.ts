import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type EventUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  title?: string | null;
};
