import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import SignUp from '../Pgs/SignUp';
import Login from '../Pgs/Login';
import AccountIcon from './AccountIcon'

const Header = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const toggleSignUp = () => setShowSignUp(!showSignUp);
  const toggleLogin = () => setShowLogin(!showLogin);

  const username = localStorage.getItem("username"); // Get username from localStorage

  return (
    <div className="flex justify-between p-4 sticky top-0 z-20 bg-creme shadow-lg">
      <a href="/" className="mr-[160px]">
        <img src={Logo} alt="logo" className="h-10 w-50 ml-[70px]" />
      </a>
      <ul className="flex-grow flex items-center gap-5">
        <li>
          <Link to="/" className="font-semibold text-orange-700 hover:font-bold hover:underline mx-4 text-xl">Home</Link>
        </li>
        <li>
          <Link to="/recipes" className="text-orange-700 hover:font-bold hover:underline mx-4 text-xl">Recipes</Link>
        </li>
        <li>
          <Link to="/aboutus" className="text-orange-700 hover:font-bold hover:underline mx-4 text-xl">About us</Link>
        </li>
      </ul>

      {
        (localStorage.getItem("username")) ?
          (<AccountIcon username={username}/>) : (<ul className="flex-grow flex justify-center items-center gap-7">
            <li>
              <button onClick={toggleSignUp} className="text-white bg-[#322c24] hover:border-black hover:shadow-xl rounded-xl px-5 py-1.5 text-xl">Sign up</button>
            </li>
            <li>
              <button onClick={toggleLogin} className="text-white bg-[#caa98e] hover:border-black hover:shadow-xl rounded-xl px-5 py-1.5 text-xl">Login</button>
            </li>
          </ul>)
      }

      {/* Signup Modal */}
      {showSignUp && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-30">
          <div className="bg-white p-5 rounded-lg shadow-lg relative">
            <button onClick={toggleSignUp} className="absolute top-2 right-2">X</button>
            <SignUp />
          </div>
        </div>
      )}

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-30">
          <div className="bg-white p-5 rounded-lg shadow-lg relative">
            <button onClick={toggleLogin} className="absolute top-2 right-2">X</button>
            <Login />
          </div>
        </div>
      )}
    </div>
  );
}
export default Header;