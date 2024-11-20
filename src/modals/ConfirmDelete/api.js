import { apiWithTags } from "../../api/employeeApi";

const deleteEmployeeApi = apiWithTags.injectEndpoints({
    endpoints: (builder) => ({
        deleteEmployee: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["EMPLOYEE_LIST"],
        }),
    }),
});

export const { useDeleteEmployeeMutation } = deleteEmployeeApi;
