import React, { createContext } from 'react';
export const AuthContext = createContext(null)
const user = { displayName: 'Meraj hossain' };
const AuthContextProviders = ({children}) => {
    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthContextProviders;