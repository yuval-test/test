import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MessageWhereInput = {
  id?: StringFilter;
  recipient?: StringNullableFilter;
  content?: StringNullableFilter;
  sender?: StringNullableFilter;
};
