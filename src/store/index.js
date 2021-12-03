import { createStore, combineReducers, applyMiddleware } from "redux";
import reduceCounter from "./modules/counter/reducer";
import thunk from "redux-thunk";
const reducers = combineReducers({ number: reduceCounter });

const store = createStore(reducers, applyMiddleware(thunk));
export default store;
