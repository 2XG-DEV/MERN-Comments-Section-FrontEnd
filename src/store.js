import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { commentListReducer } from "./reducers/commentReducers";

import { userReducer } from "./reducers/userReducer";

const middleware = [thunk];

const initialState = {};

const reducer = combineReducers({
  commentList: commentListReducer,
  user: userReducer,
});

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
