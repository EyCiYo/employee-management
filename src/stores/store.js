import { configureStore } from "@reduxjs/toolkit";
// import employeeReducer from "./reducer";
import rootReducer from "./reducer";
import logger from "redux-logger";

const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
console.log(store.getState());

export default store;
