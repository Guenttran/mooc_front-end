import Select from "react-select";
import {NavLink, useParams} from "react-router-dom";
import {useGetUserByIdQuery} from "../../service/usersService.js";
import {IoMdHome} from "react-icons/io";
import {GrNext} from "react-icons/gr";

function JobDetail() {
    const params = useParams()
    const {data, isLoading, error} = useGetUserByIdQuery(params.id);


    const formatDateForDisplay = (dateString) => {
        const date = new Date(dateString); // Chuyển chuỗi ngày thành đối tượng Date
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`; // Định dạng thành DD/MM/YYYY
    };

    const benefits = [
        { value: 'travel', label: 'Travel' },
        { value: 'lunch', label: 'Lunch' },
        { value: '25-day-leave', label: '25-Day Leave' },
        { value: 'healthcare-insurance', label: 'Healthcare Insurance' },
        { value: 'hybrid-working', label: 'Hybrid Working' },
    ];

    const skills = [
        { value: 'java', label: 'Java' },
        { value: 'nodejs', label: 'Node.js' },
        { value: '.net', label: '.NET' },
        { value: 'C++', label: 'C++' },
        { value: 'business-analysis', label: 'Business Analysis' },
        { value: 'communication', label: 'Communication' },
    ];

    const levels = [
        { value: 'fresher', label: 'Fresher' },
        { value: 'junior', label: 'Junior' },
        { value: 'senior', label: 'Senior' },
        { value: 'leader', label: 'Leader' },
        { value: 'manager', label: 'Manager' },
        { value: 'vice-head', label: 'Vice Head' },
    ];

    //Fake data
    const job = {
        title: "Interview Junior Business Analyst",
        skills: skills.filter(skill => ["C++"].includes(skill.value)),
        startdate: "02/02/2025",
        enddate: "02/02/2027",
        salaryrangefrom: "0",
        salaryrangeto: "90",
        benefits: benefits.filter(benefit => ["travel", "lunch"].includes(benefit.value)),
        workingaddress: "Hanoi",
        level: levels.filter(level => ["fresher"].includes(level.value)),
        status: "draft",
        description:"abcxyz",
    };

    return (
        <div className="block items-center justify-between bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:flex">
            <div className="mb-1 w-full">
                <div className="mb-4">
                    <nav aria-label="Breadcrumb" className="mb-4">
                        <ol className="flex items-center">
                            <li className="group flex items-center">

                                <NavLink to={"/"}
                                         className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                                         data-testid="flowbite-breadcrumb-item" href="#">
                                    <div className="flex items-center gap-x-3">
                                        <IoMdHome className="text-xl"/>
                                        <span className="dark:text-white m-2">Home</span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className="group flex items-center">
                                <GrNext/>
                                <NavLink to={"/jobs"}
                                         className="flex items-center text-sm m-2 font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                                         data-testid="flowbite-breadcrumb-item">
                                    jobs
                                </NavLink>
                            </li>
                            <li className="group flex items-center">
                                <GrNext/>
                                <span
                                    className="flex items-center m-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                                    data-testid="flowbite-breadcrumb-item ">
                                            job's detail
                                        </span>
                            </li>
                        </ol>
                    </nav>
                </div>
                <h3 className="mb-4 text-xl font-bold dark:text-white">General Information</h3>
                <form>
                    <div className="mb-6 grid grid-cols-2 gap-4">
                        {/* Job Title */}
                        <div>
                            <label htmlFor="job-title" className="text-sm font-medium text-gray-900 dark:text-gray-300">
                                Job Title
                            </label>
                            <input
                                type="text"
                                className=" w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                                id="job-title"
                                placeholder="Type a title..."
                                readOnly // Make input uneditable
                                value={job.title}
                            />
                        </div>

                        {/* Skills */}
                        <div>
                            <label htmlFor="skills" className="text-sm font-medium text-gray-900 dark:text-gray-300">
                                Skills
                            </label>
                            <Select
                                isMulti
                                options={skills}
                                className=" w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                                isDisabled // Disable the react-select component
                                defaultValue={job.skills}
                            />
                        </div>

                        {/* Start Date */}
                        <div>
                            <label htmlFor="start-date"
                                   className="text-sm font-medium text-gray-900 dark:text-gray-300">
                                Start Date
                            </label>
                            <input
                                type="text"
                                className=" w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                                id="dateInput"
                                readOnly // Make input uneditable
                                value={formatDateForDisplay(job.startdate)}
                            />
                        </div>

                        {/* End Date */}
                        <div>
                            <label htmlFor="end-date" className="text-sm font-medium text-gray-900 dark:text-gray-300">
                                End Date
                            </label>
                            <input
                                type="text"
                                className=" w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                                id="dateInput"
                                readOnly // Make input uneditable
                                value={formatDateForDisplay(job.enddate)}
                            />
                        </div>

                        {/* Salary Range */}
                        <div>
                            <label htmlFor="salary-range"
                                   className="text-sm font-medium text-gray-900 dark:text-gray-300">
                                Salary Range
                            </label>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    className=" w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                                    id="salary-range-start"
                                    placeholder="From"
                                    readOnly // Make input uneditable
                                    value={job.salaryrangefrom}
                                />
                                <input
                                    type="text"
                                    className=" w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                                    placeholder="To"
                                    readOnly // Make input uneditable
                                    value={job.salaryrangeto}
                                />
                            </div>
                        </div>

                        {/* Benefits */}
                        <div>
                            <label htmlFor="benefits" className="text-sm font-medium text-gray-900 dark:text-gray-300">
                                Benefits
                            </label>
                            <Select
                                isMulti
                                options={benefits}
                                className=" w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                                isDisabled // Disable the react-select component
                                value={job.benefits}
                            />
                        </div>

                        {/* Working Address */}
                        <div>
                            <label
                                htmlFor="working-address"
                                className="text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Working Address
                            </label>
                            <input
                                type="text"
                                className=" w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                                id="working-address"
                                placeholder="Type an address..."
                                readOnly // Make input uneditable
                                value={job.workingaddress}
                            />
                        </div>

                        {/* Level */}
                        <div>
                            <label htmlFor="level" className="text-sm font-medium text-gray-900 dark:text-gray-300">
                                Level
                            </label>
                            <Select
                                isMulti
                                options={levels}
                                className=" w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                                isDisabled // Disable the react-select component
                                defaultValue={job.level}
                            />
                        </div>

                        {/* status */}
                        <div>
                            <label className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                   htmlFor="status">status <input
                                className=" w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                                readOnly
                                value={job.status}
                            /></label>
                            <div className="flex mt-2">
                                <div className="relative w-full">

                                </div>
                            </div>
                        </div>


                        {/* Description */}
                        <div>
                            <label htmlFor="description"
                                   className="text-sm font-medium text-gray-900 dark:text-gray-300">
                                Description
                            </label>
                            <textarea
                                className="block w-full border bg-gray-50 rounded-lg p-2.5 text-sm"
                                id="description"
                                placeholder="Description..."
                                readOnly // Make textarea uneditable
                                value={job.description}
                            ></textarea>
                        </div>
                    </div>

                    <button style={{marginLeft: "30.3%"}}
                            className=" text-white bg-blue-700 pl-4 pr-4 border border-transparent hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600 focus:!ring-2 p-0 font-medium rounded-lg"
                    >
                        <a href="/jobs" className="flex items-center rounded-md text-sm px-3 py-2">back</a>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default JobDetail;
