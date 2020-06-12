import React from 'react';
import App from '../App';
import { create } from 'react-test-renderer'
//import { render } from '@testing-library/react';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
describe('My first snapshot test',()=>{
  test('testing project-dasboard', () => {
  let tree = create(<App />)
  expect(tree.toJSON()).toMatchSnapshot();
})
})
