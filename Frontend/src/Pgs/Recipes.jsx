import React, { useEffect, useState } from 'react';
import Header from './../Comp/Header'
import Footer from './../Comp/Footer'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RecipePage = () => {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();
  const APP_ID = 'process.env.APPID';
  const APP_KEY = 'process.env.APPKEY';

  // Fetching data from the API
  useEffect(() => {
    const fetchRecipes = async () => {
      const url = `https://api.edamam.com/search?q=random&app_id=${APP_ID}&app_key=${APP_KEY}`;
      try {
        const response = await axios.get(url);
        setRecipes(response.data.hits);
      } catch (error) {
        console.error("Error fetching trending recipes:", error);
      }
    };
    fetchRecipes();
  }, []);

  const handleRecipeClick = (recipe) => {
    // Navigate to the RecipePage with the recipe details
    navigate(`/recipe/${recipe.label}`, { state: recipe });
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto mt-8">
        <h1 className="text-2xl font-bold mb-4">Recipes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {recipes.map((recipeData, index) => {
            const recipe = recipeData.recipe; // Extracting the recipe object
            return (
              <div
                key={index}
                className="border bg-white rounded-lg cursor-pointer hover:transition-transform duration-500 hover:scale-105 shadow-lg"
                onClick={() => handleRecipeClick(recipe)}
              >
                <img
                  src={recipe.image}
                  alt={recipe.label}
                  className="w-full h-48 object-cover"
                />
                <h2 className="text-xl font-semibold mb-2 p-3">{recipe.label}</h2>
                <p className="text-gray-700 p-3">Calories: {Math.round(recipe.calories)}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RecipePage;