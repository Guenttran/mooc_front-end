import {createBrowserRouter} from "react-router-dom";
import Products from "../page/product/Products.jsx";
import {lazy} from "react";
import ScheduleAdd from "../page/schedule/ScheduleAdd.jsx";

const LayoutLazy = lazy(() => import("../ui/Layout.jsx"));
const ErrorPageLazy = lazy(() => import("../page/error/ErrorPage.jsx"));
const DashboardLazy = lazy(() => import("../page/dashboard/Dashboard.jsx"));
const EmployeeDetailLazy = lazy(() => import("../page/employee/EmployeeDetail.jsx"));
const EmployeesLazy = lazy(() => import("../page/employee/Employees.jsx"));
const NotFoundLazy = lazy(() => import("../page/error/NotFound.jsx"));
const LoginLazy = lazy(() => import("../page/login/Login.jsx"));
const EmployeeAddLazy = lazy(() => import("../page/employee/EmployeeAdd.jsx"));
const ScheduleLazy = lazy(() => import("../page/schedule/Schedule.jsx"));
const ScheduleDetailLazy = lazy(() => import("../page/schedule/ScheduleDetail.jsx"));
const CalendarPageLazy = lazy(() => import("../page/calendar/CalendarPage.jsx"));
const ScheduleAddLazy = lazy(() => import("../page/schedule/ScheduleAdd.jsx"));


const router = createBrowserRouter([
    {
        path:"/",
        element: <LayoutLazy />,
        errorElement: <ErrorPageLazy />,
        children:[
            {
              path:"/",
              element: <DashboardLazy />,
            },
            {
                path:"/users",
                children:[
                    {
                        path:"",
                        element: <EmployeesLazy />
                    },
                    {
                        path:"/users/:id",
                        element: <EmployeeDetailLazy/>
                    },
                    {
                        path:"/users/add",
                        element: <EmployeeAddLazy/>
                    }
                ]
            },

            {
                path:"/schedule",
                children:[
                    {
                        path:"",
                        element: <ScheduleLazy />
                    },
                    {
                        path:"/schedule/add",
                        element: <ScheduleAddLazy></ScheduleAddLazy>
                    },
                    {
                        path:"/schedule/:id",
                        element: <ScheduleDetailLazy/>
                    }
                ]
            },

            {
                path:"/calendar",
                children:[
                    {
                        path:"",
                        element: <CalendarPageLazy />
                    },
                ]
            },


            {
                path:"/products",
                element: <Products/>
            },
        ]
    },
    {
        path:"/login",
        element:<LoginLazy />,
    },
    {
        path:"*",
        element: <NotFoundLazy />
    }
]);
export default router;