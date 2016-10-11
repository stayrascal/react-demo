import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import routes from './routes';
import { SENTRY_UEL } from './config';


// if you use React Router, make this component render <Router> with your routes.
// Currently, only synchronous routes are hot reloaded, and you will see a warining
// from <Router> on every reload. You can ignore this warning.
// https://github.com/reactjs/react-router/issues/2182

window.Raven && Raven.config(SENTRY_URL).install();

const Root = ({
  store,
  history
}) => {
  let ComponentEL = (
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>
  );

  if (process.env.NODE_ENV !== 'production') {
    const DevTools = require('./DevTools').default;

    ComponentEL = (
      <Provider store={store}>
        <div>
          <Router history={history} routes={routes} />
          {!window.devToolsExtension ? <DevTools /> : null}
        </div>
      </Provider>
    )
  }
  return ComponentEL;
};

Root.PropTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
}

export default Root;
