import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

const productMode = (env) => {
  if (env !== 'production') {
    return createStore(
      reducers,
      compose(
        applyMiddleware(thunk),
        window.devToolsExtension && window.devToolsExtension(),
      ),
    );
  }

  return createStore(
    reducers,
    compose(applyMiddleware(thunk)),
  );
};

export default productMode(process.env.NODE_ENV);
