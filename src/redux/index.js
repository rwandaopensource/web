import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Reducers from './reducers';

const middleware = [thunk];

const isDevelopment = process.env.NODE_ENV === 'development';
const extension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(
  Reducers,
  isDevelopment && extension
    ? compose(applyMiddleware(...middleware), extension)
    : compose(applyMiddleware(...middleware)),
);
