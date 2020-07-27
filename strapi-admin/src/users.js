import * as React from "react";
import { List, Datagrid, TextField, BooleanField, ArrayField, ReferenceField, DateField,
    SingleFieldList, ChipField } from 'react-admin';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <BooleanField source="featured" />
            <TextField source="title" />
            <DateField source="createdAt" />
            <TextField source="id" />
            <ReferenceField source="_id" reference="s">
                <TextField source="id" />
            </ReferenceField>
            <ArrayField source="audiences">
                <SingleFieldList><ChipField source="_id" /></SingleFieldList>
                </ArrayField>
            <ArrayField source="tags">
                <SingleFieldList><ChipField source="_id" /></SingleFieldList>
                </ArrayField>
        </Datagrid>
    </List>
);