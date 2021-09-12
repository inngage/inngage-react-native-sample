/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import Inngage from '@inngageregistry/inngage-react';

const props = {
  appToken: '36174c4746e84f49fa822076b0b859d1',
  enableAlert: false
};

Inngage.GetPermission(props);
Inngage.Subscription(props);


AppRegistry.registerComponent(appName, () => App);
