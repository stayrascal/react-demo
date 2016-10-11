import { createstore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import promiseMiddleare from 'redux-promise';
import createLogger from 'redux-logger';

import rootReducer from '../reducer';
import DevTools from '../DevTools';

// Entirly optional
// This tiny libary adds some functionality to your DevTools,
// by logging actions/state to your console. Used in conjunction
// with your standard DevTools monitors gives you great flexibility.

const logger = createLogger();

const middlewares = [promiseMiddleare, logger, require('redux-immutable-state-invariant')()];

// By default we try to read the key from ?debug_session=<key> in the address bar
const getDebugSessionKey = function (){
  const matches = window.location.href.match(/[?&debug_session=([^&]+)\b]/);
  return (matches && matches.length) ? matches[1] : null;
};

const enhancer = compose(
  applyMiddleware(...middlewares),
  window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument(),
  // Optional. Lets you write ?debug_session=<key> in address bar to persit debug sessions
  persistState(getDebugSessionKey())
)

export default function configureStore(initialState) {
  const store = createstore(rootReducer, initialState, enhancer);

  // Enable hot module replacement for reducers (requires Webpack or Browserify HMR to be enabled)
  if(module.hot) {
    module.hot.accept('../reducer', () => {
      const nextReducer = require('../reducer').default;
      store.replaveReducer(nextReducer);
    })
  }

  return store;
}
