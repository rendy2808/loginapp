/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import NavigationExperimental from 'react-native-deprecated-custom-components';

import Login from './app/components/Login';

export default class logintut extends Component {
  render() {
    return (
      //Build the navigation router
      <NavigationExperimental.Navigator initialRoute = {{id: 'Login'}}
      renderScene = {this.navigatorRenderScene}/>
      
    );
  }

  navigatorRenderScene(route,navigator){
    _navigator = navigator;
    switch(route.id){
      case 'Login' :
      return(<Login navigator = {navigator}/>);
    }
  }
}



AppRegistry.registerComponent('logintut', () => logintut);
