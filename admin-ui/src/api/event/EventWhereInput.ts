import { StringFilter } from "../../util/StringFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type EventWhereInput = {
  id?: StringFilter;
  customer?: CustomerWhereUniqueInput;
};
