import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const NotificationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Customer Id" source="customerId" />
        <TextInput label="Message" source="message" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
