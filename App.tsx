import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './assets/screens/Home/Home';
import DrawerContent from './assets/screens/DrawerContent/DrawerContent';
import Profile from './assets/screens/Profile/Profile';
import History from './assets/screens/History/History';
import PendingAccunt from './assets/screens/PendingAccount/PendingAccount';
import SavingAccount from './assets/screens/SavingsAccount/SavingAccount';
import OrderBox from './assets/screens/OrderBox/OrderBox';
import Help from './assets/screens/Help/Help';
import OrderState from './assets/context/orders/orderState';
import OrderDetail from './assets/screens/OrderDetail/OrderDetail';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <OrderState>
      <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Drawer.Screen name="Perfil" component={Profile} options={{ headerShown: false }} />
          <Drawer.Screen name="Historial" component={History} />
          <Drawer.Screen name="CuentaPendiente" component={PendingAccunt} />
          <Drawer.Screen name="CuentaAhorros" component={SavingAccount} />
          <Drawer.Screen name="BuzonEspera" component={OrderBox} options={{ headerShown: false }} />
          <Drawer.Screen name="Ayuda" component={Help} />
          <Drawer.Screen name="DetallePedido" component={OrderDetail} />
        </Drawer.Navigator>
      </NavigationContainer>
    </OrderState>
  );
}

export default App;
