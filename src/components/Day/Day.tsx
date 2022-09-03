import "./Day.css";
import React from "react";
import {DayProps} from "../propsTypes";
import {isFriday, isSaturday, isToday} from 'date-fns'
import Meeting from "../Meeting/Meeting";

const Day = (props: DayProps) => {
    const dayNumber = (props.date.getDate()).toString();
    const isWeekend = isFriday(props.date) || isSaturday(props.date);
    const isDateToday = isToday(props.date);
    return (
        <div className="day" style={{backgroundColor: isWeekend ? 'salmon' : 'white'}}>
            <header>
                <div className="dayNumber" style={{backgroundColor: isDateToday ? 'grey' : 'transparent'}}>
                    {dayNumber}
                </div>
                <Meeting meetings={props.meetings}/>
            </header>
        </div>
    );
};

export default Day;