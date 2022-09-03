export type MeetingType = {
    id: string,
    title: string,
    date: string,
    description: string,
    time: string,
}

export interface AllMeetings {
    [date: string]: MeetingType[];
}