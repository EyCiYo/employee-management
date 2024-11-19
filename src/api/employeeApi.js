import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const employeeApi = createApi({
    reducerPath: "employeeApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000",
    }),
    endpoints: () => {},
});
