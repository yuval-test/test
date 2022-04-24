import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type EventCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  title?: string | null;
};
