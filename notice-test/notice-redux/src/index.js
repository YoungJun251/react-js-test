import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import createSagaMiddleware from 'redux-saga';
import rootReducer, {rootSaga} from './module/rootReducer';
import { configureStore } from '@reduxjs/toolkit';

// saga middleware 생성
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({ reducer: rootReducer, middleware: [sagaMiddleware]})

// saga 실행
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);