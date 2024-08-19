import React, { createContext, useState, ReactNode } from 'react';

type UserProviderProps = {
    children: ReactNode;
}

type IUserContext = {
    user: number;
    setUser: (user: number) => void;
}

const initialValue = {
    user: -1,
    setUser: () => {}
}

const UserContext = createContext<IUserContext>(initialValue)

const UserProvider = ({ children } : UserProviderProps) => {
    
    const [user, setUser] = useState(initialValue.user)

    return (
        <UserContext.Provider value = {{user, setUser}}>
            { children }
        </UserContext.Provider>
    );

};

export { UserContext, UserProvider }