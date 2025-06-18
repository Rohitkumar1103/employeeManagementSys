// import React, { createContext, useEffect, useState } from 'react'
// import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

// export const AuthContext = createContext()

// const AuthProvider = ({children}) => {
//     const [userData, setUserData] = useState(null)

//     useEffect(() => {
//       setLocalStorage()
//       const {employees} = getLocalStorage()
//       setUserData(employees)
//     }, []) 
    

//     return (
//       <div>
//       <AuthContext.Provider value={[userData, setUserData]}>
//         {children}
//       </AuthContext.Provider>
//       </div>
//   )
// }

// export default AuthProvider




import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    setLocalStorage();
    const { employees } = getLocalStorage();
    setUserData(employees);
  }, []);

  // Update local storage whenever userData changes
  useEffect(() => {
    if (userData && userData.length) {
      setLocalStorage({ employees: userData });
    }
  }, [userData]);

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
