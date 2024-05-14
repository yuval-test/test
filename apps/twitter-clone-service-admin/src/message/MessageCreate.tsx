import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const MessageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="recipient" source="recipient" />
        <TextInput label="content" multiline source="content" />
        <TextInput label="sender" source="sender" />
      </SimpleForm>
    </Create>
  );
};
