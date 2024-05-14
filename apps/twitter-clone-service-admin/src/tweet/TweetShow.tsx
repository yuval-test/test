import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const TweetShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="content" source="content" />
        <TextField label="author" source="author" />
        <TextField label="tweet_content" source="tweetContent" />
        <TextField label="tweet_createdAt" source="tweetCreatedAt" />
        <TextField label="tweet_author" source="tweetAuthor" />
      </SimpleShowLayout>
    </Show>
  );
};
