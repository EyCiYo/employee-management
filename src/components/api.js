import { apiWithTags } from "../api/employeeApi";

const getAllEmployeesApi = apiWithTags.injectEndpoints({
    endpoints: (builder) => ({
        getAllEmployees: builder.query({
            query: () => "/",
            providesTags: ["EMPLOYEE_LIST"],
        }),
    }),
});

const getEmployeeByIdApi = apiWithTags.injectEndpoints({
    endpoints: (builder) => ({
        getEmployeeById: builder.query({
            query: (id) => `/${id}`,
        }),
    }),
});

export const { useGetAllEmployeesQuery } = getAllEmployeesApi;

export const { useGetEmployeeByIdQuery } = getEmployeeByIdApi;
