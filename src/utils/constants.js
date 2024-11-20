export const Roles = [
    {
        label: "Choose Role",
        value: "",
    },
    {
        label: "UI Engineer",
        value: "UI",
    },
    {
        label: "Developer",
        value: "Developer",
    },
    {
        label: "Testing",
        value: "Tester",
    },
    {
        label: "UX Engineer",
        value: "UX",
    },
    {
        label: "HR - Executive",
        value: "HR",
    },
];

export const Departments = [
    {
        label: "Choose department",
        value: 0,
    },
    {
        label: "Human Resources",
        value: 1,
    },
    {
        label: "Development",
        value: 2,
    },
    {
        label: "Design",
        value: 3,
    },
    {
        label: "Quality Assurance",
        value: 4,
    },
    {
        label: "Research & Development",
        value: 5,
    },
];

export const Status = [
    {
        label: "Default",
        value: "",
    },
    {
        label: "Probation",
        value: "probation",
    },
    {
        label: "Inactive",
        value: "inactive",
    },
    {
        label: "Active",
        value: "active",
    },
];

export const TestUser = [
    {
        name: "Alexander Ouseph",
        createdAt: "28.10.2024",
        experience: "1 Yrs",
        department: "HR",
        role: "HR",
        status: "active",
        address: { line1: "Alex House", pincode: "680684" },
    },
];

export const ACTION_STATES = {
    LOAD_LIST: "LOAD_LIST",
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT",
    ADD_EMPLOYEE: "ADD_EMPLOYEE",
};
