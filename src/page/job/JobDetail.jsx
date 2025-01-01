import Select from "react-select";
import {useParams} from "react-router-dom";
import {useGetUserByIdQuery} from "../../service/usersService.js";

function JobDetail() {
    const params = useParams()
    const {data, isLoading, error} = useGetUserByIdQuery(params.id);

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

    return (
        <div className="block items-center justify-between bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:flex">
            <div className="mb-1 w-full">
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
                            />
                        </div>

                        {/* Start Date */}
                        <div>
                            <label htmlFor="start-date"
                                   className="text-sm font-medium text-gray-900 dark:text-gray-300">
                                Start Date
                            </label>
                            <input
                                type="date"
                                className=" w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                                id="start-date"
                                readOnly // Make input uneditable
                            />
                        </div>

                        {/* End Date */}
                        <div>
                            <label htmlFor="end-date" className="text-sm font-medium text-gray-900 dark:text-gray-300">
                                End Date
                            </label>
                            <input
                                type="date"
                                className=" w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                                id="end-date"
                                readOnly // Make input uneditable
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
                                />
                                <input
                                    type="text"
                                    className=" w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                                    placeholder="To"
                                    readOnly // Make input uneditable
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
                            />
                        </div>

                        {/* status */}
                        <div>
                            <label className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                   htmlFor="status">status <span
                                className=" w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"> draft </span></label>
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
