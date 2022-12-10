import React, {useState, createContext} from 'react';
import {AllMeetings} from "../localStorage/types";
import {getAllMeetings} from "../localStorage/meetingActions";


const MeetingsContext = createContext({});

export function MeetingsProvider({children}: any) {
    const [meetings, setMeetings] = useState<AllMeetings>(getAllMeetings());

    return (
        <MeetingsContext.Provider value={{meetings, setMeetings}}>
            {children}
        </MeetingsContext.Provider>
    );
}

export default MeetingsContext;