import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'
//import { getLocalStorage, setLocalStorage } from './utils/localStorage'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null)
  const authData = useContext(AuthContext)

  // useEffect(() => {
  //   if(authData){
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }
  
  // }, [authData])


  useEffect(() => {
  if (authData) {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser?.role === "admin") {
      setUser("admin");
    } else if (loggedInUser?.role === "employee") {
      const employee = authData.employees.find(
        (e) => e.email === loggedInUser.email
      );
      if (employee) {
        setUser("employee");
        setloggedInUserData(employee);
      }
    }
  }
}, [authData]);

  
  
  // const handleLogin =(email, password)=>{
  //   if(email == 'admin@me.com' && password == '123'){
  //     setUser('admin')
  //     localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin'}))
  //   } else if(authData){
  //     const employee = authData.employees.find((e) => email == e.email && e.password == password)
  //     if(employee){
  //     setUser('employee') 
  //     // setloggedInUserData(employee)
  //     localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee'}))
  //     }
  //   }
  //   else{
  //     alert("Invalid Credentials")
  //   }
  // }





  const handleLogin =(email, password)=>{
  if(email === 'admin@me.com' && password === '123'){
    setUser('admin')
    localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin'}))
  } else if(authData){
    const employee = authData.employees.find((e) => email === e.email && e.password === password)
    if(employee){
      setUser('employee') 
      setloggedInUserData(employee)
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee'}))
    } else {
      alert("Invalid Credentials")
    }
  } else {
    alert("Invalid Credentials")
  }
}

  
  const data = useContext(AuthContext)
  console.log(data)

  return (
  <>
  {!user ? <Login handleLogin={handleLogin}/>: ''}
  {user == 'admin' ? <AdminDashboard/> : (user == 'employee' ? <EmployeeDashboard data = {loggedInUserData}/> : null)}
  </>
  )
}

export default App