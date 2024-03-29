import React from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import { stylesSplash } from './src/screens/auth/Splash/styles';
import Splash from './src/screens/auth/Splash';
import SignUp from './src/screens/auth/SignUp';
import SignIn from './src/screens/auth/SignIn';
import Home from './src/screens/app/Home';
import Favorites from './src/screens/app/Favorites';
import Profile from './src/screens/app/Profile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Tabs = () => (
  <Tab.Navigator
   screenOptions={({route}) => ({
    tabBarIcon: ({focused}) => {
      let icon;
      if (route.name === 'Home') {
        icon = focused
        ? require('./src/assets/home_active.png')
        : require('./src/assets/home.png')
      } else if (route.name === 'Profile') {
        icon = focused
        ? require('./src/assets/profile_active.png')
        : require('./src/assets/profile.png')
      } else if (route.name === 'Favorites') {
        icon = focused
        ? require('./src/assets/bookmark_active.png')
        : require('./src/assets/bookmark.png')
      }

      return <Image style={{width: 24, height: 24}} source={icon} />;
    },
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {borderTopColor: '#DADADA'},
   })}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Favorites" component={Favorites} />
    <Tab.Screen name="Profile" component={Profile} />

   </Tab.Navigator>
);

const App = () => {
  const isSingedIn = true;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSingedIn ? (
          <>
           <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}} />
          </>
        ) : (
          <>
           <Stack.Screen 
           name="Splash" 
           component={Splash} 
           options={{headerShown: false}}/>
           <Stack.Screen 
           name="SignIn" 
           component={SignIn} 
           options={{headerShown: false}} />
           <Stack.Screen 
           name="SignUp" 
           component={SignUp} 
           options={{headerShown: false}} />

          </>
        )}
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;