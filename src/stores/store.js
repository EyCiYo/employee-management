import { configureStore } from "@reduxjs/toolkit";
import { employeeReducer, authReducer } from "./reducer";
// import rootReducer from "./reducer";
import logger from "redux-logger";
import { employeeApi } from "../api/employeeApi";

const store = configureStore({
    reducer: {
        employee: employeeReducer,
        auth: authReducer,
        [employeeApi.reducerPath]: employeeApi.reducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger, employeeApi.middleware),
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
});
console.log(store.getState());

export default store;
