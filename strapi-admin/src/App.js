import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import simpleRestProvider from './ra-strapi-rest';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import { UserList } from './users';
import { EditList } from './editList'
import { PostCreate } from './posts';
import Dashboard from './dashboard';
import authProvider from './authProvider';

// https://jsonplaceholder.typicode.com
// http://0.0.0.0:1337
const url = 'http://localhost:1337'
const dataProvider = simpleRestProvider(url);
const App = () => (
  // authProvider={authProvider}
  <Admin dashboard={Dashboard}  dataProvider={dataProvider}>
    <Resource name="informatives" list={UserList} edit={EditList} create icon={PostIcon} />
    <Resource name="trainings" list={UserList} edit={EditList} create icon={PostIcon} />
  </Admin>
);

export default App;
