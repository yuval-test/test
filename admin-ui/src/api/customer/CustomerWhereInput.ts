import { StringFilter } from "../../util/StringFilter";
import { EventListRelationFilter } from "../event/EventListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CustomerWhereInput = {
  id?: StringFilter;
  specialEvents?: EventListRelationFilter;
  name?: StringNullableFilter;
};
