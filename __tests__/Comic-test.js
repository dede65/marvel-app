import 'react-native';
import React from 'react';
import Comic from '../src/components/Comic';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('Comic snapshot', () => {
  const snapshot = renderer.create(<Comic />).toJSON();

  expect(snapshot).toMatchSnapshot();
});
