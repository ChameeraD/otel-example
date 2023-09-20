import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const NotificationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Customer Id" source="customerId" />
        <TextInput label="Message" source="message" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
