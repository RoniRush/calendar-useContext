import React, {useState} from "react";
import './MeetingCreator.css';
import {MeetingCreatorProps} from "../propsTypes";
import {addMeeting, getAllMeetings} from "../../localStorage/meetingActions";

let title: string, time: string, description: string, date: Date;

const MeetingCreator = (props: MeetingCreatorProps) => {
    const [hideAlert, setHideAlert] = useState(true);
    return (
        <div className="meetingCreator">
            <div>
                <label className="dateLabel">Date </label>
                <input className="dateInput"
                    type="date"
                    onChange={(newVal) => date = new Date(newVal.target.value)}
                />
            </div>
            <div className="titleItem">
                <label className="titleLabel">Title </label>
                <input className="titleInput"
                    type="text"
                    onChange={(newVal) => title = newVal.target.value}
                />
            </div>
            <div className="time-range-picker">
                <label className="timeLabel">Time</label>
                <input className="timeInput"
                    type="time"
                    onChange={(newVal) => time = newVal.target.value}
                />
            </div>
            <div className="descriptionItem">
                <label className="descriptionLabel">Description </label>
                <textarea className="descriptionInput"
                    onChange={(newVal) => description = newVal.target.value}
                />
            </div>
            <div className="submitDiv">
                <div hidden={hideAlert} style={{color: "red"}}> 5 meetings at most are allowed</div>
                <button className="submitButton" onClick={() => {
                    handleSaveButtonCLicked(props, date, title, time, description, setHideAlert)
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

const isNumberOfMeetingsValid = (date: Date): boolean => {
    const allMeetings = getAllMeetings();
    const stringDate = date.toLocaleDateString();
    return allMeetings[stringDate]?.length < 5 || allMeetings[stringDate] === undefined;
}

export default MeetingCreator;