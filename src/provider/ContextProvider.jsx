import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config';

const auth = getAuth(app)

export const authContext = createContext(null)

const ContextProvider = ({ children }) => {
  const [user, setuser] = useState(null)

  //createuser
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    return signOut(auth)
  }

  //user observer
  useEffect(() => {
    const observer = onAuthStateChanged(auth, (loginUser) => {
      setuser(loginUser)
    })
    //close observer
    return () => {
      return observer();
    }
  }, [])
  const authInfo = {
    user,
    auth,
    createUser,
    signIn,
    logOut,
    user
  }
  return (
    <authContext.Provider value={authInfo}>
      {children}
    </authContext.Provider>
  );
};

export default ContextProvider;