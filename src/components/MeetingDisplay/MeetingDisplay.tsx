import React from "react";
import './MeetingDisplay.css'
import {MeetingDisplayProps} from "../propsTypes";

const MeetingDisplay = (props: MeetingDisplayProps) => {
    return (
        <div className="meetingPopup">
            <div>
                <label className="labelTitle">Title:</label>
                <div className="content">{props.title}</div>
            </div>
            <div>
                <label className="labelDate">Date:</label>
                <div className="content">{props.date}</div>
            </div>
            <div>
                <label className="labelTime">Time:</label>
                <div className="content">{props.time}</div>
            </div>
            <div>
                <label className="labelDescription">Description:</label>
                <div className="content">{props.description}</div>
            </div>
        </div>
    )
}

export default MeetingDisplay