// // // import React, { useState } from 'react'


// // // const Login = ({handleLogin}) => {
// // //   const [email, setEmail] = useState('')
// // //   const [password, setPassword] = useState('')
  
// // //   const submitHandler = (e)=>{
// // //       e.preventDefault()
// // //       handleLogin(email, password)
// // //       setEmail("")
// // //       setPassword("")
// // //     }

// // //   return (
// // //     <div className='flex h-screen w-screen items-center justify-center'>
// // //       <div className='border-2 border-emerald-600 p-20'>
// // //         <form 
// // //         onSubmit={ (e)=>{
// // //           submitHandler(e)
// // //         }} 
// // //         className='flex flex-col items-center justify-center'>
// // //           <input 
// // //           value= {email}
// // //           onChange={(e)=>{
// // //             setEmail(e.target.value)
// // //           }}
// // //           required 
// // //           className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-3  px-5 rounded-full placeholder: text-gray-400' type = "Email" placeholder='Enter your e-mail'
// // //           />
// // //           <input
// // //           value= {password}
// // //           onChange={(e)=>{
// // //             setPassword(e.target.value)
// // //           }} 
// // //           required 
// // //           className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-3  px-5 rounded-full mt-3 placeholder: text-gray-400' type = "Password" placeholder='Enter your password'/>
// // //           <button className='mt-5 text-white border-none outline -none bg-emerald-600 text-xl py-3  px-5 rounded-full placeholder: text-white'> Log in </button>
// // //         </form>
// // //       </div>

// // //     </div>
// // //   )
// // // }

// // // export default Login



// import React, { useState } from 'react'

// const Login = ({ handleLogin }) => {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   const submitHandler = (e) => {
//     e.preventDefault()
//     handleLogin(email, password)
//     setEmail("")
//     setPassword("")
//   }

//   return (
//     <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
//       <div className="bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl p-10 w-[350px] border border-white/20">
//         <h2 className="text-3xl font-semibold text-white mb-8 text-center">Welcome Back 👋</h2>
//         <form onSubmit={submitHandler} className="flex flex-col gap-5">
//           <input
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             type="email"
//             placeholder="Enter your email"
//             className="w-full px-4 py-3 rounded-xl bg-white/10 text-white border border-white/30 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
//           />
//           <input
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             type="password"
//             placeholder="Enter your password"
//             className="w-full px-4 py-3 rounded-xl bg-white/10 text-white border border-white/30 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
//           />
//           <button
//             type="submit"
//             className="mt-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-xl transition"
//           >
//             Log In
//           </button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Login



// // import React, { useState } from 'react'

// // const Login = ({ handleLogin }) => {
// //   const [email, setEmail] = useState('')
// //   const [password, setPassword] = useState('')

// //   const submitHandler = (e) => {
// //     e.preventDefault()
// //     handleLogin(email, password)
// //     setEmail('')
// //     setPassword('')
// //   }

// //   return (
// //     <div className="flex items-center justify-center h-screen w-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]">
// //       <div className="backdrop-blur-lg bg-white/5 border border-white/10 shadow-xl rounded-2xl px-10 py-12 w-full max-w-md transition-all duration-300 ease-in-out">
        
// //         {/* Optional Branding */}
// //         <div className="mb-8 text-center">
// //           <h1 className="text-4xl font-bold text-white tracking-wide">Login</h1>
// //           <p className="text-gray-300 mt-2">Welcome back! Please enter your details</p>
// //         </div>

// //         <form onSubmit={submitHandler} className="space-y-6">
// //           <div>
// //             <input
// //               type="email"
// //               required
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               placeholder="Email address"
// //               className="w-full px-5 py-3 rounded-xl text-white bg-white/10 border border-white/20 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
// //             />
// //           </div>
// //           <div>
// //             <input
// //               type="password"
// //               required
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               placeholder="Password"
// //               className="w-full px-5 py-3 rounded-xl text-white bg-white/10 border border-white/20 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
// //             />
// //           </div>
// //           <button
// //             type="submit"
// //             className="w-full py-3 bg-gradient-to-r from-emerald-400 to-green-500 hover:from-emerald-500 hover:to-green-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-md"
// //           >
// //             Log In
// //           </button>
// //         </form>

// //         {/* Optional Links */}
// //         <div className="mt-6 text-center">
// //           <p className="text-gray-400 text-sm">
// //             Forgot your password?{" "}
// //             <a href="#" className="text-emerald-400 hover:underline">
// //               Reset here
// //             </a>
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Login


















import React, { useState } from 'react'

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    setEmail('')
    setPassword('')
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl p-10 w-[350px] border border-white/20">

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white">Login</h2>
          <p className="text-gray-300 mt-1">Welcome back! Please enter your details</p>
        </div>

        {/* Form */}
        <form onSubmit={submitHandler} className="flex flex-col gap-5">
          <div>
            <label className="text-gray-300 text-sm mb-1 block" htmlFor="email">Email address</label>
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl bg-white/10 text-white border border-white/30 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
            />
          </div>

          <div>
            <label className="text-gray-300 text-sm mb-1 block" htmlFor="password">Password</label>
            <input
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-xl bg-white/10 text-white border border-white/30 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
            />
          </div>

          <button
            type="submit"
            className="mt-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-xl transition"
          >
            Log In
          </button>
        </form>

        {/* Forgot password */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            Forgot your password?{' '}
            <a href="#" className="text-emerald-400 hover:underline">
              Reset here
            </a>
          </p>
        </div>

      </div>
    </div>
  )
}

export default Login
