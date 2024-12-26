import {useState} from "react";

const EventForm = ({ onAddEvent }) => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && date) {
            onAddEvent({ title, start: date });
            setTitle('');
            setDate('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded-md">
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Event title</label>
                <input
                    type="text"
                    placeholder="Input event title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full border border-gray-300 rounded-md p-2"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Date/Time</label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full border border-gray-300 rounded-md p-2"
                    required
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
                Add Event
            </button>
        </form>
    );
};

export default EventForm;