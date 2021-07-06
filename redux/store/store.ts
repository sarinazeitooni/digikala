import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import btnValueReducer from "../reducers/Reducers";

const store = createStore(btnValueReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
export default store;