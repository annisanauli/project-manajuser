import React from 'react';
import App from '../App';
import { create } from 'react-test-renderer';

describe('App',()=>{
  test('testing project-dasboard', () => {
  let tree = create(<App />);
  expect(tree.toJSON()).toMatchSnapshot();
})
})
