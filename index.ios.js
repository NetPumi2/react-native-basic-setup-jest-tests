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
  View
} from 'react-native';
import MyComponent from './src/app/my-component';

export default class MakeTests extends Component {
  render() {
    return (
      <MyComponent />
    );
  }
}

AppRegistry.registerComponent('MakeTests', () => MakeTests);
