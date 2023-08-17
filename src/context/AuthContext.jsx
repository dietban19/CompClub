import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase.jsx";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
const AuthContext = React.createContext();
// console.log(auth);
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // // Signed up
        // const user = userCredential.user;
        // // ...
        console.log("USERCREDNETIAL", userCredential);
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log(errorCode);
        console.log(errorMessage);
        return errorCode;
      });
  }
  function login(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("success", userCredential);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
  function signOutFunc() {
    signOut(auth)
      .then(() => {
        console.log("SIGNOUT");
      })
      .catch((error) => {
        // An error happened.
      });
  }
  useEffect(() => {
    const unsubsribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubsribe;
  }, []);

  const value = { currentUser, signup, login, signOutFunc };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
