import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { CourierTitle } from "../courier/CourierTitle";

export const ShipmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="courier.id" reference="Courier" label="Courier">
          <SelectInput optionText={CourierTitle} />
        </ReferenceInput>
        <DateTimeInput label="Delivered At" source="deliveredAt" />
        <NumberInput label="Price" source="price" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "AllocatingCourier", value: "AllocatingCourier" },
            { label: "InTransit", value: "InTransit" },
            { label: "Delivered", value: "Delivered" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Tracking Number" source="trackingNumber" />
      </SimpleForm>
    </Edit>
  );
};
