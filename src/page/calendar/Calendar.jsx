import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
import { Paper } from "@mui/material";

const locales = {
    "en-US": enUS,
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const CalendarComponent = ({ schedules, onSelectEvent }) => {
    return (
        <Paper elevation={3} sx={{ padding: 2 }}>
            <Calendar
                localizer={localizer}
                events={schedules}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                onSelectEvent={onSelectEvent}
            />
        </Paper>
    );
};

export default CalendarComponent;
