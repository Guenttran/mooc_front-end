import {NavLink, useRouteError} from "react-router-dom";
import errorAvt from "../../assets/500.svg"

function ErrorPage() {
    const error = useRouteError();
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-16"><img alt=""
                                                                                           src={errorAvt}
                                                                                           className="lg:max-w-md"/><h1
            className="mb-3 w-4/5 text-center text-2xl font-bold dark:text-white md:text-5xl">Something has gone
            seriously wrong</h1>
            <p className="mb-6 w-4/5 text-center text-lg text-red-500 dark:text-gray-300">
                {error.message}
            </p>

            <p className="mb-6 w-4/5 text-center text-lg text-gray-500 dark:text-gray-300">
                It's always time for a coffee break. We should be back by the time you finish your coffee.</p>
            <NavLink to={"/"}
                className="text-white bg-blue-700 border border-transparent hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600 focus:!ring-2 p-0 font-medium rounded-lg"
                ><span className="flex items-center rounded-md text-sm px-3 py-2"><div
                className="mr-1 flex items-center gap-x-2"><svg stroke="currentColor" fill="currentColor"
                                                                viewBox="0 0 20 20" className="text-xl" height="1em"
                                                                width="1em" xmlns="http://www.w3.org/2000/svg"><path

                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            ></path></svg> Go back home</div></span></NavLink>
        </div>
    );
}

export default ErrorPage;