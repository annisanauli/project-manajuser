import React from 'react';
import ReactDOM from 'react-dom';
import App from "../App";
import '../index.js'

jest.mock('react-dom', ()=> ({render: jest.fn()}))


it('renders without crashing', () => {

  const div = document.createElement('div');
  ReactDOM.render(<App/>, div);
  global.document.getElementById = (id) => id ==='root' && div
  expect(ReactDOM.render).toHaveBeenCalledWith(<App />, div)
  expect(ReactDOM).toMatchSnapshot();
<<<<<<< HEAD
<<<<<<< HEAD
});

=======
});
>>>>>>> test
=======
});
>>>>>>> test
