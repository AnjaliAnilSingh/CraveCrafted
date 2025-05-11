import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FeaturedRecipe = () => {
  const [recipe, setRecipe] = useState(null);
  const APP_ID = 'process.env.APPID';
  const APP_KEY = 'process.env.APPKEY';
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`https://api.edamam.com/search?q=pasta&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=1`);
        const fetchedRecipe = response.data.hits[0].recipe;
        setRecipe(fetchedRecipe);
      } catch (error) {
        console.error('Error fetching the recipe:', error);
      }
    };
    fetchRecipe();
  }, []);

  const handleCardClick = () => {
    // Navigate to the RecipePage with the recipe details
    navigate('/featured-recipe', { state: recipe });
  };

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div 
      className="flex items-center justify-between bg-white border-2 shadow-md rounded-lg max-w-3xl mx-auto h-[300px] my-[50px] hover:border-[#caa98e] cursor-pointer" 
      onClick={handleCardClick}
    >
      <div className="flex-1 px-6">
        <h2 className="uppercase font-bold text-orange mb-7">featured recipe</h2>
        <h2 className="text-2xl font-bold mb-2">{recipe.label}</h2>
        <p className="text-gray-600 mb-1">Category: {recipe.dishType || 'N/A'}</p>
        <p className="text-gray-600">Duration: {recipe.totalTime ? `${recipe.totalTime} mins` : 'N/A'}</p>
      </div>
      <div className="ml-4">
        <img
          src={recipe.image}
          alt={recipe.label}
          className="w-61 h-61 object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default FeaturedRecipe;