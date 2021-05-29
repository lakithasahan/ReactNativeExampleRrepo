import React, { Component } from 'react';
import { WebView } from 'react-native-webview';


class MyWeb extends Component {
  render() {
    return (
      <WebView
        source={{ uri: 'https://www.robinwieruch.de/react-state-array-add-update-remove' }}
        style={{  width: 200,
        height: 200,
        resizeMode: 'stretch'}}
      />
    );
  }
}
export default MyWeb
