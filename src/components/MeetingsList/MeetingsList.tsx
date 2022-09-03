import {MeetingProps} from "../propsTypes";
import React, {useState} from "react";
import './MeetingsList.css'
import Popup from "../../UI components/PopUp";
import MeetingDisplay from "../MeetingDisplay/MeetingDisplay";

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
            <div className="meetings">
                {
                    props.meetings?.map((meeting) => {
                        return (
                            <div className="meeting" key={crypto.randomUUID()} onClick={() => {
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
                        <MeetingDisplay title={title} date={date} description={description} time={time}/>}
                    handleClose={toggleMeetingPopUp}/>}
            </div>
        </div>
    )
};

export default Meetings;

