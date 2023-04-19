import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config';

const auth = getAuth(app)

export const authContext = createContext(null)

const ContextProvider = ({ children }) => {
  const [user, setuser] = useState(null)
  const [loading, setLoading] = useState(true)

  //createuser
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    return signOut(auth)
  }

  //user observer
  useEffect(() => {
    const observer = onAuthStateChanged(auth, (loginUser) => {
      setuser(loginUser)
      setLoading(false)
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
    user,
    loading
  }
  return (
    <authContext.Provider value={authInfo}>
      {children}
    </authContext.Provider>
  );
};

export default ContextProvider;