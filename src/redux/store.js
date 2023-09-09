import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers/index";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root10",
    storage: storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
    const middlewares = [thunkMiddleware];
    const enhancers = compose(applyMiddleware(...middlewares));
    const store = createStore(persistedReducer, {}, enhancers);
    let persistor = persistStore(store);
    return { store, persistor };
};

export default configureStore;
