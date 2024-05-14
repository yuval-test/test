import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const TweetCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <TextInput label="author" source="author" />
        <TextInput label="tweet_content" multiline source="tweetContent" />
        <DateTimeInput label="tweet_createdAt" source="tweetCreatedAt" />
        <TextInput label="tweet_author" source="tweetAuthor" />
      </SimpleForm>
    </Create>
  );
};
