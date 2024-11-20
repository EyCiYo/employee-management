import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const employeeApi = createApi({
    reducerPath: "employeeApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/employee",
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token");
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: () => ({}),
    // refetchOnMountOrArgChange: true,
    // refetchOnReconnect: true,
});

export const apiWithTags = employeeApi.enhanceEndpoints({
    addTagTypes: ["EMPLOYEE_LIST"],
});
