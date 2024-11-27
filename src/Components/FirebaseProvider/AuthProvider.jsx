import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
// import { goggleProvider, githubProvider, AuthContext } from "./AuthProvider";

import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null)
const goggleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(null)
  const [spinner, setSpinner]=useState(true)


    const createUser = (email, password) => {
       setSpinner(true);
      return createUserWithEmailAndPassword(auth, email, password);
      
    }
    const signInUser = (email, password) => {
       setSpinner(true);
      return signInWithEmailAndPassword(auth, email, password);
    }
  const goggleLogin = () => {
    return signInWithPopup(auth, goggleProvider);
  };
  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };
    const updateUserProfile = (name, image) => {
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: image,
      });
  };
   const logout = () => {
     return signOut(auth);
   };


  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log("user on the state", currentUser);
     setSpinner(false);
      setUsers(currentUser);
    
    });
    return () => {
      unSubscribe();
    };
  }, []);
    const AllValues = {
      createUser,
      signInUser,
      goggleLogin,
      githubLogin,
      updateUserProfile,
      logout,
      users,
      spinner,
      setSpinner
  };
  // console.log(users);
    return (
        <AuthContext.Provider value={AllValues}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;