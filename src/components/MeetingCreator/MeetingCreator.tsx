import React from "react";
import './MeetingCreator.css';
import {MeetingCreatorProps} from "../propsTypes";
import {addMeeting, getAllMeetings} from "../../localStorage/storage";

const MeetingCreator = (props: MeetingCreatorProps) => {
    let title: string, time: string, description: string, date: Date;
    return (
        <form>
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
            <footer>
                <button onClick={() => {
                    if (isNumberOfMeetingsValid(date)) {
                        props.setMeetings(addMeeting(title, date, time, description))
                    }
                }}>Save
                </button>
            </footer>
        </form>
    )
};

const isNumberOfMeetingsValid = (date: Date) : boolean => {
    const allMeetings = getAllMeetings();
    const stringDate = date.toLocaleDateString();
    return allMeetings[stringDate]?.length < 5 || allMeetings[stringDate] === undefined;
}

export default MeetingCreator;