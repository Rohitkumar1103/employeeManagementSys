import React, { useState } from 'react'

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    setEmail('')
    setPassword('')
    //
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
