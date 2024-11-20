import { apiWithTags } from "../employeeApi";

const editEmployeeApi = apiWithTags.injectEndpoints({
    endpoints: (builder) => ({
        editEmployee: builder.mutation({
            query: (body) => ({
                url: `/${body.id}`,
                method: "PUT",
                body,
            }),
            invalidatesTags: ["EMPLOYEE_LIST"],
        }),
    }),
});

export const { useEditEmployeeMutation } = editEmployeeApi;
