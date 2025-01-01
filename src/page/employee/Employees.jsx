import {FaFileDownload, FaRegTrashAlt} from "react-icons/fa";
import {IoMdAddCircle, IoMdHome, IoMdSettings} from "react-icons/io";
import {RiErrorWarningFill} from "react-icons/ri";
import {MdMoreVert} from "react-icons/md";
import {NavLink} from "react-router-dom";
import { GrNext} from "react-icons/gr";
import Table from "../../ui/Table.jsx";
import Pagination from "../../ui/Pagination.jsx";
import {useState} from "react";
import useDebounce from "../../hook/useDebounce.jsx";
import { employees} from "../../data/data.js";
import {useGetEmployeesQuery, usePrefetch} from "../../service/employeeService.js";


function Employees() {

    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(10);

    const debouncedSearchTerm = useDebounce(search, 500);

    const prefetchSearch = usePrefetch("getEmployees")
    // const {data, isLoading, error} = useSearchAndPaginationQuery({search,page,size},{
    //     skip: !debouncedSearchTerm
    // });
    const {data, isLoading, error} = useGetEmployeesQuery({search:debouncedSearchTerm,page,size});
    console.log(data)
    const handleChangeSearch = (e)=>{
        setSearch(e.target.value);
        setPage(1);
    }

    //handle pagination
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

    const handleChangeSize = (e)=>{
        setSize(+e.target.value);
    }
    return (
        <>
            <div className="block items-center justify-between border-b border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:flex">
                <div className="mb-1 w-full">
                    <div className="mb-4">
                        <nav aria-label="Breadcrumb" className="mb-4">
                            <ol className="flex items-center">
                                <li className="group flex items-center">

                                    <NavLink to={"/"} className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                                             data-testid="flowbite-breadcrumb-item" href="#">
                                        <div className="flex items-center gap-x-3">
                                            <IoMdHome className="text-xl" />
                                            <span className="dark:text-white m-2">Home</span>
                                        </div>
                                    </NavLink>
                                </li>
                                <li className="group flex items-center">
                                    <GrNext />
                                    <NavLink to={"/employees"} className="flex items-center text-sm m-2 font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                                             data-testid="flowbite-breadcrumb-item" href="/employees">
                                        Employees
                                    </NavLink>
                                </li>

                            </ol>
                        </nav>
                        <h1 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                            All employees
                        </h1>
                    </div>
                    <div className="sm:flex">
                        {/*search*/}
                        <div
                            className="mb-3 hidden items-center dark:divide-gray-700 sm:mb-0 sm:flex sm:divide-x sm:divide-gray-100">
                            <form className="lg:pr-3"><label
                                className="text-sm font-medium text-gray-900 dark:text-gray-300 sr-only"
                                htmlFor="users-search">Search</label>
                                <div className="relative mt-1 lg:w-64 xl:w-96">
                                    <div className="flex">
                                        <div className="relative w-full">
                                            <input className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                                                   id="users-search" name="users-search" placeholder="Search for users"
                                                   onChange={handleChangeSearch}/>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="mt-3 flex space-x-1 pl-0 sm:mt-0 sm:pl-2 items-center">
                                <NavLink to={"#"}
                                         className="inline-flex cursor-pointer justify-center text-xl rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ">
                                    <IoMdSettings/> </NavLink>
                                <NavLink to={"#"}
                                         className="inline-flex cursor-pointer justify-center text-xl rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ">
                                    <FaRegTrashAlt/></NavLink>
                                <NavLink to={"#"}
                                         className="inline-flex cursor-pointer justify-center text-xl rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ">
                                    <RiErrorWarningFill/></NavLink>
                                <NavLink to={"#"}
                                         className="inline-flex cursor-pointer justify-center text-xl rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white "><MdMoreVert/></NavLink>
                                <select id="page-size" onChange={handleChangeSize}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="5">5</option>
                                    <option value="10" selected>10</option>
                                    <option value="20" >20</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                </select>
                            </div>
                        </div>
                        {/*button*/}
                        <div className="ml-auto flex items-center space-x-2 sm:space-x-3">
                            <NavLink to={"/employees/add"}
                                     className="text-white bg-blue-900 hover:bg-blue-700 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 focus:!ring-2 p-0 font-medium rounded-lg"
                                     type="button">
                                    <span className="flex items-center rounded-md text-sm px-3 py-2">
                                        <div className="flex items-center gap-x-3">
                                            <IoMdAddCircle/>
                                            Add employee
                                        </div>
                                    </span>
                            </NavLink>
                            <button
                                className="text-gray-900 bg-white border border-blue-900 hover:bg-gray-100 hover:text-blue-900 disabled:hover:bg-white focus:ring-blue-900 focus:text-blue-900 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-2 dark:disabled:hover:bg-gray-800 focus:!ring-2 p-0 font-medium rounded-lg"
                                type="button">
                                    <span className="flex items-center rounded-md text-sm px-3 py-2">
                                        <div className="flex items-center gap-x-3">
                                            <FaFileDownload/>
                                            <span>Export</span>
                                        </div>
                                    </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/*table*/}
            {/*<Table data={data?.content} isLoading={isLoading} error={error?.error}></Table>*/}
            <Table data={employees} />
            <Pagination totalPage={data?.page.totalPages}
                        totalElement = {data?.page.totalElements}
                        size = {size}
                        page = {data?.page.number}

                        handleNextPage = {handleNextPage}
                        handlePreviousPage = {handlePreviousPage}
                        handleNextPrefetch = {handleNextPrefetch}
                        handlePreviousPrefetch = {handlePreviousPrefetch}
            ></Pagination>
        </>

    );
}

export default Employees;