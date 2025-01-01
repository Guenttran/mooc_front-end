import {NavLink} from "react-router-dom";
import {IoIosWarning, IoMdHome} from "react-icons/io";
import {GrNext} from "react-icons/gr";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {validateJob} from "../../utils/validation.js";
import {useAddJobMutation} from "../../service/jobService.js";
import Select from "react-select";


function JobAdd() {
    const {register,
        handleSubmit,
        getValues,
        formState:{ errors, isValid, isDirty}} =
        useForm({
            resolver: yupResolver(validateJob),
        });

    const [addJob] = useAddJobMutation();

    const handleSubmitData = (data)=>{
        const formData = new FormData();
        Object.keys(data).forEach((key) => {
            formData.append(key, data[key]);
        });
        console.log(formData);
        if(isValid){
            addJob(formData);
        }
    }

    const benefits = [
        { value: 'travel', label: 'travel' },
        { value: 'lunch', label: 'lunch' },
        { value: '25-day-leave', label: '25-day leave' },
        { value: 'healthcare-insurance', label: 'Healthcare insurance' },
        { value: 'hybrid-working', label: 'Hybrid working' }
    ]

    const skills = [
        { value: 'java', label: 'Java' },
        { value: 'nodejs', label: 'nodejs' },
        { value: '.net', label: '.net' },
        { value: 'C++', label: 'C++' },
        { value: 'business-analysis', label: 'Business analysis' },
        { value: 'communication', label: 'Communication' },
    ]

    const level = [
        { value: 'fresher', label: 'Fresher' },
        { value: 'junior', label: 'Junior' },
        { value: 'senior', label: 'Senior' },
        { value: 'leader', label: 'Leader' },
        { value: 'manager', label: 'Manager' },
        { value: 'vice-head', label: 'Vice Head' },
    ]


    return (
        <div
            className="block items-center justify-between bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:flex">
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
                                <NavLink to={"/candidates"}
                                         className="flex items-center text-sm m-2 font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                                         data-testid="flowbite-breadcrumb-item">
                                    Candidates
                                </NavLink>
                            </li>
                            <li className="group flex items-center">
                                <GrNext/>
                                <span
                                    className="flex items-center m-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                                    data-testid="flowbite-breadcrumb-item ">
                                            Add candidate
                                        </span>
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className="flex h-full flex-col justify-center gap-4 p-2"><h3
                    className="mb-4 text-xl font-bold dark:text-white">General Information</h3>
                    <form onSubmit={handleSubmit(handleSubmitData)}>
                        <div className="mb-6 grid grid-cols-5 grid-rows-5 gap-2 md:grid-cols-2">
                            <div>
                                <label className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                       htmlFor="job-title">Job Title <span
                                    className="text-red-500">*</span></label>
                                <div className="flex mt-2">
                                    <div className="relative w-full">
                                        <input type="text" {...register("title")}
                                               className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                                               id="job-title" placeholder="type a tilte..."/>

                                    </div>
                                </div>
                                <p className="text-red-500">{errors?.title?.message}</p>
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                       htmlFor="Skills">Skills <span
                                    className="text-red-500">*</span></label>
                                <Select {...register("skills")}
                                        isMulti
                                        name="Skills"
                                        options={skills}
                                        className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                                        classNamePrefix="select"
                                />
                                <p className="text-red-500 pt-2 pb-2">{errors?.skills?.message}</p>
                            </div>

                            <div>
                                <label
                                    className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                    htmlFor="start-date"
                                >
                                    Start Date <span className="text-red-500">*</span>
                                </label>
                                <div className="flex mt-2">
                                    <input type="date"{...register("startdate")}
                                           className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                                           id="start-date"
                                           placeholder="DD/MM/YYYY"
                                    />
                                </div>
                                <p className="text-red-500">{errors.startdate?.message}</p>
                            </div>

                            <div>
                                <label
                                    className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                    htmlFor="end-date"
                                >
                                    End Date <span className="text-red-500">*</span>
                                </label>
                                <div className="flex mt-2">
                                    <input type="date"{...register("enddate")}
                                           className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                                           id="end-date"
                                        placeholder="DD/MM/YYYY"
                                    />
                                </div>
                                <p className="text-red-500">{errors.enddate?.message}</p>
                            </div>
                            <div>
                                <label
                                    className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                    htmlFor="salary-range">Salary Range<span className="text-red-500">*</span></label>
                                <div className="flex mt-2">
                                    <input type="text"
                                           className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                                           id="salary-range-start" name="salary-range-start" placeholder="From"/>
                                    <input type="text"  {...register("salaryrangeto")}
                                           className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                                           id="salary-range" name="salary-range" placeholder="To"/>
                                </div>
                                <p className="text-red-500">{errors?.salaryrangeto?.message}</p>
                            </div>


                            <div>
                                <label className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                       htmlFor="Benefits">Benefits <span
                                    className="text-red-500">*</span></label>
                                <Select {...register("benefits")}
                                        isMulti
                                        name="Benefits"
                                        options={benefits}
                                        className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                                        classNamePrefix="select"
                                />
                                <p className="text-red-500 pt-2 pb-2">{errors?.benefits?.message}</p>
                            </div>

                            <div>
                                <label
                                    className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                    htmlFor="working-address">Working Address</label>
                                <div className="flex mt-2">
                                    <div className="relative w-full">
                                        <input type="text"
                                               className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                                               id="working-address" name="working-address"
                                               placeholder="type an address"/>

                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                       htmlFor="level">Level <span
                                    className="text-red-500">*</span></label>
                                <Select {...register("level")}
                                        isMulti
                                        name="Benefits"
                                        options={level}
                                        className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                                        classNamePrefix="select"
                                />
                                <p className="text-red-500 pt-2 pb-2">{errors?.level?.message}</p>
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                       htmlFor="status">status <span
                                    className=" w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"> draft </span></label>
                                <div className="flex mt-2">
                                    <div className="relative w-full">
                                    </div>
                                </div>
                            </div>

                            <div><label
                                className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                htmlFor="description">Description</label>
                                <div className="flex mt-2">
                                    <div className="relative w-full">
                                        <textarea type="text"
                                                  className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                                                  id="description" name="description" placeholder="description"
                                                  required=""></textarea>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <button style={{marginLeft: "30.3%"}}
                                className=" text-white bg-blue-700 pl-4 pr-4 border border-transparent hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600 focus:!ring-2 p-0 font-medium rounded-lg"
                                type="submit">
                            <span className="flex items-center rounded-md text-sm px-3 py-2">Create</span>
                        </button>
                        <button style={{marginLeft: "30.3%"}}
                                className=" text-white bg-blue-700 pl-4 pr-4 border border-transparent hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600 focus:!ring-2 p-0 font-medium rounded-lg"
                                type="reset">
                            <a href="/jobs" className="flex items-center rounded-md text-sm px-3 py-2">Cancel</a>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default JobAdd;