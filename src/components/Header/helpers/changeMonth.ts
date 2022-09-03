import {generateDates} from "../../Calendar/helpers/generateDates";
import {addMonths} from "date-fns";
import {CalendarHeaderProps} from "../../propsTypes";

export const goMonthBack = (
    props: CalendarHeaderProps
) :void => {
    const update = getPrevMonth(props.date)
    props.setDate(update);
    props.setDays(generateDates(update));
};

export const goMonthForward = (
    props: CalendarHeaderProps
) => {
    const update = getNextMonth(props.date)
    props.setDate(update);
    props.setDays(generateDates(update));
};

const getPrevMonth = (date: Date): Date => {
    return date.getMonth() !== 1? addMonths(date, -1): new Date(date.getFullYear()-1, 12, date.getDay());
}

const getNextMonth = (date: Date): Date => {
    return date.getMonth() !== 12? addMonths(date, 1): new Date(date.getFullYear()+1, 1, date.getDay());
}