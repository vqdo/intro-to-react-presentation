import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import '@styles/index.scss';
console.log('app', App);
ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
