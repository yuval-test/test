import { EventCreateNestedManyWithoutCustomersInput } from "./EventCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  specialEvents?: EventCreateNestedManyWithoutCustomersInput;
  name?: string | null;
};
