import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import { Text, View } from 'react-native';

import uexpect from '../../../tests/uexpect';

import MyComponenReadyForTests from '../my-component';

const testData = "TESTmock data";

describe('MyComponent test', () => {

  describe('show text from props', () => {
    it('for text={text} there should be text inside Text', () => {
      const renderer = ReactTestUtils.createRenderer();
      renderer.render(
        <MyComponenReadyForTests text={testData}/>,
      );

      uexpect(
        renderer,
        'to contain with all children',
        <View>
          <Text>{testData}</Text>
        </View>,
      );
    });

    it('for undefine text= there should be no text inside Text', () => {
      const renderer = ReactTestUtils.createRenderer();
      renderer.render(
        <MyComponenReadyForTests />,
      );

      uexpect(
        renderer,
        'to contain with all children',
        <Text />,
      );
    });
  });

});
