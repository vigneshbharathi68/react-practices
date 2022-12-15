import React, { useState, createContext } from 'react';
import { BackBtn } from 'components/BackButton/BackBtn';
import Login from './Login';
import User from './User';

export const AppContext = createContext(null);

export const ContextTutorial = () => {
    const [ username, setUsername ] = useState("")

    return (
        <AppContext.Provider value={ {username, setUsername} }>
            <BackBtn />
            <Login /> 
            <User />
        </AppContext.Provider>
    )
}

// export default ContextTutorial;
