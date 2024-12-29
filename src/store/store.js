import { configureStore } from "@reduxjs/toolkit";
import { usersService } from "../service/usersService.js";
import { employeeService } from "../service/employeeService.js";
import { scheduleService } from "../service/scheduleService.js";

export const store = configureStore({
    reducer: {
        [usersService.reducerPath]: usersService.reducer,
        [employeeService.reducerPath]: employeeService.reducer,
        [scheduleService.reducerPath]: scheduleService.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            usersService.middleware,
            employeeService.middleware,
            scheduleService.middleware
        ),
});
