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

const mockText = " Test me please... \nI want to be test... \nplease please ...\nIm gonna do everything for tests...\n Dont let me cry!!!!!! \n\n\n\nNOTE: folder coverage will be generated automatically!"

export default class MakeTests extends Component {
  render() {
    return (
      <MyComponent text={mockText} />
    );
  }
}

AppRegistry.registerComponent('MakeTests', () => MakeTests);
