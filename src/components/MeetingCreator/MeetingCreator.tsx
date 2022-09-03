import React, {useState} from "react";
import './MeetingCreator.css';
import {MeetingCreatorProps} from "../propsTypes";
import {addMeeting} from "../../localStorage/meetingActions";
import {isNumberOfMeetingsValid} from "./validation";

const MeetingCreator = (props: MeetingCreatorProps) => {
    const [hideAlert, setHideAlert] = useState(true);
    const [date, setDate] = useState(new Date());
    const [title, setTitle] = useState('');
    const [time, setTime] = useState('');
    const [description, setDescription] = useState('');

    const resetValues = () => {
        setTitle('');
        setDescription('');
        setDate(new Date());
        setTitle('');
    }

    return (
        <div className="meetingCreator">
            <div>
                <label className="dateLabel">Date</label>
                <input className="dateInput"
                       type="date"
                       onChange={(newVal) => setDate(new Date(newVal.target.value))}
                       value={date.toISOString().substring(0, 10)}
                />
            </div>
            <div className="titleItem">
                <label className="titleLabel">Title </label>
                <input className="titleInput"
                       type="text"
                       onChange={(newVal) => setTitle(newVal.target.value)}
                       value={title}
                />
            </div>
            <div className="time-range-picker">
                <label className="timeLabel">Time</label>
                <input className="timeInput"
                       type="time"
                       onChange={(newVal) => setTime(newVal.target.value)}
                       value={time}
                />
            </div>
            <div className="descriptionItem">
                <label className="descriptionLabel">Description </label>
                <textarea className="descriptionInput"
                          onChange={(newVal) => setDescription(newVal.target.value)}
                          value={description}
                />
            </div>
            <div className="submitDiv">
                <div hidden={hideAlert} style={{color: "red"}}> 5 meetings at most are allowed</div>
                <button className="submitButton" onClick={() => {
                    handleSaveButtonCLicked(props, date, title, time, description, setHideAlert);
                    resetValues();
                }}>Submit
                </button>
            </div>
        </div>
    )
};

const handleSaveButtonCLicked = (props: MeetingCreatorProps, date: Date, title: string, time: string, description: string, setHideAlert: any) => {
    if (title && date && time && description) {
        if (isNumberOfMeetingsValid(date)) {
            props.setMeetings(addMeeting(title, date, time, description))
            props.togglePopUp();
        } else {
            setHideAlert(false);
        }
    }
}

export default MeetingCreator;