/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image
} from 'react-native';


export default class App extends Component {
  render() {
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image style={{  width: 200, height: 200, borderWidth:2, borderRadius: 200}} source={require('./images/poenix-logo.jpg')} />
      </View>
    );
  }
};

