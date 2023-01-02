import React, { createContext } from 'react';

export const UserContext = createContext();


const Context = ({ children }) => {
    const user = 'Abdur Rahman'
    const contextInfo = {user}

    return (
        <UserContext.Provider value={contextInfo}>
            {children}
       </UserContext.Provider>
    );
};

export default Context;