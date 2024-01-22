import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import { stylesSplash } from './src/screens/auth/Splash/styles';
import Splash from './src/screens/auth/Splash';
const ViewBoxesWithColorAndText = () => {
  return (
   <SafeAreaView>
    <Splash></Splash>
   </SafeAreaView>
  );
};

export default ViewBoxesWithColorAndText;