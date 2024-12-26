import  { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
    Box,
    Typography,
    TextField,
    Button,
    Paper,
    Grid,
} from "@mui/material";
import CalendarComponent from "./Calendar";

const CalendarPage = () => {
    const [schedules, setSchedules] = useState([]);
    const [newSchedule, setNewSchedule] = useState({
        title: "",
        candidate: "",
        jobOffer: "",
        googleMeet: "",
        date: null,
        startTime: null,
        endTime: null,
    });

    const handleAddSchedule = () => {
        const { title, candidate, jobOffer, googleMeet, date, startTime, endTime } = newSchedule;

        if (!title || !candidate || !jobOffer || !googleMeet || !date || !startTime || !endTime) {
            alert("Please fill out all fields.");
            return;
        }

        const start = new Date(date);
        const end = new Date(date);

        start.setHours(startTime.getHours(), startTime.getMinutes());
        end.setHours(endTime.getHours(), endTime.getMinutes());

        if (start >= end) {
            alert("Start time must be before end time.");
            return;
        }

        const isOverlapping = schedules.some(
            (schedule) =>
                (start >= schedule.start && start < schedule.end) ||
                (end > schedule.start && end <= schedule.end) ||
                (start <= schedule.start && end >= schedule.end)
        );

        if (isOverlapping) {
            alert("The schedule overlaps with another schedule. Please choose a different time.");
            return;
        }

        setSchedules([...schedules, { ...newSchedule, start, end }]);
        setNewSchedule({
            title: "",
            candidate: "",
            jobOffer: "",
            googleMeet: "",
            date: null,
            startTime: null,
            endTime: null,
        });
    };

    return (
        <Box sx={{ padding: 3, backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
            <Typography variant="h4" align="center" sx={{ mb: 4, fontWeight: "bold" }}>
                Calendar
            </Typography>
            <Grid container spacing={2}>
                {/* Form thêm lịch trình */}
                <Grid item xs={12} md={4}>
                    <Paper elevation={3} sx={{ padding: 3 }}>
                        <Typography variant="h6" sx={{ mb: 2 }}>
                            Add Schedule
                        </Typography>
                        {/* Candidate Name */}
                        <TextField
                            fullWidth
                            placeholder="Candidate Name"
                            value={newSchedule.candidate}
                            onChange={(e) => setNewSchedule({ ...newSchedule, candidate: e.target.value })}
                            sx={{ mb: 2 }}
                        />
                        {/* Job Offer */}
                        <TextField
                            fullWidth
                            placeholder="Job Offer"
                            value={newSchedule.jobOffer}
                            onChange={(e) => setNewSchedule({ ...newSchedule, jobOffer: e.target.value })}
                            sx={{ mb: 2 }}
                        />
                        {/* Google Meet Link */}
                        <TextField
                            fullWidth
                            placeholder="Google Meet Link"
                            value={newSchedule.googleMeet}
                            onChange={(e) => setNewSchedule({ ...newSchedule, googleMeet: e.target.value })}
                            sx={{ mb: 2 }}
                        />
                        {/* Schedule Title */}
                        <TextField
                            fullWidth
                            placeholder="Schedule Title"
                            value={newSchedule.title}
                            onChange={(e) => setNewSchedule({ ...newSchedule, title: e.target.value })}
                            sx={{ mb: 2 }}
                        />
                        {/* Date */}
                        <Typography>Date</Typography>
                        <DatePicker
                            selected={newSchedule.date}
                            onChange={(date) => setNewSchedule({ ...newSchedule, date })}
                            placeholderText="Select a date"
                            dateFormat="dd/MM/yyyy"
                            className="react-datepicker__input-container"
                            style={{ marginBottom: "10px" }}
                        />
                        {/* Start Time */}
                        <Typography>Start Time</Typography>
                        <DatePicker
                            selected={newSchedule.startTime}
                            onChange={(time) => setNewSchedule({ ...newSchedule, startTime: time })}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={15}
                            timeCaption="Start Time"
                            dateFormat="h:mm aa"
                            placeholderText="Select start time"
                            style={{ marginBottom: "10px" }}
                        />
                        {/* End Time */}
                        <Typography>End Time</Typography>
                        <DatePicker
                            selected={newSchedule.endTime}
                            onChange={(time) => setNewSchedule({ ...newSchedule, endTime: time })}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={15}
                            timeCaption="End Time"
                            dateFormat="h:mm aa"
                            placeholderText="Select end time"
                            style={{ marginBottom: "10px" }}
                        />
                        {/* Add Button */}
                        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleAddSchedule}>
                            Add Schedule
                        </Button>
                    </Paper>
                </Grid>

                {/* Lịch */}
                <Grid item xs={12} md={8}>
                    <CalendarComponent schedules={schedules} onSelectEvent={(event) => alert(JSON.stringify(event, null, 2))} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default CalendarPage;
