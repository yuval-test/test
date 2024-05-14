import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TweetWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  author?: StringNullableFilter;
  tweetContent?: StringNullableFilter;
  tweetCreatedAt?: DateTimeNullableFilter;
  tweetAuthor?: StringNullableFilter;
};
