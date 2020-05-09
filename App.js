import React from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Startup from './src/startup_screen';
import InactiveList from './src/inactive_list';
import InactiveStatus from './src/inactive_status';
import ActiveList from './src/active_list';
import ActiveStatus from './src/active_status';
import HomePage from './src/home_screen'

// you can also import from @react-navigation/native

const navigator = createStackNavigator(
  {
    ActiveList: ActiveList,
    ActiveStatus: ActiveStatus,
    Login: Startup,
    InactiveList: InactiveList,
    InactiveStatus: InactiveStatus,
    Home: HomePage
  },
  {
    initialRouteName: 'Home',
    // headerMode: 'none'
  }

);


export default createAppContainer(navigator);


