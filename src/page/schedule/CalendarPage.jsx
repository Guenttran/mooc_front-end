import {useState} from "react";
import Calendar from "./Calendar.jsx";
import EventForm from "./EventForm.jsx";

const CalendarPage = () => {
    const [events, setEvents] = useState([]);

    const handleAddEvent = (event) => {
        setEvents([...events, event]);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Calendar</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                    <EventForm onAddEvent={handleAddEvent} />
                </div>
                <div className="md:col-span-2">
                    <Calendar events={events} />
                </div>
            </div>
        </div>
    );
};

export default CalendarPage;