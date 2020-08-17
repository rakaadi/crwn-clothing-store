import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const sagasMiddleware = createSagaMiddleware();
const middlewares = [sagasMiddleware];

if (process.env.NODE_ENV === "development") middlewares.push(logger);

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

sagasMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };