import React, { useEffect } from 'react';
import { WebView } from 'react-native-webview';
import { SafeAreaView, StyleSheet } from 'react-native'
import SplashScreen from 'react-native-splash-screen';;
import type { Node } from 'react';

const App: () => Node = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    }, 1500);
  }, [])
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView cacheEnabled={false} source={{ uri: 'https://asiaezsight.com' }} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
});

export default App;
