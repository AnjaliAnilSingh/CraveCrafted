import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react'
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import ErrorPage from './Comp/ErrorPage';
import Home from './Pgs/Home'
import CategoryPage from './Pgs/Category.jsx/CategoryPage.jsx';
import SearchResults from './Pgs/SearchResults.jsx';
import SingleRecipePage from './Pgs/SingleRecipePage.jsx';
import SignUp from './Pgs/SignUp.jsx';
import Login from './Pgs/Login.jsx';
import Aboutus from './Pgs/Aboutus.jsx';
import Recipes from './Pgs/Recipes.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    // element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/signup",
        element: <SignUp />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/aboutus",
        element: <Aboutus />
      },
      {
        path: "/categories/:category",
        element: <CategoryPage />
      },
      {
        path: "/search/:query",
        element: <SearchResults />
      },
      {
        path: "/recipes",
        element: <Recipes />
      },
      {
        path: "/recipe/:label",
        element: <SingleRecipePage/>
      },
      {
        path: "/featured-recipe",
        element: <SingleRecipePage/>
      },
      {
        path: "/trending-recipe/:label",
        element: <SingleRecipePage/>
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();

