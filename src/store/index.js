import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducer/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// redux dev tool will not show in production mood 
// const composeEnhancers =
//   (process.env.NODE_ENV === "development" &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
