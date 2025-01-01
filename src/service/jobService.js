import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_URL} from "../utils/contant.js";

export const jobService = createApi({
    reducerPath: 'jobs',
    baseQuery: fetchBaseQuery({baseUrl:BASE_URL}),
    tagTypes:["jobs"],
    endpoints: (builder)=>({
        addJob : builder.mutation({
            query: (formData) => ({
                url:"/api/jobs",
                method:"POST",
                body:formData,
            }),
            invalidatesTags:['jobs']
        })
    })
})
export const {
    useAddJobMutation
} = jobService;