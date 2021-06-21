import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MainPage from 'components/MainPage/MainPage';
import { store } from 'redux/store';

ReactDOM.render(
  <Provider store={store}>
    <MainPage />
  </Provider>,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
);
