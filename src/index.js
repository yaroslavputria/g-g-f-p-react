import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import ReactTutorial from './ReactTutorial';
import {Test1} from './Test1';
import {RefComp} from './RefComp';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <ReactTutorial />,
  document.getElementById('secondRoot')
);

ReactDOM.render(
  <Test1 />,
  document.getElementById('test1')
);

ReactDOM.render(
  <RefComp />,
  document.getElementById('test2')
);