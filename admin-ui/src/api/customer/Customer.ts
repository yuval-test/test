import { Event } from "../event/Event";

export type Customer = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  specialEvents?: Array<Event>;
};
