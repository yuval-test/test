import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="username" source="username" />
        <TextInput label="avatarUrl" source="avatarUrl" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="password" source="password" />
        <TextInput label="bio" multiline source="bio" />
      </SimpleForm>
    </Edit>
  );
};
