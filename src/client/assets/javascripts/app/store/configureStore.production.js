import { createstore, applyMiddleware, compose } from 'redux';
import promiseMiddleare form 'redux-promise';

import rootReducer from '../reducer';

const enhancer = compose(
  applyMiddleware(promiseMiddleare)
)(createstore);

export default function configureStore(initialState) {
  return enhancer(rootReducer, initialState);
}
