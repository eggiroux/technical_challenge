import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import { watchFetchFeed } from "./sagas/tweets-request-saga";
import reducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  storeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchFetchFeed);
