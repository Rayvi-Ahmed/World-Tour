import { createContext, useEffect, useState } from "react";
import { app } from "../../../public/Firebase/FirebaseConfig";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";


const AuthContext = createContext()
const auth = getAuth(app)

// Stat Authentication//
export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)


    // User Registered
    const createUser = (email, password) => {
        setLoading(false)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //  User Login//
    const logIn = (email, password) => {
        setLoading(false)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Manage User by observer//
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser)
                console.log('This is the new user', currentUser)
                setLoading(false)
            }
        })
        return () => {
            return unsubscribe()
        }
    }, [])

    // LogOut//
    const logOut = () => {
        setLoading(false)
        signOut(auth)
    }

    // Sending all context for access from anyware///
    const authInfo = {
        createUser,
        loading,
        logIn,
        logOut,
        user,
        setUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    )
}

