import React, { createContext } from 'react';
import app from '../Firebase/firebase.config';
import { getAuth} from 'firebase/auth'
export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthContextProviders = ({children}) => {
    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthContextProviders;