import React from 'react';
import { createAppContainer, createSwitchNavigator } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { Provider as TrackProvider } from './src/context/TrackContext';
import { FontAwesome } from '@expo/vector-icons';
import { Text } from 'react-native-elements';
import { View } from 'react-native';

const Tab = createBottomTabNavigator() ; 

// const trackListFlow = createNativeStackNavigator({
//   TrackList: TrackListScreen,
//   TrackDetail: TrackDetailScreen,
// });

// trackListFlow.navigationOptions = {
//   title: 'Tracks',
//   tabBarIcon: <FontAwesome name="th-list" size={20} />,
// };

// const switchNavigator = createSwitchNavigator({
//   ResolveAuth: ResolveAuthScreen,
//   loginFlow: createNativeStackNavigator({
//     Signup: SignupScreen,
//     Signin: SigninScreen,
//   }),
//   mainFlow: createBottomTabNavigator({
//     trackListFlow,
//     TrackCreate: TrackCreateScreen,
//     Account: AccountScreen,
//   }),
// });

//const App = createAppContainer(switchNavigator);
//const App = createAppContainer();
export default () => {
  return (
    // <TrackProvider>
    //   <LocationProvider>
    //     <AuthProvider>
    //       <App
    //         ref={(navigator) => {
    //           setNavigator(navigator);
    //         }}
    //       />
    //     </AuthProvider>
    //   </LocationProvider>
    // </TrackProvider>
    <View>
      <Text h3>hi</Text>
  
    </View>
  );
};
