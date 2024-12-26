import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMdAddCircle, IoMdHome } from "react-icons/io";
import { GrNext } from "react-icons/gr";
import useDebounce from "../../hook/useDebounce.jsx";
import TableSchedule from "../../ui/TableSchedule.jsx";
import Pagination from "../../ui/Pagination.jsx";

function Schedule() {
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(5);

    const debouncedSearchTerm = useDebounce(search, 500);

    // Fake dữ liệu thay vì API
    const mockData = {
        content: [
            {
                id: 1,
                title: "Interview Senior Backend Developer",
                candidateName: "Nguyễn Anh Đức",
                interviewer: "Nguyễn Khắc Hoàn",
                schedule: "22/02/2022 09:00 - 10:30",
                result: "N/A",
                status: "New",
                job: "Dev Ov",
            },
            {
                id: 2,
                title: "Interview Junior Mobile Developer",
                candidateName: "Trần Văn Bình",
                interviewer: "Phạm Ngọc Thành",
                schedule: "23/02/2022 14:00 - 15:30",
                result: "Pending",
                status: "Ongoing",
                job: "Dev Mob",
            },
        ],
        totalPages: 5,
        totalElements: 25,
        size: 5,
        number: page,
    };

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
        setPage(1);
    };

    const handleNextPage = (totalPages) => {
        if (page < totalPages) setPage(page + 1);
    };

    const handlePreviousPage = () => {
        if (page > 1) setPage(page - 1);
    };

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
                <TableSchedule data={mockData.content} isLoading={false} error={false} />
            </div>

            <Pagination
                totalPage={mockData.totalPages}
                totalElement={mockData.totalElements}
                size={mockData.size}
                page={mockData.number}
                handleNextPage={() => handleNextPage(mockData.totalPages)}
                handlePreviousPage={handlePreviousPage}
            />
        </>
    );
}

export default Schedule;
