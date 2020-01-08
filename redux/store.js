import React from 'react';

import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';

import rootReducer from './root-reducer';

import { Provider } from 'react-redux'

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

// export default store;

export default ({ element }) => (
    <Provider store={store}>
        {element}
    </Provider>
    );
