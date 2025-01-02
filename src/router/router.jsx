import {createBrowserRouter} from "react-router-dom";
import Products from "../page/product/Products.jsx";
import {lazy} from "react";

const LayoutLazy = lazy(() => import("../ui/Layout.jsx"));
const ErrorPageLazy = lazy(() => import("../page/error/ErrorPage.jsx"));
const DashboardLazy = lazy(() => import("../page/dashboard/Dashboard.jsx"));
const EmployeeDetailLazy = lazy(() => import("../page/employee/EmployeeDetail.jsx"));
const EmployeesLazy = lazy(() => import("../page/employee/Employees.jsx"));
const NotFoundLazy = lazy(() => import("../page/error/NotFound.jsx"));
const LoginLazy = lazy(() => import("../page/login/Login.jsx"));
const EmployeeAddLazy = lazy(() => import("../page/employee/EmployeeAdd.jsx"));
const JobsLazy = lazy(() => import("../page/job/Jobs.jsx"));
const JobsAddLazy = lazy(() => import("../page/job/JobAdd.jsx"));
const JobDetailLazy = lazy(() => import("../page/job/JobDetail.jsx"));
const JobEditLazy = lazy(() => import("../page/job/JobEdit.jsx"));
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
                path:"/employees",
                children:[
                    {
                        path:"",
                        element: <EmployeesLazy />
                    },
                    {
                        path:"/employees/:id",
                        element: <EmployeeDetailLazy/>
                    },
                    {
                        path:"/employees/add",
                        element: <EmployeeAddLazy/>
                    }
                ]
            },
            {
                path:"/products",
                children:[
                    {
                        path:"",
                        element: <Products/>
                    }
                ]
            },
            {
                path:"/jobs",
                children:[
                    {
                        path:"",
                        element: <JobsLazy/>
                    },
                    {
                        path:"/jobs/add",
                        element: <JobsAddLazy/>
                    },
                    {
                        path: "/jobs/view/:id",
                        element: <JobDetailLazy/>
                    },
                    {
                        path: "/jobs/edit/:id",
                        element: <JobEditLazy/>
                    },
                ]
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