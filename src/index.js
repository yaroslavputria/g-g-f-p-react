import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import ReactTutorial from './ReactTutorial';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <ReactTutorial />,
  document.getElementById('secondRoot')
);

