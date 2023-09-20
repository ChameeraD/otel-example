import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { CourierTitle } from "../courier/CourierTitle";

export const QuoteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="courier.id" reference="Courier" label="Courier">
          <SelectInput optionText={CourierTitle} />
        </ReferenceInput>
        <TextInput label="Customer Id" source="customerId" />
        <TextInput label="Description" source="description" />
        <NumberInput label="Price" source="price" />
      </SimpleForm>
    </Create>
  );
};
