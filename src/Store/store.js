import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import { watchFetchFeed } from "./Sagas/tweets-request-saga";
import reducer from "./Reducers";

const sagaMiddleware = createSagaMiddleware();
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  storeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchFetchFeed);
