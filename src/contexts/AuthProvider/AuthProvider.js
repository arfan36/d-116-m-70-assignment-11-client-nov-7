import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';

// Context
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    // state
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // signIn with Provider
    const ProviderLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };

    // create user with email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // sign In with email and password
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // update profile 
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    };

    // LogOut
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    // set currentUser
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('inside auth state changed', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);


    // Context value
    const authInfo = {
        user,
        loading,
        setLoading,
        ProviderLogin,
        createUser,
        login,
        updateUserProfile,
        logOut
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;