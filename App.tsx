import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './assets/screens/Home/Home';
import DrawerContent  from './assets/screens/DrawerContent/DrawerContent';
import Profile from './assets/screens/Profile/Profile';
import History from './assets/screens/History/History';
import PendingAccunt from './assets/screens/PendingAccount/PendingAccount';
import SavingAccount from './assets/screens/SavingsAccount/SavingAccount';
import OrderBox from './assets/screens/OrderBox/OrderBox';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
        <Drawer.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Drawer.Screen name="Perfil" component={Profile} options={{headerShown: false}}/>
        <Drawer.Screen name="Historial" component={History} />
        <Drawer.Screen name="CuentaPendiente" component={PendingAccunt} />
        <Drawer.Screen name="CuentaAhorros" component={SavingAccount} />
        <Drawer.Screen name="BuzonEspera" component={OrderBox} />
      </Drawer.Navigator>
      </NavigationContainer>
  );
}

export default App;
