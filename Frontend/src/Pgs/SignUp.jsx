import React from 'react'
import Logo from './../assets/Logo.png'
import { useState } from 'react'
import axios from 'axios'

const SignUp = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault();

    if (username == '' || password == '') {
      alert('Fields cannot be empty')
    }
    else {
      const bool = await userAvaliable(username)
      if (bool) {
        createUser(username, password);
      }
    }
  }

  const createUser = async (username, password) => {
    await axios.post('http://localhost:3001/createUser', { username, password })
      .then((resp) => {
        if (resp.data.created) {
          alert('Your account has been created!')
          window.location.reload();
        }
      })
      .catch(
        err => console.log(err)
      )
  }

  const userAvaliable = async () => {
    try {
      const resp = await axios.post('http://localhost:3001/check', { username });

      if (resp.data.exists) {
        alert('Username already exists :(');
        return false;
      } else {
        console.log('Username available :)');
        return true;
      }
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="CraveCrafted"
            src={Logo}
            className="mx-auto h-10 w-auto"
          />
          <div className="mt-3 border-t border-gray-500"></div>
          <h2 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up for an account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={onSubmit} method="POST" className="space-y-6">

            {/* Username Input */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={username}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => {
                    const value = e.target.value.replace(/\s/g, '')
                    setUsername(value)
                  }}
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={password} onChange={(e) => {
                    const value = e.target.value.replace(/\s/g, '')
                    setPassword(value)
                  }} />
              </div>
            </div>

            {/* Confirm Password Input */}
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium leading-6 text-gray-900">
                Confirm Password
              </label>
              <div className="mt-2">
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  required
                  autoComplete="new-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Sign Up Button */}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-teal px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp