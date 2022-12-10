import React, {useContext} from "react";
import Day from "../Day/Day";
import {SlotsProps} from "../propsTypes";
import PlaceHolder from "../../UI components/PlaceHolder";
import MeetingsContext from "../../Context/MeetingsContext";
import DaysContext from "../../Context/DaysContext";

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

const SlotsCreator = () => {
    // @ts-ignore
    const {meetings, setMeetings} = useContext(MeetingsContext);
    // @ts-ignore
    const {days} = useContext(DaysContext);

    const placeHolderNumOfDays = days[0].getDay();
    return (
        <div className="calendar">
            <div className="slots">
                {createSlotsElementArr(placeHolderNumOfDays, {meetings, setMeetings, days})}
            </div>
        </div>
    );
};

export default SlotsCreator;