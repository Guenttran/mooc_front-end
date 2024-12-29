import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../utils/contant.js";

export const scheduleService = createApi({
    reducerPath: 'schedule',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: ['schedule'],
    endpoints: (builder) => ({
        getSchedules: builder.query({
            query: ({ search = '', page = 1, size = 5 }) => ({
                url: "schedule",
                params: { search, page, size },
            }),
            providesTags: ['schedule'],
        }),
        getScheduleById: builder.query({
            query: (id) => `schedule/${id}`,
            providesTags: (result, error, id) => [{ type: "schedule", id }],
        }),
        addSchedule: builder.mutation({
            query: (schedule) => ({
                url: "schedule",
                method: "POST",
                body: schedule,
            }),
            invalidatesTags: ['schedule'],
        }),
        updateSchedule: builder.mutation({
            query: ({ id, ...schedule }) => ({
                url: `schedule/${id}`,
                method: "PUT",
                body: schedule,
            }),
            invalidatesTags: (result, error, { id }) => [{ type: "schedule", id }],
        }),
        deleteSchedule: builder.mutation({
            query: (id) => ({
                url: `schedule/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['schedule'],
        }),
        getAddFormData: builder.query({
            query: () => "schedule/form-data",
        }),
    }),
});

export const {
    useGetSchedulesQuery,
    useGetScheduleByIdQuery,
    useAddScheduleMutation,
    useUpdateScheduleMutation,
    useDeleteScheduleMutation,
    useGetAddFormDataQuery,
    usePrefetch,
} = scheduleService;
