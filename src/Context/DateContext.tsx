import React, {useState, createContext} from 'react';


const DateContext = createContext({});

export function DateProvider ({children}: any) {
    const [date, setDate] = useState(new Date());

    return (
        <DateContext.Provider value={{date, setDate}}>
            {children}
        </DateContext.Provider>
    );
}

export default DateContext;