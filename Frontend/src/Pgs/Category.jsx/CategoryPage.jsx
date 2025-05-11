import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../../Comp/Header';
import axios from 'axios';
import CategoryWrapper from './CategoryWrapper';
import Footer from '../../Comp/Footer'

const CategoryPage = () => {
  const { category } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Navigation hook to redirect users
  const appId = 'process.env.APPID';
  const appKey = 'process.env.APPKEY';

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          `https://api.edamam.com/search?q=${category}&app_id=${appId}&app_key=${appKey}`
        );
        setRecipes(response.data.hits);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [category]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleRecipeClick = (recipe) => {
    navigate(`/recipe/${recipe.label}`, { state: recipe }); // Pass the entire recipe as state
  };


  return (
    <div>
    <Header />
    <div className="px-6">
      <CategoryWrapper />
      <h1 className="text-center text-3xl mt-10 font-semibold capitalize">{category}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 mx-10">
        {recipes.map((item, index) => (
          <div key={index} className="border rounded-lg bg-white shadow-lg transition-transform duration-300 hover:shadow-xl hover:scale-105" onClick={() => handleRecipeClick(item.recipe)}>
            <img src={item.recipe.image} alt={item.recipe.label} className="w-full h-48 object-cover" />
            <h2 className="text-xl font-semibold mb-2 p-3">{item.recipe.label}</h2>
            <p className="text-gray-700 p-3">Calories: {Math.round(item.recipe.calories)}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default CategoryPage;
