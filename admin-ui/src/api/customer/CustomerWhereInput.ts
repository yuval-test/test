import { StringFilter } from "../../util/StringFilter";
import { EventListRelationFilter } from "../event/EventListRelationFilter";

export type CustomerWhereInput = {
  id?: StringFilter;
  specialEvents?: EventListRelationFilter;
};
