import {MeetingProps} from "../propsTypes";
import React, {useState} from "react";
import './Meeting.css'
import Popup from "../../UI Components/PopUp";

const Meetings = (props: MeetingProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [time, setTime] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');

    const toggleMeetingPopUp = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className="meeting">
                {
                    props.meetings?.map((meeting) => {
                        return (
                            <div key={crypto.randomUUID()} onClick={() => {
                                setTitle(meeting.title);
                                setDate(meeting.date);
                                setDescription(meeting.description);
                                setTime(meeting.time);
                                toggleMeetingPopUp();
                            }}>
                                <div>
                                    {meeting.title}
                                </div>
                            </div>
                        )
                    })}
            </div>
            <div>
                {isOpen && <Popup
                    content={
                        <div>
                            <div>{title}</div>
                            <div>{date}</div>
                            <div>{time}</div>
                            <div>{description}</div>
                        </div>}
                    handleClose={toggleMeetingPopUp}/>}
            </div>
        </div>
    )
};

export default Meetings;

