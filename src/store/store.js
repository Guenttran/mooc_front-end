import {configureStore} from "@reduxjs/toolkit";
import {usersService} from "../service/usersService.js";
import {employeeService} from "../service/employeeService.js";

export const store = configureStore({
    reducer: {
        [usersService.reducerPath]: usersService.reducer,
        [employeeService.reducerPath]: employeeService.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(usersService.middleware, employeeService.middleware),
})