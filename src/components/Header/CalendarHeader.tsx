import React from "react";
import '../TableDaysHeader/TableDaysHeader.css'
import {CalendarHeaderProps} from "../propsTypes";
import './CalendarHeader.css'
import {goMonthBack, goMonthForward} from "./helpers/changeMonth";

const CalendarHeader = (props: CalendarHeaderProps) => {
    return (
        <div className="header">
            <button className="prevButton"
                onClick={() => {
                    goMonthBack(props);
                }}>{"<"}</button>
            <div className="currentMonth">
                {props.date.toISOString().substring(0, 7)}
            </div>
            <button className="nextButton"
                style={{display: 'inline-block'}}
                onClick={() => {
                    goMonthForward(props);
                }}>{">"}</button>
        </div>
    )
};

export default CalendarHeader;