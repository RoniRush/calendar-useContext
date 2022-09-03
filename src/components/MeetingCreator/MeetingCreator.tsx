import React, {useState} from "react";
import './MeetingCreator.css';
import {MeetingCreatorProps} from "../propsTypes";
import {addMeeting, getAllMeetings} from "../../localStorage/storage";

let title: string, time: string, description: string, date: Date;

const MeetingCreator = (props: MeetingCreatorProps) => {
    const [hideAlert, setHideAlert] = useState(true);
    return (
        <div>
            <header>
                <input
                    type="date"
                    onChange={(newVal) => date = new Date(newVal.target.value)}
                />
            </header>
            <div className="formItem">
                <label>Title </label>
                <input
                    type="text"
                    onChange={(newVal) => title = newVal.target.value}
                />
            </div>
            <div className="time-range-picker">
                <div className="formItem">
                    <label>Time</label>
                    <input
                        type="time"
                        onChange={(newVal) => time = newVal.target.value}
                    />
                </div>
            </div>
            <div className="formItem">
                <label>Description </label>
                <textarea
                    onChange={(newVal) => description = newVal.target.value}
                />
            </div>
            <div>
                <button onClick={() => {
                    handleSaveButtonCLicked(props, date, title, time, description, setHideAlert)
                }}>Submit
                </button>
                <label hidden={hideAlert} style={{color: "red"}}> 5 meetings at most are allowed</label>
            </div>
        </div>
    )
};

const handleSaveButtonCLicked = (props: MeetingCreatorProps, date: Date, title: string, time: string, description: string, setHideAlert: any) => {
    if (isNumberOfMeetingsValid(date)) {
        props.setMeetings(addMeeting(title, date, time, description))
        props.togglePopUp();
    } else {
        setHideAlert(false);
    }
}

const isNumberOfMeetingsValid = (date: Date): boolean => {
    const allMeetings = getAllMeetings();
    const stringDate = date.toLocaleDateString();
    return allMeetings[stringDate]?.length < 5 || allMeetings[stringDate] === undefined;
}

export default MeetingCreator;