import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import {RefComp} from './RefComp';

beforeAll(() => {
  console.error = error => {
    throw new Error(error);
  };
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RefComp />, div);
});
