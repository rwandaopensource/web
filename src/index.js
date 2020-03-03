/**
 * all files are served under ./src directory
 * scss files should be in scss folder
 * redux, actions, and dispatchers should be in redux folder
 * pages i.e components that are rendered in <Route> should be in pages folder
 * reusable components like header and footer should be in components folder
 * axios requests and validations should be in helpers folder
 * images, json files, font-files should all be in assets folder
 * tests should be in the same folder as the components they are testing(unit testing) and should end with .test.js or .spec.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './pages';
import store from './redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

export default App;
