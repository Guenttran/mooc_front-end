import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_URL} from "../utils/contant.js";

export const employeeService = createApi({
    reducerPath: 'employees',
    baseQuery: fetchBaseQuery({baseUrl:BASE_URL}),
    tagTypes:["employees"],
    endpoints: (builder)=>({
        addEmployee : builder.mutation({
            query: (formData) => ({
                url:"/api/employees",
                method:"POST",
                body:formData,
            }),
            invalidatesTags:['employees']
        })
    })
})
export const {
    useAddEmployeeMutation
} = employeeService;