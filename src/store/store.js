import logger from 'redux-logger';
import { configureStore, applyMiddleware, compose } from '@reduxjs/toolkit';

import { rootReducer } from './root-reducer';

const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = configureStore({reducer: rootReducer, undefined, composedEnhancers});

