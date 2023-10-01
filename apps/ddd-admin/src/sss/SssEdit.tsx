import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const SssEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="new field" source="newField" />
      </SimpleForm>
    </Edit>
  );
};
