import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorqage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [userData, setUserData] = useState(null)


    useEffect(() => {
      setLocalStorage()
      const {employees, admin} = getLocalStorqage()
      setUserData({employees, admin})
    }, []) 
    



    return (
    <div>
      <AuthContext.Provider value={userData}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider