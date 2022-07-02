import React from 'react';
import { SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

const Ez2 = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView cacheEnabled={false} source={{uri: 'https://crytobot.com'}} />
    </SafeAreaView>
  );
};

export default Ez2;
