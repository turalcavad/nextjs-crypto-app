import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducers, { fetchCryptos } from "./crypto";
import { configureStore } from "@reduxjs/toolkit";

const reducer = combineReducers({
	reducers,
});

const store = configureStore(
	{ reducer: reducer },
	applyMiddleware(thunk, logger)
);

store.dispatch(fetchCryptos());

export default store;
