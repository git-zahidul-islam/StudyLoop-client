import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import app from "../firebase/firebase.config";
import axios from "axios";




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
    const profileUpdate = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }


    // observer 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // 2 line is cookie
            const userEmail = currentUser?.email || user?.email
            const loggedUser = { email: userEmail }
            setUser(currentUser)
            setLoading(false)
            // console.log("the observer is:",currentUser);
            // cookie start
            if (currentUser) {
                axios.post('https://car-doctor-server-v2-ashen.vercel.app/jwt', loggedUser, { withCredentials: true })
                    .then(() => {
                        // console.log("the token is:", res.data);
                    })
            }
            else {
                axios.post('https://car-doctor-server-v2-ashen.vercel.app/logout', loggedUser, { withCredentials: true })
                    .then(() => {
                        // console.log("logout", res.data);
                    })
            }
            // cookie end
        })
        return () => {
            unSubscribe()
        }
    }, [auth, user?.email])

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