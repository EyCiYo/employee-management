import { createSlice } from "@reduxjs/toolkit";

const initialState = { employeeList: [] };
const initialAuthState = { isAuthenticated: false, user: null };
const initialCounter = { count: 0 };

const employeeSlice = createSlice({
    name: "employee",
    initialState: initialState,
    reducers: {
        loadEmployee: (state, action) => {
            state.employeeList = action.payload;
        },
        addEmployee: (state, action) => {
            state.employeeList.push(action.payload);
        },
    },
});

export const authSlice = createSlice({
    name: "auth",
    initialState: initialAuthState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        },
    },
});

export const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounter,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
    },
});

// export const { increment: incrementCounter } = counterSlice.actions;

export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
export const { loadEmployee, addEmployee } = employeeSlice.actions;
export const employeeReducer = employeeSlice.reducer;
