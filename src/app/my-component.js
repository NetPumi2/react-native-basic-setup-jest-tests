import React, { PropTypes } from 'react';

import {
  View,
  Text,
} from 'react-native';

export default class MyComponents extends React.Component {
  static propTypes = {
    text: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {
      text,
    } = this.props;
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
          {text}
        </Text>
      </View>
    );
  }
}
