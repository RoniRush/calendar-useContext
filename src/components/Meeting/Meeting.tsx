import {MeetingProps} from "../propsTypes";
import React, {useState} from "react";
import './Meeting.css'
import Popup from "../../UI Components/PopUp";

const Meetings = (props: MeetingProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMeetingPopUp = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className="meeting">
                {
                    props.meetings?.map((meeting) => {
                    return (
                        <div key={crypto.randomUUID()} onClick={() => toggleMeetingPopUp()}>
                            <div>
                                {meeting.title}
                                {}
                            </div>
                            <div>
                                {isOpen && <Popup
                                    content={`${meeting.title}\n${meeting.date}\n${meeting.time}\n${meeting.description}\n`}
                                    handleClose={toggleMeetingPopUp}/>}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

    )
};

export default Meetings;
