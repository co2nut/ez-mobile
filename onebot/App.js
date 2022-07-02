import type { Node } from 'react';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Ez1 from './src/ez1';
import Ez2 from './src/ez2';
;

const App: () => Node = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    }, 1500);
  }, [])
  return (
    <Ez2 />
  );
};

const styles = StyleSheet.create({
});

export default App;
