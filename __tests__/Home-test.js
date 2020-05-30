import 'react-native';
import React from 'react';
import Home from '../src/components/Home';

// Note: test renderer must be required after react-native.
import renderer, {render} from 'react-test-renderer';

test('Home snapshot', () => {
  const snapshot = renderer.create(<Home />).toJSON();

  expect(snapshot).toMatchSnapshot();
});

test('unit test', () => {
  const result = render(<Home />);
  console.log("###############################################33")
  console.log(result);
});
