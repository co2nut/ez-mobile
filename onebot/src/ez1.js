import React from 'react';
import { SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

const Ez1 = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView cacheEnabled={false} source={{uri: 'https://asiaezsight.com'}} />
    </SafeAreaView>
  );
};

export default Ez1;
