import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Components/Firebase/Firebase.config";


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [nameUser, setNameUser] = useState('');

    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
      }
      const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
      }
      const signOut1 = () => {
        setLoading(true);
        return signOut(auth);
      }

      const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
      }

      useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
          setUser(currentUser);
          setLoading(false)
        });
        return () => {
          unSubscribe();
        }
      },[])




    const userInfo = {user, registerUser, signOut1, googleLogin ,loginUser, loading, nameUser, setNameUser}
    return (
        <div>
      <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    </div>
    );
};

export default AuthProvider;