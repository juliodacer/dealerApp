import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './assets/screens/Home';
import { DrawerContent } from './assets/screens/DrawerContent';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
      </NavigationContainer>
  );
}

export default App;
