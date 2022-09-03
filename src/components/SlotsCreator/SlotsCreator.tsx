import React from "react";
import Day from "../Day/Day";
import {SlotsProps} from "../propsTypes";
import PlaceHolder from "../../UI components/PlaceHolder";

const createPlaceHolderElementArr = (numberOsCells: number): JSX.Element[]=> {
    let arr = [];
    for (let i = 0; i < numberOsCells; i++) {
        arr.push(<PlaceHolder
            height={'150px'}
            width={'auto'}
            key={i}
        />)
    }
    return arr;
}

const createDaysElementArr = (props: SlotsProps): JSX.Element[] => {
    return props.days.map((day) => (
        <Day
            key={day.toLocaleDateString()}
            date={day}
            meetings={props.meetings?.[day.toLocaleDateString()]}
            setMeetings={props.setMeetings}
        />
    ))
}

const createSlotsElementArr = (placeHolderNumOfDays: number, props: SlotsProps): JSX.Element[] => {
    return [...createPlaceHolderElementArr(placeHolderNumOfDays),
        ...createDaysElementArr(props)]
}

const SlotsCreator = (props: SlotsProps) => {
    const placeHolderNumOfDays = props.days[0].getDay();
    return (
        <div className="calendar">
            <div className="slots">
                {createSlotsElementArr(placeHolderNumOfDays, props)}
            </div>
        </div>
    );
};

export default SlotsCreator;