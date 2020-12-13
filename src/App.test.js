import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer';


test('renders correctly when there are no expenses', () => {
  const tree = renderer.create( < App / > ).toJSON();
  expect(tree).toMatchSnapshot();
});
