import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, } from 'firebase/auth'
export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthContextProviders = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email,password)
    }
    const signIn = (email,password) =>{
        return signInWithEmailAndPassword (auth,email,password);
    }
    const logOut = () =>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unSubscribed = onAuthStateChanged(auth, currentUser =>{
            console.log('auth state change', currentUser)
            setUser(currentUser);
            setLoading(false)
        });
        return () =>{
            unSubscribed();
        }
    },[])
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthContextProviders;