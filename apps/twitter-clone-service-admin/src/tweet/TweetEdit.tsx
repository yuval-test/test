import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const TweetEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <TextInput label="author" source="author" />
        <TextInput label="tweet_content" multiline source="tweetContent" />
        <DateTimeInput label="tweet_createdAt" source="tweetCreatedAt" />
        <TextInput label="tweet_author" source="tweetAuthor" />
      </SimpleForm>
    </Edit>
  );
};
