import React, { ReactNode, createContext, useState } from 'react';

type AuthProviderProps = {
    children: ReactNode
}

type IAuthContext = {
    authenticated: boolean;
    setAuthenticated: (newState: boolean) => void;
}

const initialValue = {
    authenticated: false,
    setAuthenticated: () => {}
}

// This is the context that checks if user has set their cookie
const AuthContext = createContext<IAuthContext>(initialValue);

const AuthProvider = ({ children } : AuthProviderProps) => {

    const [authenticated, setAuthenticated] = useState(initialValue.authenticated);

    return (
        <AuthContext.Provider value={{authenticated, setAuthenticated}}>
            { children }
        </AuthContext.Provider>

    );
}

export { AuthContext, AuthProvider }