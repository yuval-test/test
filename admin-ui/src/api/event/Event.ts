import { Customer } from "../customer/Customer";

export type Event = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  customer?: Customer | null;
};
