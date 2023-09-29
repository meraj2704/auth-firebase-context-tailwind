import React, { createContext, useState } from 'react';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, } from 'firebase/auth'
export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthContextProviders = ({children}) => {
    const [user,setUser] = useState(null);
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email,password)
    }
    const signIn = (email,password) =>{
        return signInWithEmailAndPassword (auth,email,password);
    }
    const authInfo = {
        user,
        createUser,
        signIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthContextProviders;