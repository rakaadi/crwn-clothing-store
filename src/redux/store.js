import { createStore } from "redux";
// import { applyMiddleware } from "redux";
// import logger from "redux-logger";

import rootReducer from "./rootReducer";

// const middlewares = [logger];

const store = createStore(
    rootReducer,
    // applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;