import { combineReducers } from "redux";
import block from "./block";

const appReducer = combineReducers({
    block: block,
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;
