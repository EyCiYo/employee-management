export const Roles = [
    {
        label: "Choose Role",
        value: "",
    },
    {
        label: "UI Engineer",
        value: "FE",
    },
    {
        label: "Full Stack",
        value: "BE",
    },
    {
        label: "Testing",
        value: "QA",
    },
    {
        label: "DevOps",
        value: "DO",
    },
    {
        label: "HR - Executive",
        value: "HR",
    },
];

export const Departments = [
    {
        label: "Choose department",
        value: "",
    },
    {
        label: "Human Resources",
        value: "HR",
    },
    {
        label: "Development",
        value: "DEV",
    },
    {
        label: "Design",
        value: "UI",
    },
    {
        label: "Quality Assurance",
        value: "QA",
    },
    {
        label: "Research & Development",
        value: "RD",
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
