/**
 * @format
 */

import { AppRegistry, Alert } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import Inngage from '@inngageregistry/inngage-react'


const props = {
  appToken: '316abc26e9dcb2a4b93ac633e461e22f'
}
Inngage.GetPermission(props)

AppRegistry.registerComponent(appName, () => App);