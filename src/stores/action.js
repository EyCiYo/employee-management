import { ACTION_STATES } from "../utils/constants";

export const loadEmployeeList = (list) => {
    return {
        type: ACTION_STATES.LOAD_LIST,
        payload: list,
    };
};

export const addEmployee = (employee) => {
    return {
        type: ACTION_STATES.ADD_EMPLOYEE,
        payload: employee,
    };
};
