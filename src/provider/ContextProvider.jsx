import React, { createContext } from 'react';

export const authContext = createContext(null)

const ContextProvider = ({ children }) => {
  const user = {
    displayName: "Mahmudul hasan"
  }
  const authInfo = {
    user,
  }
  return (
    <authContext.Provider value={authInfo}>
      {children}
    </authContext.Provider>
  );
};

export default ContextProvider;