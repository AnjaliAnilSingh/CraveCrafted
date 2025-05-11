import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import Header from '../Comp/Header.jsx'
import Footer from '../Comp/Footer.jsx'

const SingleRecipePage = () => {
  const { state: recipe } = useLocation(); // Get recipe details from the passed state

  return (
    <div>
      <Header />
      <div className="w-[1000px] mx-[200px] mt-10 p-6 bg-white rounded-2xl">
        <h1 className="text-2xl font-bold my-10">{recipe.label}</h1>
        <img src={recipe.image} alt={recipe.label} className="w-full h-64 object-cover rounded-lg mb-4" />
        <div className="flex justify-between mb-4">
          <p><strong>Calories:</strong> {Math.round(recipe.calories)}</p>
          <p><strong>Total Time:</strong> {recipe.totalTime || 'N/A'} mins</p>
        </div>
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc pl-6 mb-4">
          {recipe.ingredientLines.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <p>{recipe.url ? (
          <a href={recipe.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
            View full instructions here
          </a>
        ) : 'No instructions available.'}
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default SingleRecipePage;
