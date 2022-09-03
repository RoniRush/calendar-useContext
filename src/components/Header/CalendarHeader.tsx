import React from "react";
import '../TableDaysHeader/TableDaysHeader.css'
import {CalendarHeaderProps} from "../propsTypes";
import './CalendarHeader.css'
import {goMonthBack, goMonthForward} from "./helpers/changeMonth";

const CalendarHeader = (props: CalendarHeaderProps) => {
    return (
        <div className="header">
            <button
                style={{display: 'inline-block', alignContent: 'center'}}
                onClick={() => {
                    goMonthBack(props);
                }}>{"<"}</button>
            <div className="currentMonth">
                {props.date.toISOString().substring(0, 7)}
            </div>
            <button
                style={{display: 'inline-block', alignContent: 'center'}}
                onClick={() => {
                    goMonthForward(props);
                }}>{">"}</button>
        </div>
    )
};

export default CalendarHeader;