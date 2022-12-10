import React, {useState, createContext, useContext} from 'react';
import {generateDates} from "../components/Calendar/helpers/generateDates";
import DateContext from "./DateContext";


const DaysContext = createContext({});

export function DaysProvider ({children}: any) {
    // @ts-ignore
    const {date} = useContext(DateContext);
    const [days, setDays] = useState(generateDates(date));

    return (
        <DaysContext.Provider value={{days, setDays}}>
            {children}
        </DaysContext.Provider>
    );
}

export default DaysContext;
