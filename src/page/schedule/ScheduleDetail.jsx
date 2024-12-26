import { useParams, useNavigate } from "react-router-dom";

function ScheduleDetail() {
    const { id } = useParams(); // Lấy ID từ URL
    const navigate = useNavigate();

    //Fake data
    const schedule = {
        title: "Interview Junior Business Analyst",
        candidateName: "Nguyen Khac Hoan",
        scheduleTime: "22/02/2022",
        scheduleDuration: "From 09:30 am To 10:30 am",
        notes: "N/A",
        job: "Senior BA",
        interviewer: "ThuyF11, HoangH03, MaiK12",
        location: "Online",
        recruiterOwner: "HaiLM",
        meetingID: "meet.google.com/xyz-fky-123",
        result: "N/A",
        status: "Open",
    };

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4">Schedule Detail</h1>

                <div className="grid grid-cols-2 gap-4 text-gray-700">
                    <div>
                        <p className="font-semibold">Schedule title:</p>
                        <p>{schedule.title}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Job:</p>
                        <p>{schedule.job}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Candidate name:</p>
                        <p>{schedule.candidateName}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Interviewer:</p>
                        <p>{schedule.interviewer}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Schedule Time:</p>
                        <p>{schedule.scheduleTime}</p>
                        <p>{schedule.scheduleDuration}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Location:</p>
                        <p>{schedule.location}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Notes:</p>
                        <p>{schedule.notes}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Recruiter owner:</p>
                        <p>{schedule.recruiterOwner}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Meeting ID:</p>
                        <a
                            href={`https://${schedule.meetingID}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline"
                        >
                            {schedule.meetingID}
                        </a>
                    </div>
                    <div>
                        <p className="font-semibold">Result:</p>
                        <p>{schedule.result}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Status:</p>
                        <p>{schedule.status}</p>
                    </div>
                </div>

                <div className="mt-6 flex gap-4">
                    <button
                        onClick={() => alert("Submitting result...")}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                        Submit Result
                    </button>
                    <button
                        onClick={() => navigate("/schedule")}
                        className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ScheduleDetail;
