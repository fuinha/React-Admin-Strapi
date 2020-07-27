import * as React from "react";
import { Edit, SimpleForm, ReferenceInput, NumberInput, ArrayInput, BooleanInput, TextInput, DateInput,
    SimpleFormIterator, SelectInput } from 'react-admin';
    
export const EditList = props => (
    <Edit {...props}>
        <SimpleForm>
            <BooleanInput source="featured" />
            <ArrayInput source="audiences">
                <SimpleFormIterator>
                    <TextInput source="name" />
                    <DateInput source="createdAt" />
                    <DateInput source="updatedAt" />
                </SimpleFormIterator>
            </ArrayInput>
            <TextInput source="title" />
            <DateInput source="createdAt" />
            <DateInput source="updatedAt" />
            <TextInput source="id" />
        </SimpleForm>
    </Edit>
);