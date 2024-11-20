import { employeeApi } from "../../api/employeeApi";

const loginApi = employeeApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (body) => ({
                url: "/login",
                method: "POST",
                body,
            }),
        }),
    }),
});

export const { useLoginMutation } = loginApi;
