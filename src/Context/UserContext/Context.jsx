import React, { createContext, useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import {createUserWithEmailAndPassword,  GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import { app } from '../Authentication/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();



export const UserContext = createContext();


const Context = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, isLoading] = useState(true);

    const googleSign = () => {
        isLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        return signOut(auth);
    }

    const emailSignIn = (email, password) => {
        isLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const emailSignUp = (email, password) => {
        isLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (name,photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }
     
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log('current user:', currentUser);
           isLoading(false);
       })
        return () => {
            unsubscribe();
        }
    },[])
    
    const contextInfo = {user,loading,googleSign,logOut,emailSignUp,emailSignIn,updateUser}

    return (
        <UserContext.Provider value={contextInfo}>
            {children}
       </UserContext.Provider>
    );
};

export default Context;