import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { CourierTitle } from "../courier/CourierTitle";

export const QuoteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="courier.id" reference="Courier" label="Courier">
          <SelectInput optionText={CourierTitle} />
        </ReferenceInput>
        <TextInput label="Customer Id" source="customerId" />
        <TextInput label="Description" source="description" />
        <NumberInput label="Price" source="price" />
      </SimpleForm>
    </Edit>
  );
};
