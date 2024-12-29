import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMdAddCircle, IoMdHome } from "react-icons/io";
import { GrNext } from "react-icons/gr";
import TableSchedule from "../../ui/TableSchedule.jsx";
import Pagination from "../../ui/Pagination.jsx";
import { useGetSchedulesQuery } from "../../service/scheduleService";
import {usePrefetch} from "../../service/scheduleService.js";

function Schedule() {
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(5);

    const prefetchSearch = usePrefetch("getSchedules")

    // Sử dụng RTK Query để fetch dữ liệu
    const { data, error, isLoading } = useGetSchedulesQuery({ search, page, size });

    console.log("Data:", data);
    console.log("Error:", error);
    console.log("Loading:", isLoading);

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
        setPage(1); // Reset lại page khi tìm kiếm
    };

    const handleNextPage = (totalPage)=>{
        setPage( page < totalPage ? page + 1 : page);
    }
    const handlePreviousPage = ()=>{
        setPage(page < 1 ? page : page - 1 );
    }
    const handleNextPrefetch= (totalPage)=>{
        prefetchSearch({search,page: page < totalPage ? page + 1 : page,size});
    }
    const handlePreviousPrefetch= ()=>{
        prefetchSearch({search,page: page < 1 ? page : page - 1,size});
    }
    return (
        <>
            <div className="block items-center justify-between border-b border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:flex">
                <div className="mb-1 w-full">
                    <div className="mb-4">
                        <nav aria-label="Breadcrumb" className="mb-4">
                            <ol className="flex items-center">
                                <li className="group flex items-center">
                                    <NavLink
                                        to="/"
                                        className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                                    >
                                        <IoMdHome className="text-xl" />
                                        <span className="dark:text-white ml-2">Home</span>
                                    </NavLink>
                                </li>
                                <li className="group flex items-center">
                                    <GrNext />
                                    <NavLink
                                        to="/schedule"
                                        className="ml-2 flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                                    >
                                        Schedule
                                    </NavLink>
                                </li>
                            </ol>
                        </nav>
                        <h1 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                            All Schedules
                        </h1>
                    </div>

                    {/* Search & Add Button */}
                    <div className="sm:flex">
                        <div className="hidden items-center sm:flex">
                            <form className="lg:pr-3">
                                <div className="relative mt-1 lg:w-64 xl:w-96">
                                    <input
                                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                        id="schedule-search"
                                        placeholder="Search for schedules"
                                        value={search}
                                        onChange={handleSearchChange}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="ml-auto flex items-center space-x-2 sm:space-x-3">
                            <NavLink
                                to="/schedule/add"
                                className="flex items-center gap-x-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:bg-blue-800 dark:hover:bg-blue-700"
                            >
                                <IoMdAddCircle className="text-lg" />
                                Add Schedule
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="mt-6">
                {isLoading ? (
                    <div>Loading...</div>
                ) : error ? (
                    <div>Error fetching schedules.</div>
                ) : (
                    <TableSchedule data={data?.content || []} isLoading={isLoading} error={!!error} />
                )}
            </div>

            <Pagination totalPage={data?.totalPages}
                        totalElement = {data?.totalElements}
                        size = {data?.size}
                        page = {data?.number}

                        handleNextPage = {handleNextPage}
                        handlePreviousPage = {handlePreviousPage}
                        handleNextPrefetch = {handleNextPrefetch}
                        handlePreviousPrefetch = {handlePreviousPrefetch}
            ></Pagination>

        </>
    );
}

export default Schedule;
