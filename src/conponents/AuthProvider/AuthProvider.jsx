import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged,  signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";

// crate a context
export const authContext = createContext()
const AuthProvider = ({ routes }) => {

    // login user info save korar jonno ekta state nite hobe
    const [user, setUser] = useState(null);

    // loading korci jate reload marle login page ea na niye ja
    const [loading, setLoading] = useState(true);
    // google provider
    const googleProvider = new GoogleAuthProvider();

    // Register
    const handleRegister = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
        // automatic logout koriye dicii jate notun kore abr log in kora lage
        // .then(res =>signOut(auth))
    }

    // Login
    const handleLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login
    const handleGoogleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
     }

    //  update profile
    const manageProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName:name,photoURL:photo
        })
    }

    // logout
    const handleLogout = () => {
        return signOut(auth)
    }

    // call all function
    const authInfo = {
        handleRegister,
        handleLogin,
        handleLogout,
        handleGoogleLogin,
        manageProfile,
        user,
        setUser,
        loading,
        
    }

    // need observer najor rakhar jonno auth er upor reload marleao asbe user information
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
           setUser(currentUser)
            setLoading(false);

            return () => {
                unsubscribe(); 
            }
        })
    }, [])
    return (
        <div>
            <authContext.Provider value={authInfo}>
                {
                    routes
                }
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;