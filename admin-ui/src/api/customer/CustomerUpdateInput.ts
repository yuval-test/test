import { EventUpdateManyWithoutCustomersInput } from "./EventUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  specialEvents?: EventUpdateManyWithoutCustomersInput;
  name?: string | null;
};
