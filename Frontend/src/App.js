import React from 'react';
import { useState } from 'react'
import './App.css';
import { Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Pgs/Home';
import Recipes from './Pgs/SingleRecipePage';
import Aboutus from './Pgs/Aboutus'
import Header from './Comp/Header';
import SignUp from './/Pgs/SignUp';
import Login from './/Pgs/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInitial, setUserInitial] = useState('');
  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} userInitial={userInitial} />
      <Routes>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUserInitial={setUserInitial} />} />
      </Routes>
    </Router>
  );
}

export default App;
