import React from 'react';
import {
  View,
  Text,
} from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          padding: 20,
          height: 70,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1,
          backgroundColor: 'blue',
        }}
      >
        <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>
          Test me please... {"\n"}I want to be test... {"\n"}please please ...{"\n"}
          Im gonna do everything for tests...{"\n"}Dont let me cry!!!!!!
          {"\n\n\n\n"}
          NOTE: folder coverage will be generated automatically
        </Text>
      </View>
    );
  }
}
