import { configureStore } from "@reduxjs/toolkit";
import { employeeReducer, authReducer } from "./reducer";
// import rootReducer from "./reducer";
import logger from "redux-logger";

const store = configureStore({
    reducer: {
        employee: employeeReducer,
        auth: authReducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
console.log(store.getState());

export default store;
