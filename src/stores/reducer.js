import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { ACTION_STATES } from "../utils/constants";

const initialState = { employeeList: [] };
const initialAuthState = { isAuthenticated: false, user: null };
const initialCounter = { count: 0 };

const employeeReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(ACTION_STATES.LOAD_LIST, (state, action) => {
            state.employeeList = action.payload;
        })
        .addCase(ACTION_STATES.ADD_EMPLOYEE, (state, action) => {
            state.employeeList.push(action.payload);
        });
});

const authReducer = createReducer(initialAuthState, (builder) => {
    builder
        .addCase(ACTION_STATES.LOGIN, (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        })
        .addCase(ACTION_STATES.LOGOUT, (state, action) => {
            state.isAuthenticated = false;
            state.user = action.payload;
        });
});
export const counterReducer = createReducer(initialCounter, (builder) => {
    builder
        .addCase("INCREMENT", (state) => {
            state.count += 1;
        })
        .addCase("DECREMENT", (state) => {
            state.count -= 1;
        })
        .addCase("INCREMENT_BY", (state, action) => {
            state.count += action.payload;
        });
});
const rootReducer = combineReducers({
    employee: employeeReducer,
    auth: authReducer,
});

export default rootReducer;
