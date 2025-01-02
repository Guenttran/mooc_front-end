import {NavLink, useNavigate, useParams} from "react-router-dom";
import {IoMdHome} from "react-icons/io";
import {GrNext} from "react-icons/gr";
import {useEffect, useState} from "react";
import {
    useGetScheduleByIdQuery,
    useUpdateScheduleMutation,
} from "../../service/scheduleService";

function ScheduleUpdate() {

    const { scheduleId } = useParams();
    console.log(scheduleId);

    const navigate = useNavigate();

    const { data: schedule, isLoading, isError } = useGetScheduleByIdQuery(scheduleId);
    const [updateSchedule, { isLoading: isUpdating }] = useUpdateScheduleMutation();

    const [data, setData] = useState({
        scheduleTitle: "",
        candidateName: "",
        interviewer: "",
        date: "",
        startTime: "",
        endTime: "",
        location: "",
        job: "",
        description: "",
        result: "",
        status: "",
        meetingLink: "",
        recruiter: "",
    });

    useEffect(() => {
        if (schedule) {
            setData(schedule);
        }
    }, [schedule]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmitData = async (e) => {
        e.preventDefault();
        try {
            await updateSchedule({ id: scheduleId, ...data }).unwrap();
            alert("Schedule updated successfully!");
        } catch (error) {
            console.error("Failed to update schedule:", error);
            alert("Failed to update schedule. Please try again.");
        }
    };

    // const handleViewCalendar = () => {
    //     if (!data.candidateName) {
    //         alert("Candidate Name is required to view the calendar.");
    //         return;
    //     }
    //     navigate(`/calendar/${data.candidateName}`);
    // };

    const handleViewCalendar = () => {
        if (!scheduleId) {
            alert("Schedule ID is required to view the calendar.");
            return;
        }
        navigate(`/calendar/${scheduleId}`);
    };


    if (isLoading) {
        return <p>Loading schedule...</p>;
    }

    if (isError) {
        return <p>Failed to load schedule. Please try again later.</p>;
    }


    return (
        <div onSubmit={handleSubmitData}
            className="block items-center justify-between bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:flex">
            <div className="mb-1 w-full">
                <div className="mb-4">
                    <nav aria-label="Breadcrumb" className="mb-4">
                        <ol className="flex items-center">
                            <li className="group flex items-center">
                                <NavLink to={"/"}
                                         className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                                    <div className="flex items-center gap-x-3">
                                        <IoMdHome className="text-xl"/>
                                        <span className="dark:text-white m-2">Home</span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className="group flex items-center">
                                <GrNext/>
                                <NavLink to={"/schedule"}
                                         className="flex items-center text-sm m-2 font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                                    Schedules
                                </NavLink>
                            </li>
                            <li className="group flex items-center">
                                <GrNext/>
                                <span
                                    className="flex items-center m-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                    Add Schedule
                                </span>
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className="flex h-full flex-col justify-center gap-4 p-2">
                    <h3 className="mb-4 text-xl font-bold dark:text-white">Schedule Information</h3>

                    <form onSubmit={handleSubmitData}>
                        <div className="mb-6 grid grid-cols-3 grid-rows-5 gap-3 md:grid-cols-3">
                            <div>
                                <label className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                       htmlFor="scheduleTitle">Schedule Title</label>
                                <input type="text" name="scheduleTitle"
                                       className="block w-full border bg-gray-50 border-gray-300 text-gray-900 rounded-lg p-2.5 text-sm"
                                       placeholder="Interview for Developer"
                                       value={data.scheduleTitle}
                                       onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                       htmlFor="candidateName">Candidate Name</label>
                                <input type="text" name="candidateName"
                                       className="block w-full border bg-gray-50 border-gray-300 text-gray-900 rounded-lg p-2.5 text-sm"
                                       placeholder="John Doe"
                                       value={data.candidateName}
                                       onChange={handleInputChange}

                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                       htmlFor="interviewer">Interviewer</label>
                                <input type="text" name="interviewer"
                                       className="block w-full border bg-gray-50 border-gray-300 text-gray-900 rounded-lg p-2.5 text-sm"
                                       placeholder="Jane Smith"
                                       value={data.interviewer}
                                       onChange={handleInputChange}

                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                       htmlFor="recruiter">Recruiter</label>
                                <input type="text" name="recruiter"
                                       className="block w-full border bg-gray-50 border-gray-300 text-gray-900 rounded-lg p-2.5 text-sm"
                                       placeholder="Recruiter Name"
                                       value={data.recruiter}
                                       onChange={handleInputChange}

                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                       htmlFor="date">Date</label>
                                <input type="date" name="date"
                                       className="block w-full border bg-gray-50 border-gray-300 text-gray-900 rounded-lg p-2.5 text-sm"
                                       value={data.date}
                                       onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                       htmlFor="startTime">Start Time</label>
                                <input type="time" name="startTime"
                                       className="block w-full border bg-gray-50 border-gray-300 text-gray-900 rounded-lg p-2.5 text-sm"
                                       value={data.startTime}
                                       onChange={handleInputChange}

                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                       htmlFor="endTime">End Time</label>
                                <input type="time" name="endTime"
                                       className="block w-full border bg-gray-50 border-gray-300 text-gray-900 rounded-lg p-2.5 text-sm"
                                       value={data.endTime}
                                       onChange={handleInputChange}

                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                       htmlFor="description">Description</label>
                                <textarea name="description"
                                          className="block w-full border bg-gray-50 border-gray-300 text-gray-900 rounded-lg p-2.5 text-sm"
                                          placeholder="Interview details..."
                                          value={data.description}
                                          onChange={handleInputChange}

                                ></textarea>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                       htmlFor="location">Location</label>
                                <input type="text" name="location"
                                       className="block w-full border bg-gray-50 border-gray-300 text-gray-900 rounded-lg p-2.5 text-sm"
                                       placeholder="Online or Office"
                                       value={data.location}
                                       onChange={handleInputChange}

                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                       htmlFor="meetingLink">Meeting Link</label>
                                <input type="url" name="meetingLink"
                                       className="block w-full border bg-gray-50 border-gray-300 text-gray-900 rounded-lg p-2.5 text-sm"
                                       placeholder="https://meeting.link"
                                       value={data.meetingLink}
                                       onChange={handleInputChange}

                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                       htmlFor="result">Result</label>
                                <input type="text" name="result"
                                       className="block w-full border bg-gray-50 border-gray-300 text-gray-900 rounded-lg p-2.5 text-sm"
                                       placeholder="Pass/Fail"
                                       value={data.result}
                                       onChange={handleInputChange}

                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                       htmlFor="status">Status</label>
                                <input type="text" name="status"
                                       className="block w-full border bg-gray-50 border-gray-300 text-gray-900 rounded-lg p-2.5 text-sm"
                                       placeholder="Scheduled/Completed"
                                       value={data.status}
                                       onChange={handleInputChange}

                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                       htmlFor="job">Job</label>
                                <input type="text" name="job"
                                       className="block w-full border bg-gray-50 border-gray-300 text-gray-900 rounded-lg p-2.5 text-sm"
                                       placeholder="Job Title"
                                       value={data.job}
                                       onChange={handleInputChange}

                                />
                            </div>
                        </div>
                        <button
                            className="text-white bg-blue-700 pl-4 pr-4 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 p-2 rounded-lg"
                            type="submit"
                            disabled={isUpdating}>
                            {isUpdating ? "Updating..." : "Update"}
                        </button>

                        <button
                            type="button"
                            className="ml-4 text-white bg-green-500 pl-4 pr-4 hover:bg-green-600 focus:ring-4 focus:ring-green-300 p-2 rounded-lg"
                            onClick={handleViewCalendar}
                        >
                            View Calendar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ScheduleUpdate;
