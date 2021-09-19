/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import Inngage from '@inngageregistry/inngage-react';

const props = {
  appToken: '36174c4746e84f49fa822076b0b859d1',
  enableAlert: false,
  authKey: 'teste'
};

Inngage.GetPermission(props);
Inngage.Subscription(props);
Inngage.SendEvent(
  {
    newEventRequest: {
      app_token: "177d3286eb87ab2d94efb0da3eb87c9f",
      identifier: "octavio@inngage.com.br",
      event_name: "acessou_promo",
      conversion_event: true,
      conversion_value: 1090.00,
      conversion_notid: "2314klbkf41bsgav4hg12ab24v1h41",
      event_values: {
        nome_promo: "10OFF",
        categoria: "Fast Food",
        foto_promo: "https://inngage.com.br/wp-content/uploads/2021/08/Promo.png",
        redirect_link: "https://amo.oferta/21njnfa"
      }
    },
    authKey: 'teste'
  }
)


AppRegistry.registerComponent(appName, () => App);
