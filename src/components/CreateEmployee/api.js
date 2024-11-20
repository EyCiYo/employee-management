import { apiWithTags } from "../../api/employeeApi";
const createEmployeeApi = apiWithTags.injectEndpoints({
    endpoints: (builder) => ({
        createEmployee: builder.mutation({
            query: (body) => ({
                url: "/",
                method: "POST",
                body,
            }),
            invalidatesTags: ["EMPLOYEE_LIST"],
        }),
    }),
});
export const { useCreateEmployeeMutation } = createEmployeeApi;
