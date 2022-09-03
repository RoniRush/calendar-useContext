import {getAllMeetings} from "../../localStorage/meetingActions";

export const isNumberOfMeetingsValid = (date: Date): boolean => {
    const allMeetings = getAllMeetings();
    const stringDate = date.toLocaleDateString();
    return allMeetings[stringDate]?.length < 5 || allMeetings[stringDate] === undefined;
}