import {AllMeetings, MeetingType} from "../localStorage/types";

export type DayProps = {
    date: Date,
    meetings: MeetingType[],
}

export enum DaysOfWeek {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
}

export type MeetingProps = {
    meetings: MeetingType[] | undefined,
}

export type MeetingCreatorProps = {
    setMeetings: any,
    togglePopUp: () => void,
}

export type CalendarHeaderProps = {
    date: Date,
    setDate: (date: Date) => void,
    setDays: (dates: Date[]) => void,
}

export type SlotsProps = {
    days: Date[],
    meetings: AllMeetings,
}
export type MeetingDisplayProps = {
    title: string,
    date: string,
    description: string,
    time: string,
}