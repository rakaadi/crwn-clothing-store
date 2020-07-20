import { createStore } from "redux";
import { persistStore } from "redux-persist";
// import { applyMiddleware } from "redux";
// import logger from "redux-logger";

import rootReducer from "./rootReducer";

// const middlewares = [logger];

const store = createStore(
    rootReducer,
    // applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const persistor = persistStore(store);

export { store, persistor };