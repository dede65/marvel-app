import 'react-native';
import React from 'react';
import Details from '../src/components/Details';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('Details snapshot', () => {
  const snapshot = renderer.create(<Details />).toJSON();

  expect(snapshot).toMatchSnapshot();
});
