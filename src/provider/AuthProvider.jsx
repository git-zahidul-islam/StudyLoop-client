import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import app from "../firebase/firebase.config";




export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const auth = getAuth(app)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const createUserWithEmail = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const userLogOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const loginWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const loginWithGithub = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
    // update profile
    const profileUpdate = (name, photo_url) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo_url,
        })
    }


    // observer 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
            console.log("the observer is:",currentUser);
        })
        return () => {
            unSubscribe()
        }
    }, [auth])

    const allData = {
        createUserWithEmail,
        userLogin,
        userLogOut,
        loginWithGoogle,
        loginWithGithub,
        profileUpdate,
        setUser,
        user,
        loading
    }
    return (
        <AuthContext.Provider value={allData}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.object.isRequired
}
export default AuthProvider;