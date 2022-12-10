import React from "react";
import '../TableDaysHeader/TableDaysHeader.css'
import './CalendarHeader.css'
import {goMonthBack, goMonthForward} from "./helpers/changeMonth";
import {useContext} from "react";
import DateContext from "../../Context/DateContext";
import DaysContext from "../../Context/DaysContext";

const CalendarHeader = () => {
    // @ts-ignore
    const {date, setDate} = useContext(DateContext);
    // @ts-ignore
    const {setDays} = useContext(DaysContext);

    return (
        <div className="header">
            <button className="prevButton"
                    onClick={() => {
                        goMonthBack({date, setDate, setDays});
                    }}>{"<"}</button>
            <div className="currentMonth">
                {date.toISOString().substring(0, 7)}
            </div>
            <button className="nextButton"
                    style={{display: 'inline-block'}}
                    onClick={() => {
                        goMonthForward({date, setDate, setDays});
                    }}>{">"}</button>
        </div>
    )
};

export default CalendarHeader;