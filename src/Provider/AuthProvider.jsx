// import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext=createContext(null);
const auth=getAuth(app);

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);
    const [loading , setLoading]=useState(true);

    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut=()=>{
        setLoading(true);
        return signOut(auth)
    }
    const forgetPassword=(email)=>{
        setLoading(true);
        return sendPasswordResetEmail(auth,email);
    }
    const emailVerification=(user)=>{
        setLoading(true);
        return sendEmailVerification(user);
    }
    const googleprovider= new GoogleAuthProvider();
    const signWithGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth,googleprovider);
    }

    const githubProvider=new GithubAuthProvider();
    const signWithGithub=()=>{
        setLoading(true);
        return signInWithPopup(auth,githubProvider);
    } 

   

    const authInfo={
        user,
        createUser,
        logOut,
        signIn,
        loading,
        forgetPassword,
        emailVerification,
        signWithGoogle,
        signWithGithub

    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            console.log('user in the on auth state',currentUser);
            setUser(currentUser);
            setLoading(false);
        })
       return()=>{
        unSubscribe();
       }
    },[])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;