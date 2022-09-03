import React, {useState} from "react";
import TableDaysHeader from "../TableDaysHeader/TableDaysHeader";
import CalendarHeader from "../Header/CalendarHeader";
import {generateDates} from "./helpers/generateDates";
import './Calendar.css';
import SlotsCreator from "../SlotsCreator/SlotsCreator";
import Popup from "../../UI Components/PopUp";
import MeetingCreator from "../MeetingCreator/MeetingCreator";
import {getAllMeetings} from "../../localStorage/storage";
import {AllMeetings} from "../../localStorage/types";

const Calendar = () => {
    const [date, setDate] = useState(new Date());
    const [days, setDays] = useState(generateDates(date));
    const [meetings, setMeetings] = useState<AllMeetings>(getAllMeetings());
    const [isOpen, setIsOpen] = useState(false);

    const toggleAddMeetingPopUp = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div>
                <button onClick={() => {
                    toggleAddMeetingPopUp();
                }}>add meeting</button>
                <CalendarHeader date={date} setDate={setDate} setDays={setDays}/>
                <TableDaysHeader/>
                <SlotsCreator days={days}
                              meetings={meetings}
                />
            </div>
            <div>
                {isOpen && <Popup
                    content={<MeetingCreator setMeetings={setMeetings}/>}
                    handleClose={toggleAddMeetingPopUp}/>}
            </div>
        </div>
    )
}

export default Calendar;
