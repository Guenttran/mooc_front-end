import { NavLink, useParams } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { GrNext } from "react-icons/gr";
import { useEffect, useState } from "react";
import { useGetScheduleByIdQuery } from "../../service/scheduleService";

function ScheduleDetail() {
    const { scheduleId } = useParams();

    // Hook để lấy thông tin Schedule theo ID
    const { data: schedule, isLoading, isError } = useGetScheduleByIdQuery(scheduleId);

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

    if (isLoading) {
        return <p>Loading schedule...</p>;
    }

    if (isError) {
        return <p>Failed to load schedule. Please try again later.</p>;
    }

    return (
        <div className="block items-center justify-between bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:flex">
            <div className="mb-1 w-full">
                <div className="mb-4">
                    <nav aria-label="Breadcrumb" className="mb-4">
                        <ol className="flex items-center">
                            <li className="group flex items-center">
                                <NavLink to={"/"}
                                         className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                                    <div className="flex items-center gap-x-3">
                                        <IoMdHome className="text-xl" />
                                        <span className="dark:text-white m-2">Home</span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className="group flex items-center">
                                <GrNext />
                                <NavLink to={"/schedule"}
                                         className="flex items-center text-sm m-2 font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                                    Schedules
                                </NavLink>
                            </li>
                            <li className="group flex items-center">
                                <GrNext />
                                <span
                                    className="flex items-center m-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                    Schedule Detail
                                </span>
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className="flex h-full flex-col justify-center gap-4 p-2">
                    <h3 className="mb-4 text-xl font-bold dark:text-white">Schedule Information</h3>

                    <div className="mb-6 grid grid-cols-3 grid-rows-5 gap-3 md:grid-cols-3">
                        <div>
                            <label className="text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="scheduleTitle">Schedule Title</label>
                            <input type="text" name="scheduleTitle" className="block w-full border bg-gray-50 border-gray-300 text-gray-900 rounded-lg p-2.5 text-sm" value={data.scheduleTitle} readOnly />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="candidateName">Candidate Name</label>
                            <input type="text" name="candidateName" className="block w-full border bg-gray-50 border-gray-300 text-gray-900 rounded-lg p-2.5 text-sm" value={data.candidateName} readOnly />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="interviewer">Interviewer</label>
                            <input type="text" name="interviewer" className="block w-full border bg-gray-50 border-gray-300 text-gray-900 rounded-lg p-2.5 text-sm" value={data.interviewer} readOnly />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="recruiter">Recruiter</label>
                            <input type="text" name="recruiter" className="block w-full border bg-gray-50 border-gray-300 text-gray-900 rounded-lg p-2.5 text-sm" value={data.recruiter} readOnly />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="date">Date</label>
                            <input type="date" name="date" className="block w-full border bg-gray-50 border-gray-300 text-gray-900 rounded-lg p-2.5 text-sm" value={data.date} readOnly />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="startTime">Start Time</label>
                            <input type="time" name="startTime" className="block w-full border bg-gray-50 border-gray-300 text-gray-900 rounded-lg p-2.5 text-sm" value={data.startTime} readOnly />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="endTime">End Time</label>
                            <input type="time" name="endTime" className="block w-full border bg-gray-50 border-gray-300 text-gray-900 rounded-lg p-2.5 text-sm" value={data.endTime} readOnly />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="description">Description</label>
                            <textarea name="description" className="block w-full border bg-gray-50 border-gray-300 text-gray-900 rounded-lg p-2.5 text-sm" value={data.description} readOnly />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="location">Location</label>
                            <input type="text" name="location" className="block w-full border bg-gray-50 border-gray-300 text-gray-900 rounded-lg p-2.5 text-sm" value={data.location} readOnly />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="meetingLink">Meeting Link</label>
                            <input type="url" name="meetingLink" className="block w-full border bg-gray-50 border-gray-300 text-gray-900 rounded-lg p-2.5 text-sm" value={data.meetingLink} readOnly />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="result">Result</label>
                            <input type="text" name="result" className="block w-full border bg-gray-50 border-gray-300 text-gray-900 rounded-lg p-2.5 text-sm" value={data.result} readOnly />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="status">Status</label>
                            <input type="text" name="status" className="block w-full border bg-gray-50 border-gray-300 text-gray-900 rounded-lg p-2.5 text-sm" value={data.status} readOnly />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="job">Job</label>
                            <input type="text" name="job" className="block w-full border bg-gray-50 border-gray-300 text-gray-900 rounded-lg p-2.5 text-sm" value={data.job} readOnly />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScheduleDetail;
