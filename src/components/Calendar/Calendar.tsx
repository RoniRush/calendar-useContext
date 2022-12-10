import React, {useState} from "react";
import TableDaysHeader from "../TableDaysHeader/TableDaysHeader";
import CalendarHeader from "../Header/CalendarHeader";
import './Calendar.css';
import SlotsCreator from "../SlotsCreator/SlotsCreator";
import Popup from "../../UI components/PopUp";
import MeetingCreator from "../MeetingCreator/MeetingCreator";
import {DateProvider} from "../../Context/DateContext";
import {DaysProvider} from "../../Context/DaysContext";
import {MeetingsProvider} from "../../Context/MeetingsContext";

const Calendar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAddMeetingPopUp = () => {
        setIsOpen(!isOpen);
    };

    return (
        <DateProvider>
            <DaysProvider>
                <MeetingsProvider>
                    <div className="calendarAndPupUp">
                        <div className="calendar">
                            <header className="mainHeader">
                                <button className="addMeetingButton" onClick={() => {
                                    toggleAddMeetingPopUp();
                                }}>Add Meeting
                                </button>
                                <CalendarHeader/>
                            </header>
                            <TableDaysHeader/>
                            <SlotsCreator/>
                        </div>
                        <div>
                            {isOpen && <Popup
                                content={<MeetingCreator togglePopUp={toggleAddMeetingPopUp}/>}
                                handleClose={toggleAddMeetingPopUp}/>}
                        </div>
                    </div>
                </MeetingsProvider>
            </DaysProvider>
        </DateProvider>
    )
}

export default Calendar;
