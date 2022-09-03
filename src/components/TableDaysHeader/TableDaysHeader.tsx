import React from "react";
import './TableDaysHeader.css'
import {daysOfWeekArray} from "../constants";

const TableDaysHeader = () => {
    return (
        <div className="dayNamesRow">
            <div className="dayNames">
                {daysOfWeekArray.map((day) => (
                    <div key={day}>{day}</div>
                ))}
            </div>
        </div>
    )
};

export default TableDaysHeader;