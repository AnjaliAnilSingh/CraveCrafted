import React from 'react'
import Logo from './../assets/Logo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import axios from 'axios'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault();
    if (username, password == "") {
      alert('Fields cannot be empty')
    }
    else {
      authUser(username, password)
    }
  }

  const authUser = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:3001/auth', { username, password });
      console.log(response.data)
      if (response.data.validCreds) {
        localStorage.setItem("username", username)
        localStorage.setItem("id", response.data.id)
        alert("You are successfully logged in!")
      } else {
        alert(response.data.message)
      }
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center mt-[30px] px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img alt="CraveCrafted" src={Logo} className="mx-auto h-10 w-auto" />

          <div className="mt-6 border-t border-gray-300"></div>

          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={onSubmit}>
            <div>
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username-login"
                  name="username"
                  type="text"
                  value={username}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => { setUsername(e.target.value) }}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password-login"
                  name="password"
                  type="password"
                  value={password}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => { setPassword(e.target.value) }}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-teal px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            Do not have an account?{' '}
            <Link to="" className="font-semibold text-orange hover:text-indigo-500">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login
