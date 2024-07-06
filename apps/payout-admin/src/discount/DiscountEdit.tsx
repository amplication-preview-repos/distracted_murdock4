import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const DiscountEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <NumberInput label="discountPercentage" source="discountPercentage" />
        <DateTimeInput label="endDate" source="endDate" />
        <TextInput label="Product" source="product" />
        <DateTimeInput label="startDate" source="startDate" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
