import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchMovie from './components/container/searchMovie';
import { Provider } from 'react-redux';
import { storeRedux } from './components/store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeRedux}>
      <SearchMovie />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


