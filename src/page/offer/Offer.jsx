import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { GrNext } from "react-icons/gr";
import TableOffer from "../../ui/TableOffer.jsx";
import Pagination from "../../ui/Pagination.jsx";
import { useGetOffersQuery } from "../../service/scheduleService";

function Offer() {
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(5);

    const { data, error, isLoading } = useGetOffersQuery({ search, page, size });

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
        setPage(0); // Reset về trang đầu tiên khi tìm kiếm
    };

    const handleNextPage = (totalPage) => {
        setPage(page < totalPage ? page + 1 : page);
    };

    const handlePreviousPage = () => {
        setPage(page > 0 ? page - 1 : 0);
    };

    return (
        <>
            {/* Header */}
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
                                        to="/offer"
                                        className="ml-2 flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                                    >
                                        Offer
                                    </NavLink>
                                </li>
                            </ol>
                        </nav>
                        <h1 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                            Pass Candidates
                        </h1>
                    </div>

                    {/* Search */}
                    <div className="sm:flex">
                        <div className="hidden items-center sm:flex">
                            <form className="lg:pr-3">
                                <div className="relative mt-1 lg:w-64 xl:w-96">
                                    <input
                                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                        id="offer-search"
                                        placeholder="Search for candidates"
                                        value={search}
                                        onChange={handleSearchChange}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="mt-6">
                {isLoading ? (
                    <div>Loading...</div>
                ) : error ? (
                    <div>Error fetching candidates.</div>
                ) : (
                    <TableOffer data={data?.content || []} />
                )}
            </div>

            {/* Pagination */}
            <Pagination
                totalPage={data?.totalPages}
                totalElement={data?.totalElements}
                size={data?.size}
                page={data?.number}
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
            />
        </>
    );
}

export default Offer;
