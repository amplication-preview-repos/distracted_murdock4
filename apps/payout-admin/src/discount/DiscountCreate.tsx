import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const DiscountCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <NumberInput label="discountPercentage" source="discountPercentage" />
        <DateTimeInput label="endDate" source="endDate" />
        <TextInput label="Product" source="product" />
        <DateTimeInput label="startDate" source="startDate" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
