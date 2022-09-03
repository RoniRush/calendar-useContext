import {AllMeetings} from "./types";

export const addMeeting = (title: string, date: Date, time: string, description: string): AllMeetings => {
    const stringDate = date.toLocaleDateString();
    const allMeetings =
        JSON.parse(localStorage.getItem("allMeetings")!) === null
            ? {}
            : JSON.parse(localStorage.getItem("allMeetings")!);
    allMeetings[stringDate] = [
        ...(allMeetings?.[stringDate] || []),
        {title, time, description, id: crypto.randomUUID(), date: stringDate},
    ];
    const toStore = JSON.stringify(allMeetings);
    localStorage.setItem("allMeetings", toStore);
    return allMeetings;
};

export const getAllMeetings = () => {
    return JSON.parse(localStorage.getItem("allMeetings")!) === null
        ? {}
        : JSON.parse(localStorage.getItem("allMeetings")!);
}