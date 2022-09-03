import "./Day.css";
import React from "react";
import {DayProps} from "../propsTypes";
import {isFriday, isSaturday, isToday} from 'date-fns'
import Meeting from "../MeetingsList/MeetingsList";

const Day = (props: DayProps) => {
    const dayNumber = (props.date.getDate()).toString();
    const isWeekend = isFriday(props.date) || isSaturday(props.date);
    const isDateToday = isToday(props.date);
    return (
        <div className="day" style={{backgroundColor: isWeekend ? '#E6E6FA' : 'white'}}>
            <header>
                <div className="dayNumber"
                     style={{border: isDateToday ? '2px solid black' : 'transparent'}}>
                    {dayNumber}
                </div>
            </header>
            <div className="meetingList">
                <Meeting meetings={props.meetings}/>
            </div>
        </div>
    );
};

export default Day;

