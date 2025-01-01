import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_URL} from "../utils/contant.js";
import {size} from "lodash";

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
        }),
        getEmployees: builder.query({
            // query: ({search='', page=1, size=20})=>({
                query: () => ({
                url:`/api/employees`,
                // params:{search,page,size},
                method:'GET',
            }),
            providesTags:['employees']
            // transformResponse: (response)=>({
            //     data: response.content
            // })
        }),
        updateEmployees: builder.mutation({
            query:({id, ...user})=>( {
                url: `/api/employees/${id}`,
                method: "PUT",
                body: JSON.stringify(user),
            }),
            invalidatesTags: (result, error, {id}) =>[{type:"user", id}],
        }),
        deleteEmployees: builder.mutation({
            query: (id)=>( {
                url: `api/employees/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['user']
        })
    })
})
export const {
    useAddEmployeeMutation,
    useGetEmployeesQuery,
    usePrefetch,
} = employeeService;