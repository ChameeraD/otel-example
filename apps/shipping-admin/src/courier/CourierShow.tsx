import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { COURIER_TITLE_FIELD } from "./CourierTitle";

export const CourierShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Id" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Quote" target="courierId" label="Quotes">
          <Datagrid rowClick="show">
            <ReferenceField
              label="Courier"
              source="courier.id"
              reference="Courier"
            >
              <TextField source={COURIER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Customer Id" source="customerId" />
            <TextField label="Description" source="description" />
            <TextField label="Id" source="id" />
            <TextField label="Price" source="price" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Shipment"
          target="courierId"
          label="Shipments"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Courier"
              source="courier.id"
              reference="Courier"
            >
              <TextField source={COURIER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Delivered At" source="deliveredAt" />
            <TextField label="Id" source="id" />
            <TextField label="Price" source="price" />
            <TextField label="Status" source="status" />
            <TextField label="Tracking Number" source="trackingNumber" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
