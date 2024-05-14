import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserWhereInput = {
  id?: StringFilter;
  username?: StringNullableFilter;
  avatarUrl?: StringNullableFilter;
  email?: StringNullableFilter;
  password?: StringNullableFilter;
  bio?: StringNullableFilter;
};
